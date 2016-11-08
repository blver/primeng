import { NgModule, Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var SELECTBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SelectButton; }),
    multi: true
};
export var SelectButton = (function () {
    function SelectButton() {
        this.onChange = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    SelectButton.prototype.writeValue = function (value) {
        this.value = value;
    };
    SelectButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    SelectButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    SelectButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    SelectButton.prototype.onItemClick = function (event, option) {
        if (this.disabled) {
            return;
        }
        if (this.multiple) {
            var itemIndex = this.findItemIndex(option);
            if (itemIndex != -1)
                this.value.splice(itemIndex, 1);
            else
                this.value.push(option.value);
        }
        else {
            this.value = option.value;
        }
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    SelectButton.prototype.isSelected = function (option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return option.value == this.value;
    };
    SelectButton.prototype.findItemIndex = function (option) {
        var index = -1;
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    SelectButton.decorators = [
        { type: Component, args: [{
                    selector: 'p-selectButton',
                    template: "\n        <div [ngClass]=\"'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + options.length\" (mouseleave)=\"hoveredItem=null\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div *ngFor=\"let option of options;\" class=\"ui-button ui-widget ui-state-default ui-button-text-only\"\n                [ngClass]=\"{'ui-state-hover': (hoveredItem==option)&&!disabled,'ui-state-active':isSelected(option), 'ui-state-disabled':disabled}\"\n                (mouseenter)=\"hoveredItem=option\" (click)=\"onItemClick($event,option)\">\n                <span class=\"ui-button-text ui-c\">{{option.label}}</span>\n            </div>\n        </div>\n    ",
                    providers: [SELECTBUTTON_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    SelectButton.ctorParameters = [];
    SelectButton.propDecorators = {
        'options': [{ type: Input },],
        'tabindex': [{ type: Input },],
        'multiple': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'disabled': [{ type: Input },],
        'onChange': [{ type: Output },],
    };
    return SelectButton;
}());
export var SelectButtonModule = (function () {
    function SelectButtonModule() {
    }
    SelectButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [SelectButton],
                    declarations: [SelectButton]
                },] },
    ];
    /** @nocollapse */
    SelectButtonModule.ctorParameters = [];
    return SelectButtonModule;
}());
//# sourceMappingURL=selectbutton.js.map