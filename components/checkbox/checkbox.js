import { NgModule, Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Checkbox; }),
    multi: true
};
export var Checkbox = (function () {
    function Checkbox() {
        this.onChange = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.focused = false;
        this.checked = false;
    }
    Checkbox.prototype.onClick = function (event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel();
        if (focus) {
            checkbox.focus();
        }
    };
    Checkbox.prototype.updateModel = function () {
        if (!this.binary) {
            if (this.checked)
                this.addValue(this.value);
            else
                this.removeValue(this.value);
            this.onModelChange(this.model);
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit(this.checked);
    };
    Checkbox.prototype.handleChange = function (event) {
        this.checked = event.target.checked;
        this.updateModel();
    };
    Checkbox.prototype.isChecked = function () {
        if (!this.binary)
            return this.findValueIndex(this.value) !== -1;
        else
            return this.model;
    };
    Checkbox.prototype.removeValue = function (value) {
        var index = this.findValueIndex(value);
        if (index >= 0) {
            this.model.splice(index, 1);
        }
    };
    Checkbox.prototype.addValue = function (value) {
        this.model.push(value);
    };
    Checkbox.prototype.onFocus = function (event) {
        this.focused = true;
    };
    Checkbox.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
    };
    Checkbox.prototype.findValueIndex = function (value) {
        var index = -1;
        if (this.model) {
            for (var i = 0; i < this.model.length; i++) {
                if (this.model[i] == value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Checkbox.prototype.writeValue = function (model) {
        this.model = model;
        this.checked = this.isChecked();
    };
    Checkbox.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Checkbox.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Checkbox.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Checkbox.decorators = [
        { type: Component, args: [{
                    selector: 'p-checkbox',
                    template: "\n        <div class=\"ui-chkbox ui-widget\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [name]=\"name\" [value]=\"value\" [checked]=\"checked\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\"\n                [ngClass]=\"{'ui-state-focus':focused}\" (change)=\"handleChange($event)\" [disabled]=\"disabled\">\n            </div>\n            <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"onClick($event,cb,true)\"\n                        (mouseover)=\"hover=true\" (mouseout)=\"hover=false\" \n                        [ngClass]=\"{'ui-state-hover':hover&&!disabled,'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-chkbox-icon ui-c\" [ngClass]=\"{'fa fa-fw fa-check':checked}\"></span>\n            </div>\n        </div>\n        <label class=\"ui-chkbox-label\" (click)=\"onClick($event,cb,true)\" *ngIf=\"label\">{{label}}</label>\n    ",
                    providers: [CHECKBOX_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Checkbox.ctorParameters = [];
    Checkbox.propDecorators = {
        'value': [{ type: Input },],
        'name': [{ type: Input },],
        'disabled': [{ type: Input },],
        'binary': [{ type: Input },],
        'label': [{ type: Input },],
        'onChange': [{ type: Output },],
    };
    return Checkbox;
}());
export var CheckboxModule = (function () {
    function CheckboxModule() {
    }
    CheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Checkbox],
                    declarations: [Checkbox]
                },] },
    ];
    /** @nocollapse */
    CheckboxModule.ctorParameters = [];
    return CheckboxModule;
}());
//# sourceMappingURL=checkbox.js.map