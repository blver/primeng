import { NgModule, Component, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { Router } from '@angular/router';
export var TabMenu = (function () {
    function TabMenu(router) {
        this.router = router;
    }
    TabMenu.prototype.ngOnInit = function () {
        if (!this.activeItem && this.model && this.model.length) {
            this.activeItem = this.model[0];
        }
    };
    TabMenu.prototype.itemClick = function (event, item) {
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
        this.activeItem = item;
    };
    TabMenu.prototype.ngOnDestroy = function () {
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                this.unsubscribe(item);
            }
        }
    };
    TabMenu.prototype.unsubscribe = function (item) {
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
    TabMenu.decorators = [
        { type: Component, args: [{
                    selector: 'p-tabMenu',
                    template: "\n        <div [ngClass]=\"'ui-tabmenu ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul class=\"ui-tabmenu-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all\" role=\"tablist\">\n                <li *ngFor=\"let item of model\" \n                    [ngClass]=\"{'ui-tabmenuitem ui-state-default ui-corner-top':true,'ui-state-disabled':item.disabled,\n                        'ui-tabmenuitem-hasicon':item.icon,'ui-state-hover':hoveredItem==item,'ui-state-active':activeItem==item}\"\n                    (mouseenter)=\"hoveredItem=item&&!item.disabled\" (mouseleave)=\"hoveredItem=null\">\n                    <a [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" (click)=\"itemClick($event,item)\">\n                        <span class=\"ui-menuitem-icon fa\" [ngClass]=\"item.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    TabMenu.ctorParameters = [
        { type: Router, },
    ];
    TabMenu.propDecorators = {
        'model': [{ type: Input },],
        'activeItem': [{ type: Input },],
        'popup': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
    };
    return TabMenu;
}());
export var TabMenuModule = (function () {
    function TabMenuModule() {
    }
    TabMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [TabMenu],
                    declarations: [TabMenu]
                },] },
    ];
    /** @nocollapse */
    TabMenuModule.ctorParameters = [];
    return TabMenuModule;
}());
//# sourceMappingURL=tabmenu.js.map