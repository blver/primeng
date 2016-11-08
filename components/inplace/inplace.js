import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button';
export var InplaceDisplay = (function () {
    function InplaceDisplay() {
    }
    InplaceDisplay.decorators = [
        { type: Component, args: [{
                    selector: 'p-inplaceDisplay',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    InplaceDisplay.ctorParameters = [];
    return InplaceDisplay;
}());
export var InplaceContent = (function () {
    function InplaceContent() {
    }
    InplaceContent.decorators = [
        { type: Component, args: [{
                    selector: 'p-inplaceContent',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    InplaceContent.ctorParameters = [];
    return InplaceContent;
}());
export var Inplace = (function () {
    function Inplace() {
        this.onActivate = new EventEmitter();
        this.onDeactivate = new EventEmitter();
    }
    Inplace.prototype.activate = function (event) {
        if (!this.disabled) {
            this.active = true;
            this.onActivate.emit(event);
        }
    };
    Inplace.prototype.deactivate = function (event) {
        if (!this.disabled) {
            this.active = false;
            this.hover = false;
            this.onDeactivate.emit(event);
        }
    };
    Inplace.decorators = [
        { type: Component, args: [{
                    selector: 'p-inplace',
                    template: "\n        <div [ngClass]=\"'ui-inplace ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-inplace-display\" (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\" (click)=\"activate($event)\"\n                [ngClass]=\"{'ui-state-hover':hover&&!disabled,'ui-state-disabled':disabled}\" *ngIf=\"!active\">\n                <ng-content select=\"[pInplaceDisplay]\"></ng-content>\n            </div>\n            <div class=\"ui-inplace-content\" *ngIf=\"active\">\n                <ng-content select=\"[pInplaceContent]\"></ng-content>\n                <button type=\"button\" icon=\"fa-close\" pButton (click)=\"deactivate($event)\" *ngIf=\"closable\"></button>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Inplace.ctorParameters = [];
    Inplace.propDecorators = {
        'active': [{ type: Input },],
        'closable': [{ type: Input },],
        'disabled': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'onActivate': [{ type: Output },],
        'onDeactivate': [{ type: Output },],
    };
    return Inplace;
}());
export var InplaceModule = (function () {
    function InplaceModule() {
    }
    InplaceModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ButtonModule],
                    exports: [Inplace, InplaceDisplay, InplaceContent, ButtonModule],
                    declarations: [Inplace, InplaceDisplay, InplaceContent]
                },] },
    ];
    /** @nocollapse */
    InplaceModule.ctorParameters = [];
    return InplaceModule;
}());
//# sourceMappingURL=inplace.js.map