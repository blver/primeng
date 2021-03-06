import { NgModule, Component, ElementRef, Input, Output, Renderer, EventEmitter, ContentChild, TemplateRef, IterableDiffers, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var DROPDOWN_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Dropdown; }),
    multi: true
};
export var Dropdown = (function () {
    function Dropdown(el, domHandler, renderer, differs) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.scrollHeight = '200px';
        this.autoWidth = true;
        this.onChange = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.panelVisible = false;
        this.differ = differs.find([]).create(null);
    }
    Dropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.optionsToDisplay = this.options;
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
            if (!_this.selfClick && !_this.itemClick) {
                _this.panelVisible = false;
            }
            _this.selfClick = false;
            _this.itemClick = false;
        });
    };
    Dropdown.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.options);
        if (changes && this.initialized) {
            this.optionsToDisplay = this.options;
            this.updateSelectedOption(this.value);
            this.optionsChanged = true;
        }
    };
    Dropdown.prototype.ngAfterViewInit = function () {
        this.container = this.el.nativeElement.children[0];
        this.panel = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-dropdown-panel');
        this.itemsWrapper = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-dropdown-items-wrapper');
        this.updateDimensions();
        this.initialized = true;
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.appendTo.appendChild(this.container);
        }
    };
    Object.defineProperty(Dropdown.prototype, "label", {
        get: function () {
            return this.selectedOption ? this.selectedOption.label : null;
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.onItemClick = function (event, option) {
        this.itemClick = true;
        this.selectItem(event, option);
        this.hide();
    };
    Dropdown.prototype.selectItem = function (event, option) {
        this.selectedOption = option;
        this.value = option.value;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    Dropdown.prototype.ngAfterViewChecked = function () {
        if (this.optionsChanged) {
            this.domHandler.relativePosition(this.panel, this.container);
            this.optionsChanged = false;
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            var selectedItem = this.domHandler.findSingle(this.panel, 'li.ui-state-highlight');
            if (selectedItem) {
                this.domHandler.scrollInView(this.itemsWrapper, this.domHandler.findSingle(this.panel, 'li.ui-state-highlight'));
            }
            this.selectedOptionUpdated = false;
        }
    };
    Dropdown.prototype.writeValue = function (value) {
        this.value = value;
        this.updateSelectedOption(value);
    };
    Dropdown.prototype.updateSelectedOption = function (val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if (!this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
    };
    Dropdown.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Dropdown.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Dropdown.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Dropdown.prototype.updateDimensions = function () {
        if (this.autoWidth) {
            var select = this.domHandler.findSingle(this.el.nativeElement, 'select');
            if (!this.style || (!this.style['width'] && !this.style['min-width'])) {
                this.el.nativeElement.children[0].style.width = select.offsetWidth + 30 + 'px';
            }
        }
    };
    Dropdown.prototype.onMouseenter = function (event) {
        this.hover = true;
    };
    Dropdown.prototype.onMouseleave = function (event) {
        this.hover = false;
    };
    Dropdown.prototype.onMouseclick = function (event, input) {
        if (this.disabled) {
            return;
        }
        this.selfClick = true;
        if (!this.itemClick) {
            input.focus();
            if (this.panelVisible)
                this.hide();
            else {
                this.show(this.panel, this.container);
            }
        }
    };
    Dropdown.prototype.onEditableInputClick = function (event) {
        this.itemClick = true;
    };
    Dropdown.prototype.onEditableInputFocus = function (event) {
        this.focus = true;
        this.hide();
    };
    Dropdown.prototype.onEditableInputChange = function (event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    Dropdown.prototype.show = function (panel, container) {
        if (this.options && this.options.length) {
            this.panelVisible = true;
            panel.style.zIndex = ++DomHandler.zindex;
            this.domHandler.relativePosition(panel, container);
            this.domHandler.fadeIn(panel, 250);
        }
    };
    Dropdown.prototype.hide = function () {
        this.panelVisible = false;
    };
    Dropdown.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.onFocus.emit(event);
    };
    Dropdown.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    Dropdown.prototype.onKeydown = function (event) {
        var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
        switch (event.which) {
            //down
            case 40:
                if (!this.panelVisible && event.altKey) {
                    this.show(this.panel, this.container);
                }
                else {
                    if (selectedItemIndex != -1) {
                        var nextItemIndex = selectedItemIndex + 1;
                        if (nextItemIndex != (this.optionsToDisplay.length)) {
                            this.selectedOption = this.optionsToDisplay[nextItemIndex];
                            this.selectedOptionUpdated = true;
                            this.selectItem(event, this.selectedOption);
                        }
                    }
                    else {
                        this.selectedOption = this.optionsToDisplay[0];
                    }
                }
                event.preventDefault();
                break;
            //up
            case 38:
                if (selectedItemIndex > 0) {
                    var prevItemIndex = selectedItemIndex - 1;
                    this.selectedOption = this.optionsToDisplay[prevItemIndex];
                    this.selectedOptionUpdated = true;
                    this.selectItem(event, this.selectedOption);
                }
                event.preventDefault();
                break;
            //enter
            case 13:
                this.hide();
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.panelVisible = false;
                break;
        }
    };
    Dropdown.prototype.findListItem = function (element) {
        if (element.nodeName == 'LI') {
            return element;
        }
        else {
            var parent_1 = element.parentElement;
            while (parent_1.nodeName != 'LI') {
                parent_1 = parent_1.parentElement;
            }
            return parent_1;
        }
    };
    Dropdown.prototype.findOptionIndex = function (val, opts) {
        var index = -1;
        if (opts) {
            for (var i = 0; i < opts.length; i++) {
                if ((val == null && opts[i].value == null) || this.domHandler.equals(val, opts[i].value)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Dropdown.prototype.findOption = function (val, opts) {
        var index = this.findOptionIndex(val, opts);
        return (index != -1) ? opts[index] : null;
    };
    Dropdown.prototype.onFilter = function (event) {
        if (this.options && this.options.length) {
            var val = event.target.value.toLowerCase();
            this.optionsToDisplay = [];
            for (var i = 0; i < this.options.length; i++) {
                var option = this.options[i];
                if (option.label.toLowerCase().indexOf(val) > -1) {
                    this.optionsToDisplay.push(option);
                }
            }
            this.optionsChanged = true;
        }
    };
    Dropdown.prototype.applyFocus = function () {
        if (this.editable)
            this.domHandler.findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();
        else
            this.domHandler.findSingle(this.el.nativeElement, 'input[readonly]').focus();
    };
    Dropdown.prototype.ngOnDestroy = function () {
        this.initialized = false;
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    };
    Dropdown.decorators = [
        { type: Component, args: [{
                    selector: 'p-dropdown',
                    template: "\n         <div [ngClass]=\"{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true,\n            'ui-state-hover':hover&&!disabled,'ui-state-focus':focus,'ui-state-disabled':disabled,'ui-dropdown-open':panelVisible}\" \n            (mouseenter)=\"onMouseenter($event)\" (mouseleave)=\"onMouseleave($event)\" (click)=\"onMouseclick($event,in)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <select [required]=\"required\" tabindex=\"-1\">\n                    <option *ngFor=\"let option of options\" [value]=\"option.value\" [selected]=\"selectedOption == option\">{{option.label}}</option>\n                </select>\n            </div>\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in type=\"text\" readonly (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event)\">\n            </div>\n            <label [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':!label}\" *ngIf=\"!editable\">{{label||'empty'}}</label>\n            <input type=\"text\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [value]=\"label\"\n                        (click)=\"onEditableInputClick($event)\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onBlur($event)\">\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\" [ngClass]=\"{'ui-state-hover':hover&&!disabled,'ui-state-focus':focus}\">\n                <span class=\"fa fa-fw fa-caret-down ui-c\"></span>\n            </div>\n            <div class=\"ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-shadow\" \n                [style.display]=\"panelVisible ? 'block' : 'none'\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (input)=\"onFilter($event)\" (click)=\"$event.stopPropagation()\">\n                    <input type=\"text\" autocomplete=\"off\" class=\"ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all\">\n                    <span class=\"fa fa-search\"></span>\n                </div>\n                <div class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"scrollHeight||'auto'\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\">\n                        <li #item *ngFor=\"let option of optionsToDisplay;let i=index\" \n                            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true, 'ui-state-hover':hoveredItem == item,'ui-state-highlight':(selectedOption == option)}\"\n                            (click)=\"onItemClick($event, option)\" (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\">\n                            <span *ngIf=\"!itemTemplate\">{{option.label}}</span>\n                            <template [pTemplateWrapper]=\"itemTemplate\" [item]=\"option\" *ngIf=\"itemTemplate\"></template>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
                    providers: [DomHandler, DROPDOWN_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Dropdown.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
        { type: IterableDiffers, },
    ];
    Dropdown.propDecorators = {
        'options': [{ type: Input },],
        'scrollHeight': [{ type: Input },],
        'filter': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'disabled': [{ type: Input },],
        'autoWidth': [{ type: Input },],
        'required': [{ type: Input },],
        'editable': [{ type: Input },],
        'appendTo': [{ type: Input },],
        'onChange': [{ type: Output },],
        'onFocus': [{ type: Output },],
        'onBlur': [{ type: Output },],
        'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return Dropdown;
}());
export var DropdownModule = (function () {
    function DropdownModule() {
    }
    DropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule],
                    exports: [Dropdown, SharedModule],
                    declarations: [Dropdown]
                },] },
    ];
    /** @nocollapse */
    DropdownModule.ctorParameters = [];
    return DropdownModule;
}());
//# sourceMappingURL=dropdown.js.map