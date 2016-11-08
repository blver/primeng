import { NgModule, Component, ElementRef, Input, Renderer, EventEmitter, Inject, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { Router } from '@angular/router';
export var SlideMenuSub = (function () {
    function SlideMenuSub(slideMenu, router) {
        this.slideMenu = slideMenu;
        this.router = router;
        this.backLabel = 'Back';
        this.effectDuration = '1s';
        this.easing = 'ease-out';
    }
    SlideMenuSub.prototype.itemClick = function (event, item, listitem) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url || item.routerLink) {
            event.preventDefault();
        }
        this.activeItem = listitem;
        if (item.command) {
            if (!item.eventEmitter && item.command) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }
            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }
        if (item.items) {
            this.slideMenu.left -= this.slideMenu.menuWidth;
        }
        if (item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    };
    SlideMenuSub.prototype.ngOnDestroy = function () {
        this.hoveredLink = null;
        this.activeItem = null;
    };
    SlideMenuSub.decorators = [
        { type: Component, args: [{
                    selector: 'p-slideMenuSub',
                    template: "\n        <ul [ngClass]=\"{'ui-helper-reset ui-menu-rootlist':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child':!root}\" class=\"ui-menu-list\"\n            [style.width.px]=\"menuWidth\" [style.left.px]=\"root ? slideMenu.left : slideMenu.menuWidth\" \n            [style.transitionProperty]=\"root ? 'left' : 'none'\" [style.transitionDuration]=\"effectDuration\" [style.transitionTimingFunction]=\"easing\">\n            <template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li #listitem [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-menuitem-active':listitem==activeItem}\">\n                    <a #link [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                        [ngClass]=\"{'ui-state-hover':link==hoveredLink&&!child.disabled,'ui-menuitem-link-parent':child.items,'ui-state-disabled':child.disabled}\" \n                        (click)=\"itemClick($event, child, listitem)\" (mouseenter)=\"hoveredLink=link\" (mouseleave)=\"hoveredLink=null\">\n                        <span class=\"ui-submenu-icon fa fa-fw fa-caret-right\" *ngIf=\"child.items\"></span>\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <p-slideMenuSub class=\"ui-submenu\" [item]=\"child\" [menuWidth]=\"menuWidth\" *ngIf=\"child.items\"></p-slideMenuSub>\n                </li>\n            </template>\n        </ul>\n    "
                },] },
    ];
    /** @nocollapse */
    SlideMenuSub.ctorParameters = [
        { type: SlideMenu, decorators: [{ type: Inject, args: [forwardRef(function () { return SlideMenu; }),] },] },
        { type: Router, },
    ];
    SlideMenuSub.propDecorators = {
        'item': [{ type: Input },],
        'root': [{ type: Input },],
        'backLabel': [{ type: Input },],
        'menuWidth': [{ type: Input },],
        'effectDuration': [{ type: Input },],
        'easing': [{ type: Input },],
    };
    return SlideMenuSub;
}());
export var SlideMenu = (function () {
    function SlideMenu(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.menuWidth = 180;
        this.viewportHeight = 175;
        this.effectDuration = '500ms';
        this.easing = 'ease-out';
        this.backLabel = 'Back';
        this.left = 0;
    }
    SlideMenu.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.el.nativeElement.children[0];
        if (this.popup) {
            this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
                if (!_this.preventDocumentDefault) {
                    _this.hide();
                }
                _this.preventDocumentDefault = false;
            });
        }
    };
    SlideMenu.prototype.toggle = function (event) {
        if (this.container.offsetParent)
            this.hide();
        else
            this.show(event);
        this.preventDocumentDefault = true;
    };
    SlideMenu.prototype.show = function (event) {
        this.container.style.display = 'block';
        this.domHandler.absolutePosition(this.container, event.target);
        this.domHandler.fadeIn(this.container, 250);
    };
    SlideMenu.prototype.hide = function () {
        this.container.style.display = 'none';
    };
    SlideMenu.prototype.unsubscribe = function (item) {
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
    SlideMenu.prototype.onClick = function (event) {
        this.preventDocumentDefault = true;
    };
    SlideMenu.prototype.goBack = function () {
        this.left += this.menuWidth;
    };
    SlideMenu.prototype.ngOnDestroy = function () {
        if (this.popup) {
            this.documentClickListener();
        }
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                this.unsubscribe(item);
            }
        }
    };
    SlideMenu.decorators = [
        { type: Component, args: [{
                    selector: 'p-slideMenu',
                    template: "\n        <div [ngClass]=\"{'ui-menu ui-slidemenu ui-widget ui-widget-content ui-corner-all':true,'ui-menu-dynamic ui-shadow':popup}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\" (click)=\"onClick($event)\">\n            <div class=\"ui-slidemenu-wrapper\" [style.height.px]=\"viewportHeight\">\n                <div class=\"ui-slidemenu-content\" [style.height.px]=\"viewportHeight - 30\">\n                    <p-slideMenuSub [item]=\"model\" root=\"root\" [menuWidth]=\"menuWidth\" [effectDuration]=\"effectDuration\" [easing]=\"easing\"></p-slideMenuSub>\n                </div>\n                <div class=\"ui-slidemenu-backward ui-widget-header ui-corner-all\" [style.display]=\"left ? 'block' : 'none'\" (click)=\"goBack()\">\n                    <span class=\"fa fa-fw fa-caret-left\"></span>{{backLabel}}\n                </div>\n            </div>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    SlideMenu.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
    ];
    SlideMenu.propDecorators = {
        'model': [{ type: Input },],
        'popup': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'menuWidth': [{ type: Input },],
        'viewportHeight': [{ type: Input },],
        'effectDuration': [{ type: Input },],
        'easing': [{ type: Input },],
        'backLabel': [{ type: Input },],
    };
    return SlideMenu;
}());
export var SlideMenuModule = (function () {
    function SlideMenuModule() {
    }
    SlideMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [SlideMenu],
                    declarations: [SlideMenu, SlideMenuSub]
                },] },
    ];
    /** @nocollapse */
    SlideMenuModule.ctorParameters = [];
    return SlideMenuModule;
}());
//# sourceMappingURL=slidemenu.js.map