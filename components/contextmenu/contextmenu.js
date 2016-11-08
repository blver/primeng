import { NgModule, Component, ElementRef, Input, Renderer, EventEmitter, Inject, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { Router } from '@angular/router';
export var ContextMenuSub = (function () {
    function ContextMenuSub(domHandler, router, contextMenu) {
        this.domHandler = domHandler;
        this.router = router;
        this.contextMenu = contextMenu;
    }
    ContextMenuSub.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        this.activeItem = item;
        this.activeLink = item.children[0];
        var nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            var sublist = nextElement.children[0];
            sublist.style.zIndex = ++DomHandler.zindex;
            this.position(sublist, item);
        }
    };
    ContextMenuSub.prototype.onItemMouseLeave = function (event, link) {
        this.activeItem = null;
        this.activeLink = null;
    };
    ContextMenuSub.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url || item.routerLink) {
            event.preventDefault();
        }
        if (item.command) {
            if (!item.eventEmitter) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }
            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }
        if (item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    };
    ContextMenuSub.prototype.listClick = function (event) {
        this.activeItem = null;
        this.activeLink = null;
    };
    ContextMenuSub.prototype.position = function (sublist, item) {
        sublist.style.top = '0px';
        sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
    };
    ContextMenuSub.decorators = [
        { type: Component, args: [{
                    selector: 'p-contextMenuSub',
                    template: "\n        <ul [ngClass]=\"{'ui-helper-reset':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow':!root}\" class=\"ui-menu-list\"\n            (click)=\"listClick($event)\">\n            <template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li #item [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-menuitem-active':item==activeItem}\"\n                    (mouseenter)=\"onItemMouseEnter($event,item,child)\" (mouseleave)=\"onItemMouseLeave($event,item)\">\n                    <a #link [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                        [ngClass]=\"{'ui-state-hover':link==activeLink&&!child.disabled,'ui-state-disabled':child.disabled}\" (click)=\"itemClick($event, child)\">\n                        <span class=\"ui-submenu-icon fa fa-fw fa-caret-right\" *ngIf=\"child.items\"></span>\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <p-contextMenuSub class=\"ui-submenu\" [item]=\"child\" *ngIf=\"child.items\"></p-contextMenuSub>\n                </li>\n            </template>\n        </ul>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    ContextMenuSub.ctorParameters = [
        { type: DomHandler, },
        { type: Router, },
        { type: ContextMenu, decorators: [{ type: Inject, args: [forwardRef(function () { return ContextMenu; }),] },] },
    ];
    ContextMenuSub.propDecorators = {
        'item': [{ type: Input },],
        'root': [{ type: Input },],
    };
    return ContextMenuSub;
}());
export var ContextMenu = (function () {
    function ContextMenu(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
    }
    ContextMenu.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.el.nativeElement.children[0];
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
            _this.hide();
        });
        if (this.global) {
            this.documentRightClickListener = this.renderer.listenGlobal('body', 'contextmenu', function (event) {
                _this.show(event);
                event.preventDefault();
            });
        }
    };
    ContextMenu.prototype.show = function (event) {
        this.position(event);
        this.visible = true;
        this.domHandler.fadeIn(this.container, 250);
        event.preventDefault();
    };
    ContextMenu.prototype.hide = function () {
        this.visible = false;
    };
    ContextMenu.prototype.position = function (event) {
        var left = event.pageX;
        var top = event.pageY;
        var width = this.container.offsetParent ? this.container.offsetWidth : this.domHandler.getHiddenElementOuterWidth(this.container);
        var height = this.container.offsetParent ? this.container.offsetHeight : this.domHandler.getHiddenElementOuterHeight(this.container);
        if (left + width > window.innerWidth) {
            left -= width;
        }
        if (top + height > window.innerHeight) {
            top -= height;
        }
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    ContextMenu.prototype.unsubscribe = function (item) {
        if (item.eventEmitter) {
            item.eventEmitter.unsubscribe();
        }
        if (item.items) {
            for (var _i = 0, _a = item.items; _i < _a.length; _i++) {
                var childItem = _a[_i];
                this.unsubscribe(childItem);
            }
        }
    };
    ContextMenu.prototype.ngOnDestroy = function () {
        this.documentClickListener();
        if (this.global) {
            this.documentRightClickListener();
        }
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                this.unsubscribe(item);
            }
        }
    };
    ContextMenu.decorators = [
        { type: Component, args: [{
                    selector: 'p-contextMenu',
                    template: "\n        <div [ngClass]=\"'ui-contextmenu ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-dynamic ui-shadow'\" \n            [class]=\"styleClass\" [ngStyle]=\"style\" [style.display]=\"visible ? 'block' : 'none'\">\n            <p-contextMenuSub [item]=\"model\" root=\"root\"></p-contextMenuSub>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    ContextMenu.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
    ];
    ContextMenu.propDecorators = {
        'model': [{ type: Input },],
        'global': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
    };
    return ContextMenu;
}());
export var ContextMenuModule = (function () {
    function ContextMenuModule() {
    }
    ContextMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [ContextMenu],
                    declarations: [ContextMenu, ContextMenuSub]
                },] },
    ];
    /** @nocollapse */
    ContextMenuModule.ctorParameters = [];
    return ContextMenuModule;
}());
//# sourceMappingURL=contextmenu.js.map