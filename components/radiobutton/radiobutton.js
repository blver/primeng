import { NgModule, Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioButton; }),
    multi: true
};
export var RadioButton = (function () {
    function RadioButton() {
        this.onClick = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    RadioButton.prototype.handleClick = function () {
        if (!this.disabled) {
            this.onClick.emit(null);
            this.select();
        }
    };
    RadioButton.prototype.select = function () {
        if (!this.disabled) {
            this.checked = true;
            this.onModelChange(this.value);
        }
    };
    RadioButton.prototype.writeValue = function (model) {
        this.model = model;
        this.checked = (this.model == this.value);
    };
    RadioButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    RadioButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    RadioButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    RadioButton.prototype.onFocus = function (event) {
        this.focused = true;
    };
    RadioButton.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
    };
    RadioButton.prototype.onChange = function (event) {
        this.select();
    };
    RadioButton.decorators = [
        { type: Component, args: [{
                    selector: 'p-radioButton',
                    template: "\n        <div class=\"ui-radiobutton ui-widget\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"radio\" [attr.name]=\"name\" [attr.value]=\"value\" [checked]=\"checked\" (change)=\"onChange($event)\"\n                    (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\">\n            </div>\n            <div (click)=\"handleClick()\" (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\"\n                [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-hover':hover&&!disabled,'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-radiobutton-icon\" [ngClass]=\"{'fa fa-fw fa-circle':checked}\"></span>\n            </div>\n        </div>\n        <label class=\"ui-radiobutton-label\" (click)=\"select()\" *ngIf=\"label\">{{label}}</label>\n    ",
                    providers: [RADIO_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    RadioButton.ctorParameters = [];
    RadioButton.propDecorators = {
        'value': [{ type: Input },],
        'name': [{ type: Input },],
        'disabled': [{ type: Input },],
        'label': [{ type: Input },],
        'onClick': [{ type: Output },],
    };
    return RadioButton;
}());
export var RadioButtonModule = (function () {
    function RadioButtonModule() {
    }
    RadioButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [RadioButton],
                    declarations: [RadioButton]
                },] },
    ];
    /** @nocollapse */
    RadioButtonModule.ctorParameters = [];
    return RadioButtonModule;
}());
//# sourceMappingURL=radiobutton.js.map