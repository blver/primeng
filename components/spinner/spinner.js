import { NgModule, Component, ElementRef, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from '../inputtext/inputtext';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var SPINNER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Spinner; }),
    multi: true
};
export var Spinner = (function () {
    function Spinner(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onChange = new EventEmitter();
        this.step = 1;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Spinner.prototype.ngAfterViewInit = function () {
        if (Math.floor(this.step) === 0) {
            this.precision = this.step.toString().split(/[,]|[.]/)[1].length;
        }
        this.inputtext = this.domHandler.findSingle(this.el.nativeElement, 'input');
        if ((this.value !== null && this.value !== undefined)) {
            this.inputtext.value = this.value;
        }
    };
    Spinner.prototype.repeat = function (interval, dir, input) {
        var _this = this;
        var i = interval || 500;
        this.clearTimer();
        this.timer = setTimeout(function () {
            _this.repeat(40, dir, input);
        }, i);
        this.spin(dir, input);
    };
    Spinner.prototype.spin = function (dir, inputElement) {
        var step = this.step * dir;
        var currentValue = this.value || 0;
        var newValue = null;
        if (this.precision)
            this.value = parseFloat(this.toFixed(currentValue + step, this.precision));
        else
            this.value = currentValue + step;
        if (this.maxlength !== undefined && this.value.toString().length > this.maxlength) {
            this.value = currentValue;
        }
        if (this.min !== undefined && this.value < this.min) {
            this.value = this.min;
        }
        if (this.max !== undefined && this.value > this.max) {
            this.value = this.max;
        }
        inputElement.value = String(this.value);
        this.onModelChange(this.value);
    };
    Spinner.prototype.toFixed = function (value, precision) {
        var power = Math.pow(10, precision || 0);
        return String(Math.round(value * power) / power);
    };
    Spinner.prototype.onUpButtonMousedown = function (event, input) {
        if (!this.disabled) {
            input.focus();
            this.activeUp = true;
            this.repeat(null, 1, input);
            event.preventDefault();
        }
    };
    Spinner.prototype.onUpButtonMouseup = function (event) {
        if (!this.disabled) {
            this.activeUp = false;
            this.clearTimer();
        }
    };
    Spinner.prototype.onUpButtonMouseenter = function (event) {
        if (!this.disabled) {
            this.hoverUp = true;
        }
    };
    Spinner.prototype.onUpButtonMouseleave = function (event) {
        if (!this.disabled) {
            this.hoverUp = false;
            this.activeUp = false;
            this.clearTimer();
        }
    };
    Spinner.prototype.onDownButtonMousedown = function (event, input) {
        if (!this.disabled) {
            input.focus();
            this.activeDown = true;
            this.repeat(null, -1, input);
            event.preventDefault();
        }
    };
    Spinner.prototype.onDownButtonMouseup = function (event) {
        if (!this.disabled) {
            this.activeDown = false;
            this.clearTimer();
        }
    };
    Spinner.prototype.onDownButtonMouseenter = function (event) {
        if (!this.disabled) {
            this.hoverDown = true;
        }
    };
    Spinner.prototype.onDownButtonMouseleave = function (event) {
        if (!this.disabled) {
            this.hoverDown = false;
            this.activeDown = false;
            this.clearTimer();
        }
    };
    Spinner.prototype.onInputKeydown = function (event, inputElement) {
        if (event.which == 38) {
            this.spin(1, inputElement);
            event.preventDefault();
        }
        else if (event.which == 40) {
            this.spin(-1, inputElement);
            event.preventDefault();
        }
    };
    Spinner.prototype.onInput = function (event, inputElement) {
        this.value = this.parseValue(inputElement.value);
        this.onModelChange(this.value);
    };
    Spinner.prototype.onBlur = function (inputElement) {
        if (this.value !== undefined && this.value !== null) {
            inputElement.value = String(this.value);
        }
        this.onModelTouched();
        this.focus = false;
    };
    Spinner.prototype.onFocus = function () {
        this.focus = true;
    };
    Spinner.prototype.parseValue = function (val) {
        var value;
        if (val.trim() === '') {
            value = this.min !== undefined ? this.min : null;
        }
        else {
            if (this.precision)
                value = parseFloat(val);
            else
                value = parseInt(val);
            if (!isNaN(value)) {
                if (this.max !== undefined && value > this.max) {
                    value = this.max;
                }
                if (this.min !== undefined && value < this.min) {
                    value = this.min;
                }
            }
            else {
                value = null;
            }
        }
        return value;
    };
    Spinner.prototype.handleChange = function (event) {
        this.onChange.emit(event);
    };
    Spinner.prototype.clearTimer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    Spinner.prototype.writeValue = function (value) {
        this.value = value;
        if (this.inputtext && (this.value !== null && this.value !== undefined)) {
            this.inputtext.value = this.value;
        }
    };
    Spinner.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Spinner.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Spinner.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Object.defineProperty(Spinner.prototype, "filled", {
        get: function () {
            return this.inputtext && this.inputtext.value != '';
        },
        enumerable: true,
        configurable: true
    });
    Spinner.decorators = [
        { type: Component, args: [{
                    selector: 'p-spinner',
                    template: "\n        <span class=\"ui-spinner ui-widget ui-corner-all\">\n            <input #in pInputText type=\"text\" class=\"ui-spinner-input\"\n            [attr.size]=\"size\" [maxLength]=\"maxlength\" [disabled]=\"disabled\" [readonly]=\"readonly\"\n            (keydown)=\"onInputKeydown($event,in)\" (input)=\"onInput($event,in)\" (blur)=\"onBlur(in)\" (change)=\"handleChange($event)\" (focus)=\"onFocus()\">\n            <a class=\"ui-spinner-button ui-spinner-up ui-corner-tr ui-button ui-widget ui-state-default ui-button-text-only\"\n                [ngClass]=\"{'ui-state-hover':hoverUp,'ui-state-active':activeUp,'ui-state-disabled':disabled}\"\n                (mouseenter)=\"onUpButtonMouseenter($event)\" (mouseleave)=\"onUpButtonMouseleave($event)\" (mousedown)=\"onUpButtonMousedown($event,in)\" (mouseup)=\"onUpButtonMouseup($event)\">\n                <span class=\"ui-button-text\">\n                    <span class=\"fa fa-fw fa-caret-up\"></span>\n                </span>\n            </a>\n            <a class=\"ui-spinner-button ui-spinner-down ui-corner-br ui-button ui-widget ui-state-default ui-button-text-only\"\n                [ngClass]=\"{'ui-state-hover':hoverDown,'ui-state-active':activeDown,'ui-state-disabled':disabled}\"\n                (mouseenter)=\"onDownButtonMouseenter($event)\" (mouseleave)=\"onDownButtonMouseleave($event)\" (mousedown)=\"onDownButtonMousedown($event,in)\" (mouseup)=\"onDownButtonMouseup($event)\">\n                <span class=\"ui-button-text\">\n                    <span class=\"fa fa-fw fa-caret-down\"></span>\n                </span>\n            </a>\n        </span>\n    ",
                    host: {
                        '[class.ui-inputwrapper-filled]': 'filled',
                        '[class.ui-inputwrapper-focus]': 'focus'
                    },
                    providers: [DomHandler, SPINNER_VALUE_ACCESSOR],
                },] },
    ];
    /** @nocollapse */
    Spinner.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    Spinner.propDecorators = {
        'onChange': [{ type: Output },],
        'step': [{ type: Input },],
        'min': [{ type: Input },],
        'max': [{ type: Input },],
        'maxlength': [{ type: Input },],
        'size': [{ type: Input },],
        'disabled': [{ type: Input },],
        'readonly': [{ type: Input },],
    };
    return Spinner;
}());
export var SpinnerModule = (function () {
    function SpinnerModule() {
    }
    SpinnerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, InputTextModule],
                    exports: [Spinner],
                    declarations: [Spinner]
                },] },
    ];
    /** @nocollapse */
    SpinnerModule.ctorParameters = [];
    return SpinnerModule;
}());
//# sourceMappingURL=spinner.js.map