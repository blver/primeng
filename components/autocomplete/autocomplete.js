import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChild, TemplateRef, IterableDiffers, Renderer, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from '../inputtext/inputtext';
import { ButtonModule } from '../button/button';
import { SharedModule } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return AutoComplete; }),
    multi: true
};
export var AutoComplete = (function () {
    function AutoComplete(el, domHandler, differs, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.minLength = 3;
        this.delay = 300;
        this.completeMethod = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
        this.onDropdownClick = new EventEmitter();
        this.scrollHeight = '200px';
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.panelVisible = false;
        this.differ = differs.find([]).create(null);
    }
    AutoComplete.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.suggestions);
        if (changes && this.panel) {
            if (this.suggestions && this.suggestions.length) {
                this.show();
                this.suggestionsUpdated = true;
            }
            else {
                this.hide();
            }
        }
    };
    AutoComplete.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.input = this.domHandler.findSingle(this.el.nativeElement, 'input');
        this.panel = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-autocomplete-panel');
        if (this.multiple) {
            this.multipleContainer = this.domHandler.findSingle(this.el.nativeElement, 'ul.ui-autocomplete-multiple-container');
        }
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
            _this.hide();
        });
    };
    AutoComplete.prototype.ngAfterViewChecked = function () {
        if (this.suggestionsUpdated) {
            this.align();
            this.suggestionsUpdated = false;
        }
        if (this.highlightOptionChanged) {
            var listItem = this.domHandler.findSingle(this.panel, 'li.ui-state-highlight');
            if (listItem) {
                this.domHandler.scrollInView(this.panel, listItem);
            }
            this.highlightOptionChanged = false;
        }
    };
    AutoComplete.prototype.writeValue = function (value) {
        this.value = value;
    };
    AutoComplete.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    AutoComplete.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    AutoComplete.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    AutoComplete.prototype.onInput = function (event) {
        var _this = this;
        var value = event.target.value;
        if (!this.multiple) {
            this.value = value;
            this.onModelChange(value);
        }
        if (value.length === 0) {
            this.hide();
        }
        if (value.length >= this.minLength) {
            //Cancel the search request if user types within the timeout
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(function () {
                _this.search(event, value);
            }, this.delay);
        }
        else {
            this.suggestions = null;
        }
    };
    AutoComplete.prototype.search = function (event, query) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
            return;
        }
        this.completeMethod.emit({
            originalEvent: event,
            query: query
        });
    };
    AutoComplete.prototype.selectItem = function (option) {
        if (this.multiple) {
            this.input.value = '';
            this.value = this.value || [];
            if (!this.isSelected(option)) {
                this.value.push(option);
                this.onModelChange(this.value);
            }
        }
        else {
            this.input.value = this.field ? this.resolveFieldData(option) : option;
            this.value = option;
            this.onModelChange(this.value);
        }
        this.onSelect.emit(option);
        this.input.focus();
    };
    AutoComplete.prototype.show = function () {
        if (!this.panelVisible) {
            this.panelVisible = true;
            this.panel.style.zIndex = ++DomHandler.zindex;
            this.domHandler.fadeIn(this.panel, 200);
        }
    };
    AutoComplete.prototype.align = function () {
        if (this.multiple)
            this.domHandler.relativePosition(this.panel, this.multipleContainer);
        else
            this.domHandler.relativePosition(this.panel, this.input);
    };
    AutoComplete.prototype.hide = function () {
        this.panelVisible = false;
    };
    AutoComplete.prototype.handleDropdownClick = function (event) {
        this.onDropdownClick.emit({
            originalEvent: event,
            query: this.input.value
        });
    };
    AutoComplete.prototype.removeItem = function (item) {
        var itemIndex = this.domHandler.index(item);
        var removedValue = this.value.splice(itemIndex, 1)[0];
        this.onUnselect.emit(removedValue);
        this.onModelChange(this.value);
    };
    AutoComplete.prototype.resolveFieldData = function (data) {
        if (data && this.field) {
            if (this.field.indexOf('.') == -1) {
                return data[this.field];
            }
            else {
                var fields = this.field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    AutoComplete.prototype.onKeydown = function (event) {
        if (this.panelVisible) {
            var highlightItemIndex = this.findOptionIndex(this.highlightOption);
            switch (event.which) {
                //down
                case 40:
                    if (highlightItemIndex != -1) {
                        var nextItemIndex = highlightItemIndex + 1;
                        if (nextItemIndex != (this.suggestions.length)) {
                            this.highlightOption = this.suggestions[nextItemIndex];
                            this.highlightOptionChanged = true;
                        }
                    }
                    else {
                        this.highlightOption = this.suggestions[0];
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    if (highlightItemIndex > 0) {
                        var prevItemIndex = highlightItemIndex - 1;
                        this.highlightOption = this.suggestions[prevItemIndex];
                        this.highlightOptionChanged = true;
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                        this.hide();
                    }
                    event.preventDefault();
                    break;
                //escape
                case 27:
                    this.hide();
                    event.preventDefault();
                    break;
                //tab
                case 9:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                    }
                    this.hide();
                    break;
            }
        }
        if (this.multiple) {
            switch (event.which) {
                //backspace
                case 8:
                    if (this.value && this.value.length && !this.input.value) {
                        var removedValue = this.value.pop();
                        this.onUnselect.emit(removedValue);
                        this.onModelChange(this.value);
                    }
                    break;
            }
        }
    };
    AutoComplete.prototype.onFocus = function () {
        this.focus = true;
    };
    AutoComplete.prototype.onBlur = function () {
        this.focus = false;
        this.onModelTouched();
    };
    AutoComplete.prototype.isSelected = function (val) {
        var selected = false;
        if (this.value && this.value.length) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.domHandler.equals(this.value[i], val)) {
                    selected = true;
                    break;
                }
            }
        }
        return selected;
    };
    AutoComplete.prototype.findOptionIndex = function (option) {
        var index = -1;
        if (this.suggestions) {
            for (var i = 0; i < this.suggestions.length; i++) {
                if (this.domHandler.equals(option, this.suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Object.defineProperty(AutoComplete.prototype, "filled", {
        get: function () {
            return this.input && this.input.value != '';
        },
        enumerable: true,
        configurable: true
    });
    AutoComplete.prototype.ngOnDestroy = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
    };
    AutoComplete.decorators = [
        { type: Component, args: [{
                    selector: 'p-autoComplete',
                    template: "\n        <span [ngClass]=\"{'ui-autocomplete ui-widget':true,'ui-autocomplete-dd':dropdown,'ui-autocomplete-multiple':multiple}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <input *ngIf=\"!multiple\" #in pInputText type=\"text\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" autocomplete=\"off\"\n            [value]=\"value ? (field ? resolveFieldData(value)||value : value) : null\" (input)=\"onInput($event)\" (keydown)=\"onKeydown($event)\" (focus)=\"onFocus()\" (blur)=\"onBlur()\"\n            [attr.placeholder]=\"placeholder\" [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.readonly]=\"readonly\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-autocomplete-input':true,'ui-autocomplete-dd-input':dropdown}\"\n            ><ul *ngIf=\"multiple\" class=\"ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all\" (click)=\"multiIn.focus()\">\n                <li #token *ngFor=\"let val of value\" class=\"ui-autocomplete-token ui-state-highlight ui-corner-all\">\n                    <span class=\"ui-autocomplete-token-icon fa fa-fw fa-close\" (click)=\"removeItem(token)\"></span>\n                    <span class=\"ui-autocomplete-token-label\">{{field ? val[field] : val}}</span>\n                </li>\n                <li class=\"ui-autocomplete-input-token\">\n                    <input #multiIn type=\"text\" pInputText (input)=\"onInput($event)\" (keydown)=\"onKeydown($event)\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" autocomplete=\"off\">\n                </li>\n            </ul\n            ><button type=\"button\" pButton icon=\"fa-fw fa-caret-down\" class=\"ui-autocomplete-dropdown\" [disabled]=\"disabled\"\n                (click)=\"handleDropdownClick($event)\" *ngIf=\"dropdown\"></button>\n            <div class=\"ui-autocomplete-panel ui-widget-content ui-corner-all ui-shadow\" [style.display]=\"panelVisible ? 'block' : 'none'\" [style.width]=\"'100%'\" [style.max-height]=\"scrollHeight\">\n                <ul class=\"ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\">\n                    <li *ngFor=\"let option of suggestions\" [ngClass]=\"{'ui-autocomplete-list-item ui-corner-all':true,'ui-state-highlight':(highlightOption==option)}\"\n                        (mouseenter)=\"highlightOption=option\" (mouseleave)=\"highlightOption=null\" (click)=\"selectItem(option)\">\n                        <span *ngIf=\"!itemTemplate\">{{field ? option[field] : option}}</span>\n                        <template *ngIf=\"itemTemplate\" [pTemplateWrapper]=\"itemTemplate\" [item]=\"option\"></template>\n                    </li>\n                </ul>\n            </div>\n        </span>\n    ",
                    host: {
                        '[class.ui-inputwrapper-filled]': 'filled',
                        '[class.ui-inputwrapper-focus]': 'focus'
                    },
                    providers: [DomHandler, AUTOCOMPLETE_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    AutoComplete.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: IterableDiffers, },
        { type: Renderer, },
    ];
    AutoComplete.propDecorators = {
        'minLength': [{ type: Input },],
        'delay': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'inputStyle': [{ type: Input },],
        'inputStyleClass': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'readonly': [{ type: Input },],
        'disabled': [{ type: Input },],
        'maxlength': [{ type: Input },],
        'size': [{ type: Input },],
        'suggestions': [{ type: Input },],
        'completeMethod': [{ type: Output },],
        'onSelect': [{ type: Output },],
        'onUnselect': [{ type: Output },],
        'onDropdownClick': [{ type: Output },],
        'field': [{ type: Input },],
        'scrollHeight': [{ type: Input },],
        'dropdown': [{ type: Input },],
        'multiple': [{ type: Input },],
        'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return AutoComplete;
}());
export var AutoCompleteModule = (function () {
    function AutoCompleteModule() {
    }
    AutoCompleteModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, InputTextModule, ButtonModule, SharedModule],
                    exports: [AutoComplete, SharedModule],
                    declarations: [AutoComplete]
                },] },
    ];
    /** @nocollapse */
    AutoCompleteModule.ctorParameters = [];
    return AutoCompleteModule;
}());
//# sourceMappingURL=autocomplete.js.map