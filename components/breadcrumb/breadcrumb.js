import { NgModule, Component, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
export var Breadcrumb = (function () {
    function Breadcrumb(router) {
        this.router = router;
    }
    Breadcrumb.prototype.itemClick = function (event, item) {
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
    Breadcrumb.prototype.ngOnDestroy = function () {
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.eventEmitter) {
                    item.eventEmitter.unsubscribe();
                }
            }
        }
    };
    Breadcrumb.decorators = [
        { type: Component, args: [{
                    selector: 'p-breadcrumb',
                    template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-breadcrumb ui-widget ui-widget-header ui-helper-clearfix ui-corner-all'\">\n            <ul>\n                <li class=\"fa fa-home\"></li>\n                <template ngFor let-item let-end=\"last\" [ngForOf]=\"model\">\n                    <li role=\"menuitem\">\n                        <a [href]=\"item.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item)\" [ngClass]=\"{'ui-state-disabled':item.disabled}\">\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                    </li>\n                    <li class=\"ui-breadcrumb-chevron fa fa-chevron-right\" *ngIf=\"!end\"></li>\n                </template>\n            </ul>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Breadcrumb.ctorParameters = [
        { type: Router, },
    ];
    Breadcrumb.propDecorators = {
        'model': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
    };
    return Breadcrumb;
}());
export var BreadcrumbModule = (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Breadcrumb],
                    declarations: [Breadcrumb]
                },] },
    ];
    /** @nocollapse */
    BreadcrumbModule.ctorParameters = [];
    return BreadcrumbModule;
}());
//# sourceMappingURL=breadcrumb.js.map