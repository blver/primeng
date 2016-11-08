import { NgModule, Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var TOGGLEBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ToggleButton; }),
    multi: true
};
export var ToggleButton = (function () {
    function ToggleButton() {
        this.onLabel = 'Yes';
        this.offLabel = 'No';
        this.onChange = new EventEmitter();
        this.checked = false;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    ToggleButton.prototype.getIconClass = function () {
        var baseClass = 'ui-button-icon-left fa fa-fw';
        return baseClass + ' ' + (this.checked ? this.onIcon : this.offIcon);
    };
    ToggleButton.prototype.toggle = function (event) {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onModelChange(this.checked);
            this.onModelTouched();
            this.onChange.emit({
                originalEvent: event,
                checked: this.checked
            });
        }
    };
    ToggleButton.prototype.writeValue = function (value) {
        this.checked = value;
    };
    ToggleButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    ToggleButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    ToggleButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    ToggleButton.decorators = [
        { type: Component, args: [{
                    selector: 'p-toggleButton',
                    template: "\n        <div [ngClass]=\"{'ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all': true, 'ui-button-text-only': (!onIcon&&!offIcon), 'ui-button-text-icon-left': (onIcon&&offIcon),\n                'ui-state-active': checked, 'ui-state-hover': hover&&!disabled, 'ui-state-disabled': disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\" \n                (click)=\"toggle($event)\" (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\">\n            <span *ngIf=\"onIcon||offIcon\" [class]=\"getIconClass()\"></span>\n            <span class=\"ui-button-text ui-unselectable-text\">{{checked ? onLabel : offLabel}}</span>\n        </div>\n    ",
                    providers: [TOGGLEBUTTON_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ToggleButton.ctorParameters = [];
    ToggleButton.propDecorators = {
        'onLabel': [{ type: Input },],
        'offLabel': [{ type: Input },],
        'onIcon': [{ type: Input },],
        'offIcon': [{ type: Input },],
        'disabled': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'onChange': [{ type: Output },],
    };
    return ToggleButton;
}());
export var ToggleButtonModule = (function () {
    function ToggleButtonModule() {
    }
    ToggleButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [ToggleButton],
                    declarations: [ToggleButton]
                },] },
    ];
    /** @nocollapse */
    ToggleButtonModule.ctorParameters = [];
    return ToggleButtonModule;
}());
//# sourceMappingURL=togglebutton.js.map