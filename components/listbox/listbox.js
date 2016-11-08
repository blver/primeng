import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChild, TemplateRef, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var LISTBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Listbox; }),
    multi: true
};
export var Listbox = (function () {
    function Listbox(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onChange = new EventEmitter();
        this.onDblClick = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Listbox.prototype.writeValue = function (value) {
        this.value = value;
    };
    Listbox.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Listbox.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Listbox.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Listbox.prototype.onOptionClick = function (event, option) {
        var metaKey = (event.metaKey || event.ctrlKey);
        var selected = this.isSelected(option);
        if (this.multiple)
            this.onOptionClickMultiple(event, option);
        else
            this.onOptionClickSingle(event, option);
    };
    Listbox.prototype.onOptionClickSingle = function (event, option) {
        var metaKey = (event.metaKey || event.ctrlKey);
        var selected = this.isSelected(option);
        var valueChanged = false;
        if (selected) {
            if (metaKey) {
                this.value = null;
                valueChanged = true;
            }
        }
        else {
            this.value = option.value;
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit(event);
        }
    };
    Listbox.prototype.onOptionClickMultiple = function (event, option) {
        var metaKey = (event.metaKey || event.ctrlKey);
        var selected = this.isSelected(option);
        var valueChanged = false;
        if (selected) {
            if (metaKey) {
                this.value.splice(this.findIndex(option), 1);
            }
            else {
                this.value = [];
                this.value.push(option.value);
            }
            valueChanged = true;
        }
        else {
            this.value = (metaKey) ? this.value || [] : [];
            this.value.push(option.value);
            valueChanged = true;
        }
        if (valueChanged) {
            this.onModelChange(this.value);
            this.onChange.emit(event);
        }
    };
    Listbox.prototype.isSelected = function (option) {
        var selected = false;
        if (this.multiple) {
            if (this.value) {
                for (var i = 0; i < this.value.length; i++) {
                    if (this.value[i] === option.value) {
                        selected = true;
                        break;
                    }
                }
            }
        }
        else {
            selected = this.value == option.value;
        }
        return selected;
    };
    Listbox.prototype.findIndex = function (option) {
        var index = -1;
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.domHandler.equals(option.value, this.value[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Listbox.prototype.onDoubleClick = function (event, option) {
        this.onDblClick.emit({
            originalEvent: event,
            value: option
        });
    };
    Listbox.decorators = [
        { type: Component, args: [{
                    selector: 'p-listbox',
                    template: "\n        <div [ngClass]=\"{'ui-listbox ui-inputtext ui-widget ui-widget-content ui-corner-all':true,'ui-state-disabled':disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul class=\"ui-listbox-list\">\n                <li #item *ngFor=\"let option of options\"\n                    [ngClass]=\"{'ui-listbox-item ui-corner-all':true,'ui-state-hover':(hoveredItem==item),'ui-state-highlight':isSelected(option)}\"\n                    (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\" (click)=\"onOptionClick($event,option)\" (dblclick)=\"onDoubleClick($event,option)\">\n                    <span *ngIf=\"!itemTemplate\">{{option.label}}</span>\n                    <template *ngIf=\"itemTemplate\" [pTemplateWrapper]=\"itemTemplate\" [item]=\"option\"></template>\n                </li>\n            </ul>\n        </div>\n    ",
                    providers: [DomHandler, LISTBOX_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Listbox.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    Listbox.propDecorators = {
        'options': [{ type: Input },],
        'multiple': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'disabled': [{ type: Input },],
        'onChange': [{ type: Output },],
        'onDblClick': [{ type: Output },],
        'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return Listbox;
}());
export var ListboxModule = (function () {
    function ListboxModule() {
    }
    ListboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule],
                    exports: [Listbox, SharedModule],
                    declarations: [Listbox]
                },] },
    ];
    /** @nocollapse */
    ListboxModule.ctorParameters = [];
    return ListboxModule;
}());
//# sourceMappingURL=listbox.js.map