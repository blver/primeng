import { NgModule, Component, Input, Output, EventEmitter, trigger, state, transition, style, animate, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
export var Fieldset = (function () {
    function Fieldset(el) {
        this.el = el;
        this.collapsed = false;
        this.onBeforeToggle = new EventEmitter();
        this.onAfterToggle = new EventEmitter();
    }
    Fieldset.prototype.onLegendMouseenter = function (event) {
        if (this.toggleable) {
            this.hover = true;
        }
    };
    Fieldset.prototype.onLegendMouseleave = function (event) {
        if (this.toggleable) {
            this.hover = false;
        }
    };
    Fieldset.prototype.toggle = function (event) {
        var _this = this;
        if (this.toggleable) {
            this.animating = true;
            this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
            this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
            //TODO: Use onDone of animate callback instead with RC6
            setTimeout(function () {
                _this.animating = false;
            }, 400);
        }
    };
    Fieldset.prototype.expand = function (event) {
        this.collapsed = false;
    };
    Fieldset.prototype.collapse = function (event) {
        this.collapsed = true;
    };
    Fieldset.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Fieldset.decorators = [
        { type: Component, args: [{
                    selector: 'p-fieldset',
                    template: "\n        <fieldset [ngClass]=\"{'ui-fieldset ui-widget ui-widget-content ui-corner-all': true, 'ui-fieldset-toggleable': toggleable}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <legend class=\"ui-fieldset-legend ui-corner-all ui-state-default ui-unselectable-text\" \n                (mouseenter)=\"onLegendMouseenter($event)\" (mouseleave)=\"onLegendMouseleave($event)\" (click)=\"toggle($event)\" [ngClass]=\"{'ui-state-hover':hover}\">\n                <span *ngIf=\"toggleable\" class=\"ui-fieldset-toggler fa fa-w\" [ngClass]=\"{'fa-minus': !collapsed,'fa-plus':collapsed}\"></span>\n                {{legend}}\n            </legend>\n            <div class=\"ui-fieldset-content-wrapper\" [@fieldsetContent]=\"collapsed ? 'hidden' : 'visible'\" \n                        [ngClass]=\"{'ui-fieldset-content-wrapper-overflown': collapsed||animating}\">\n                <div class=\"ui-fieldset-content\">\n                    <ng-content></ng-content>\n                </div>\n            </div>\n        </fieldset>\n    ",
                    animations: [
                        trigger('fieldsetContent', [
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
    Fieldset.ctorParameters = [
        { type: ElementRef, },
    ];
    Fieldset.propDecorators = {
        'legend': [{ type: Input },],
        'toggleable': [{ type: Input },],
        'collapsed': [{ type: Input },],
        'onBeforeToggle': [{ type: Output },],
        'onAfterToggle': [{ type: Output },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
    };
    return Fieldset;
}());
export var FieldsetModule = (function () {
    function FieldsetModule() {
    }
    FieldsetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Fieldset],
                    declarations: [Fieldset]
                },] },
    ];
    /** @nocollapse */
    FieldsetModule.ctorParameters = [];
    return FieldsetModule;
}());
//# sourceMappingURL=fieldset.js.map