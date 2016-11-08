import { NgModule, Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var TRISTATECHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TriStateCheckbox; }),
    multi: true
};
export var TriStateCheckbox = (function () {
    function TriStateCheckbox() {
        this.onChange = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    TriStateCheckbox.prototype.onClick = function (event, input) {
        if (!this.disabled) {
            this.toggle(event);
            this.focus = true;
            input.focus();
        }
    };
    TriStateCheckbox.prototype.onKeydown = function (event) {
        if (event.keyCode == 32) {
            event.preventDefault();
        }
    };
    TriStateCheckbox.prototype.onKeyup = function (event) {
        if (event.keyCode == 32) {
            this.toggle(event);
            event.preventDefault();
        }
    };
    TriStateCheckbox.prototype.toggle = function (event) {
        if (this.value == null || this.value == undefined)
            this.value = true;
        else if (this.value == true)
            this.value = false;
        else if (this.value == false)
            this.value = null;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    TriStateCheckbox.prototype.onFocus = function () {
        this.focus = true;
    };
    TriStateCheckbox.prototype.onBlur = function () {
        this.focus = false;
        this.onModelTouched();
    };
    TriStateCheckbox.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    TriStateCheckbox.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    TriStateCheckbox.prototype.writeValue = function (value) {
        this.value = value;
    };
    TriStateCheckbox.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    TriStateCheckbox.decorators = [
        { type: Component, args: [{
                    selector: 'p-triStateCheckbox',
                    template: "\n        <div class=\"ui-chkbox ui-tristatechkbox ui-widget\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #input type=\"text\" [name]=\"name\" readonly [disabled]=\"disabled\" (keyup)=\"onKeyup($event)\" (keydown)=\"onKeydown($event)\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </div>\n            <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"onClick($event,input)\"\n                [ngClass]=\"{'ui-state-hover':hover&&!disabled,'ui-state-active':value!=null,'ui-state-disabled':disabled,'ui-state-focus':focus}\" \n                    (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\">\n                <span class=\"ui-chkbox-icon fa fa-fw ui-c\" [ngClass]=\"{'fa-check':value==true,'fa-close':value==false}\"></span>\n            </div>\n        </div>\n    ",
                    providers: [TRISTATECHECKBOX_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    TriStateCheckbox.ctorParameters = [];
    TriStateCheckbox.propDecorators = {
        'disabled': [{ type: Input },],
        'name': [{ type: Input },],
        'onChange': [{ type: Output },],
    };
    return TriStateCheckbox;
}());
export var TriStateCheckboxModule = (function () {
    function TriStateCheckboxModule() {
    }
    TriStateCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [TriStateCheckbox],
                    declarations: [TriStateCheckbox]
                },] },
    ];
    /** @nocollapse */
    TriStateCheckboxModule.ctorParameters = [];
    return TriStateCheckboxModule;
}());
//# sourceMappingURL=tristatecheckbox.js.map