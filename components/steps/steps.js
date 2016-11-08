import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
export var Steps = (function () {
    function Steps(router) {
        this.router = router;
        this.activeIndex = 0;
        this.readonly = true;
        this.activeIndexChange = new EventEmitter();
    }
    Steps.prototype.itemClick = function (event, item, i) {
        if (this.readonly) {
            return;
        }
        this.activeIndexChange.emit(i);
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
                item: item,
                index: i
            });
        }
        if (item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    };
    Steps.decorators = [
        { type: Component, args: [{
                    selector: 'p-steps',
                    template: "\n        <div [ngClass]=\"{'ui-steps ui-widget ui-helper-clearfix':true,'ui-steps-readonly':readonly}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul role=\"tablist\">\n                <li *ngFor=\"let item of model; let i = index\" class=\"ui-steps-item\" #menuitem\n                    [ngClass]=\"{'ui-state-highlight':(i === activeIndex),'ui-state-default':(i !== activeIndex),\n                        'ui-state-disabled':(i !== activeIndex && readonly),'ui-state-hover':(menuitem == hoveredItem&&!readonly)}\">\n                    <a class=\"ui-menuitem-link\" (click)=\"itemClick($event, item, i)\" (mouseenter)=\"hoveredItem=menuitem\" (mouseleave)=\"hoveredItem=null\">\n                        <span class=\"ui-steps-number\">{{i}}</span>\n                        <span class=\"ui-steps-title\">{{item.label}}</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Steps.ctorParameters = [
        { type: Router, },
    ];
    Steps.propDecorators = {
        'activeIndex': [{ type: Input },],
        'model': [{ type: Input },],
        'readonly': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'activeIndexChange': [{ type: Output },],
    };
    return Steps;
}());
export var StepsModule = (function () {
    function StepsModule() {
    }
    StepsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Steps],
                    declarations: [Steps]
                },] },
    ];
    /** @nocollapse */
    StepsModule.ctorParameters = [];
    return StepsModule;
}());
//# sourceMappingURL=steps.js.map