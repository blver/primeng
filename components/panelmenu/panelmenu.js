var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { NgModule, Component, Input, EventEmitter, trigger, state, transition, style, animate } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
export var BasePanelMenuItem = (function () {
    function BasePanelMenuItem(router) {
        this.router = router;
    }
    BasePanelMenuItem.prototype.handleClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        item.expanded = !item.expanded;
        event.preventDefault();
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
    return BasePanelMenuItem;
}());
export var PanelMenuSub = (function (_super) {
    __extends(PanelMenuSub, _super);
    function PanelMenuSub(router) {
        _super.call(this, router);
    }
    PanelMenuSub.decorators = [
        { type: Component, args: [{
                    selector: 'p-panelMenuSub',
                    template: "\n        <ul class=\"ui-menu-list ui-helper-reset\" [style.display]=\"expanded ? 'block' : 'none'\">\n            <li *ngFor=\"let child of item.items\" class=\"ui-menuitem ui-corner-all\" [ngClass]=\"{'ui-menu-parent':child.items}\">\n                <a #link [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                    [ngClass]=\"{'ui-menuitem-link-hasicon':child.icon&&child.items,'ui-state-hover':(hoveredLink==link&&!child.disabled),'ui-state-disabled':child.disabled}\" \n                    (click)=\"handleClick($event,child)\"\n                    (mouseenter)=\"hoveredLink=link\" (mouseleave)=\"hoveredLink=null\">\n                    <span class=\"ui-panelmenu-icon fa fa-fw\" [ngClass]=\"{'fa-caret-right':!child.expanded,'fa-caret-down':child.expanded}\" *ngIf=\"child.items\"></span>\n                    <span class=\"ui-menuitem-icon fa fa-fw\" [ngClass]=\"child.icon\" *ngIf=\"child.icon\"></span>\n                    <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                </a>\n                <p-panelMenuSub [item]=\"child\" [expanded]=\"child.expanded\" *ngIf=\"child.items\"></p-panelMenuSub>\n            </li>\n        </ul>\n    "
                },] },
    ];
    /** @nocollapse */
    PanelMenuSub.ctorParameters = [
        { type: Router, },
    ];
    PanelMenuSub.propDecorators = {
        'item': [{ type: Input },],
        'expanded': [{ type: Input },],
    };
    return PanelMenuSub;
}(BasePanelMenuItem));
export var PanelMenu = (function (_super) {
    __extends(PanelMenu, _super);
    function PanelMenu(router) {
        _super.call(this, router);
    }
    PanelMenu.prototype.unsubscribe = function (item) {
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
    PanelMenu.prototype.ngOnDestroy = function () {
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                this.unsubscribe(item);
            }
        }
    };
    PanelMenu.prototype.handleClick = function (event, item) {
        var _this = this;
        this.animating = true;
        _super.prototype.handleClick.call(this, event, item);
        //TODO: Use onDone of animate callback instead with RC6
        setTimeout(function () {
            _this.animating = false;
        }, 400);
    };
    PanelMenu.decorators = [
        { type: Component, args: [{
                    selector: 'p-panelMenu',
                    template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-panelmenu ui-widget'\">\n            <div *ngFor=\"let item of model;let f=first;let l=last;\" class=\"ui-panelmenu-panel\">\n                <div tabindex=\"0\" [ngClass]=\"{'ui-widget ui-panelmenu-header ui-state-default':true,'ui-corner-top':f,'ui-corner-bottom':l&&!item.expanded,\n                    'ui-state-active':item.expanded,'ui-state-hover':(item == hoveredItem && !item.disabled),'ui-state-disabled':item.disabled}\">\n                    <a [href]=\"item.url||'#'\" [ngClass]=\"{'ui-panelmenu-headerlink-hasicon':item.icon}\"\n                        (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\" (click)=\"handleClick($event,item)\">\n                        <span class=\"ui-panelmenu-icon fa fa-fw\" [ngClass]=\"{'fa-caret-right':!item.expanded,'fa-caret-down':item.expanded}\"></span>\n                        <span class=\"ui-menuitem-icon fa fa-fw\" [ngClass]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                        <span>{{item.label}}</span>\n                    </a>\n                </div>\n                <div class=\"ui-panelmenu-content-wrapper\" [@rootItem]=\"item.expanded ? 'visible' : 'hidden'\" \n                    [ngClass]=\"{'ui-panelmenu-content-wrapper-overflown': !item.expanded||animating}\">\n                    <div class=\"ui-panelmenu-content ui-widget-content\">\n                        <p-panelMenuSub [item]=\"item\" [expanded]=\"true\"></p-panelMenuSub>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
                    animations: [
                        trigger('rootItem', [
                            state('hidden', style({
                                height: '0px'
                            })),
                            state('visible', style({
                                height: '*'
                            })),
                            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    PanelMenu.ctorParameters = [
        { type: Router, },
    ];
    PanelMenu.propDecorators = {
        'model': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
    };
    return PanelMenu;
}(BasePanelMenuItem));
export var PanelMenuModule = (function () {
    function PanelMenuModule() {
    }
    PanelMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [PanelMenu],
                    declarations: [PanelMenu, PanelMenuSub]
                },] },
    ];
    /** @nocollapse */
    PanelMenuModule.ctorParameters = [];
    return PanelMenuModule;
}());
//# sourceMappingURL=panelmenu.js.map