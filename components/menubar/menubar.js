import { NgModule, Component, ElementRef, Input, Renderer, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { Router } from '@angular/router';
export var MenubarSub = (function () {
    function MenubarSub(domHandler, router) {
        this.domHandler = domHandler;
        this.router = router;
    }
    MenubarSub.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        this.activeItem = item;
        this.activeLink = item.children[0];
        var nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            var sublist = nextElement.children[0];
            sublist.style.zIndex = ++DomHandler.zindex;
            if (this.root) {
                sublist.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
                sublist.style.left = '0px';
            }
            else {
                sublist.style.top = '0px';
                sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
            }
        }
    };
    MenubarSub.prototype.onItemMouseLeave = function (event, link) {
        this.activeItem = null;
        this.activeLink = null;
    };
    MenubarSub.prototype.itemClick = function (event, item) {
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
        this.activeItem = null;
        this.activeLink = null;
    };
    MenubarSub.prototype.listClick = function (event) {
        this.activeItem = null;
        this.activeLink = null;
    };
    MenubarSub.decorators = [
        { type: Component, args: [{
                    selector: 'p-menubarSub',
                    template: "\n        <ul [ngClass]=\"{'ui-helper-reset':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow':!root}\" class=\"ui-menu-list\"\n            (click)=\"listClick($event)\">\n            <template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li #item [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-menuitem-active':item==activeItem}\"\n                    (mouseenter)=\"onItemMouseEnter($event,item,child)\" (mouseleave)=\"onItemMouseLeave($event,item)\">\n                    <a #link [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                        [ngClass]=\"{'ui-state-hover':link==activeLink&&!child.disabled,'ui-state-disabled':child.disabled}\" (click)=\"itemClick($event, child)\">\n                        <span class=\"ui-submenu-icon fa fa-fw\" *ngIf=\"child.items\" [ngClass]=\"{'fa-caret-down':root,'fa-caret-right':!root}\"></span>\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <p-menubarSub class=\"ui-submenu\" [item]=\"child\" *ngIf=\"child.items\"></p-menubarSub>\n                </li>\n            </template>\n        </ul>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    MenubarSub.ctorParameters = [
        { type: DomHandler, },
        { type: Router, },
    ];
    MenubarSub.propDecorators = {
        'item': [{ type: Input },],
        'root': [{ type: Input },],
    };
    return MenubarSub;
}());
export var Menubar = (function () {
    function Menubar(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
    }
    Menubar.prototype.unsubscribe = function (item) {
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
    Menubar.prototype.ngOnDestroy = function () {
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                this.unsubscribe(item);
            }
        }
    };
    Menubar.decorators = [
        { type: Component, args: [{
                    selector: 'p-menubar',
                    template: "\n        <div [ngClass]=\"{'ui-menubar ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix':true}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\">\n            <p-menubarSub [item]=\"model\" root=\"root\"></p-menubarSub>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    Menubar.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
    ];
    Menubar.propDecorators = {
        'model': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
    };
    return Menubar;
}());
export var MenubarModule = (function () {
    function MenubarModule() {
    }
    MenubarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Menubar],
                    declarations: [Menubar, MenubarSub]
                },] },
    ];
    /** @nocollapse */
    MenubarModule.ctorParameters = [];
    return MenubarModule;
}());
//# sourceMappingURL=menubar.js.map