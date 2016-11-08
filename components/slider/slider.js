import { NgModule, Component, ElementRef, Input, Output, EventEmitter, forwardRef, Renderer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var SLIDER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Slider; }),
    multi: true
};
export var Slider = (function () {
    function Slider(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.min = 0;
        this.max = 100;
        this.orientation = 'horizontal';
        this.onChange = new EventEmitter();
        this.onSlideEnd = new EventEmitter();
        this.handleValues = [];
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Slider.prototype.onMouseDown = function (event, index) {
        if (this.disabled) {
            return;
        }
        this.dragging = true;
        this.updateDomData();
        this.sliderHandleClick = true;
        this.handleIndex = index;
    };
    Slider.prototype.onBarClick = function (event) {
        if (this.disabled) {
            return;
        }
        if (!this.sliderHandleClick) {
            this.updateDomData();
            this.handleChange(event);
        }
        this.sliderHandleClick = false;
    };
    Slider.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.dragListener = this.renderer.listenGlobal('body', 'mousemove', function (event) {
            if (_this.dragging) {
                _this.handleChange(event);
            }
        });
        this.mouseupListener = this.renderer.listenGlobal('body', 'mouseup', function (event) {
            if (_this.dragging) {
                _this.dragging = false;
                _this.onSlideEnd.emit({ originalEvent: event });
            }
        });
    };
    Slider.prototype.handleChange = function (event) {
        var handleValue = this.calculateHandleValue(event);
        var newValue = this.getValueFromHandle(handleValue);
        if (this.range) {
            if (this.step) {
                this.handleStepChange(newValue, this.values[this.handleIndex]);
            }
            else {
                this.handleValues[this.handleIndex] = handleValue;
                this.updateValue(newValue, event);
            }
        }
        else {
            if (this.step) {
                this.handleStepChange(newValue, this.value);
            }
            else {
                this.handleValue = handleValue;
                this.updateValue(newValue, event);
            }
        }
    };
    Slider.prototype.handleStepChange = function (newValue, oldValue) {
        var diff = (newValue - oldValue);
        if (diff < 0 && (-1 * diff) >= this.step / 2) {
            newValue = oldValue - this.step;
            this.updateValue(newValue);
            this.updateHandleValue();
        }
        else if (diff > 0 && diff >= this.step / 2) {
            newValue = oldValue + this.step;
            this.updateValue(newValue);
            this.updateHandleValue();
        }
    };
    Slider.prototype.writeValue = function (value) {
        if (this.range)
            this.values = value || [0, 0];
        else
            this.value = value || 0;
        this.updateHandleValue();
    };
    Slider.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Slider.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Slider.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Slider.prototype.updateDomData = function () {
        var rect = this.el.nativeElement.children[0].getBoundingClientRect();
        this.initX = rect.left + this.domHandler.getWindowScrollLeft();
        this.initY = rect.top + this.domHandler.getWindowScrollTop();
        this.barWidth = this.el.nativeElement.children[0].offsetWidth;
        this.barHeight = this.el.nativeElement.children[0].offsetHeight;
    };
    Slider.prototype.calculateHandleValue = function (event) {
        if (this.orientation === 'horizontal')
            return Math.floor(((event.pageX - this.initX) * 100) / (this.barWidth));
        else
            return Math.floor((((this.initY + this.barHeight) - event.pageY) * 100) / (this.barHeight));
    };
    Slider.prototype.updateHandleValue = function () {
        if (this.range) {
            this.handleValues[0] = (this.values[0] < this.min ? this.min : this.values[0]) * 100 / (this.max - this.min);
            this.handleValues[1] = (this.values[1] > this.max ? this.max : this.values[1]) * 100 / (this.max - this.min);
        }
        else {
            if (this.value < this.min)
                this.handleValue = this.min;
            else if (this.value > this.max)
                this.handleValue = this.max;
            else
                this.handleValue = this.value * 100 / (this.max - this.min);
        }
    };
    Slider.prototype.updateValue = function (val, event) {
        if (this.range) {
            var value = val;
            if (this.handleIndex == 0) {
                if (value < this.min) {
                    value = this.min;
                    this.handleValues[0] = 0;
                }
                else if (value > this.values[1]) {
                    value = this.values[1];
                    this.handleValues[0] = this.values[1] * 100 / (this.max - this.min);
                }
            }
            else {
                if (value > this.max) {
                    value = this.max;
                    this.handleValues[1] = 100;
                }
                else if (value < this.values[0]) {
                    value = this.values[0];
                    this.handleValues[1] = this.values[0] * 100 / (this.max - this.min);
                }
            }
            this.values[this.handleIndex] = Math.floor(value);
            this.onModelChange(this.values);
            this.onChange.emit({ event: event, values: this.values });
        }
        else {
            if (val < this.min) {
                val = this.min;
                this.handleValue = 0;
            }
            else if (val > this.max) {
                val = this.max;
                this.handleValue = 100;
            }
            this.value = Math.floor(val);
            this.onModelChange(this.value);
            this.onChange.emit({ event: event, value: this.value });
        }
    };
    Slider.prototype.getValueFromHandle = function (handleValue) {
        return (this.max - this.min) * (handleValue / 100);
    };
    Slider.prototype.ngOnDestroy = function () {
        if (this.dragListener) {
            this.dragListener();
        }
        if (this.mouseupListener) {
            this.mouseupListener();
        }
    };
    Slider.decorators = [
        { type: Component, args: [{
                    selector: 'p-slider',
                    template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\" [ngClass]=\"{'ui-slider ui-widget ui-widget-content ui-corner-all':true,'ui-state-disabled':disabled,\n            'ui-slider-horizontal':orientation == 'horizontal','ui-slider-vertical':orientation == 'vertical','ui-slider-animate':animate}\"\n            (click)=\"onBarClick($event)\">\n            <span *ngIf=\"!range\" class=\"ui-slider-handle ui-state-default ui-corner-all\" (mousedown)=\"onMouseDown($event)\" [style.transition]=\"dragging ? 'none': null\"\n                [ngStyle]=\"{'left': orientation == 'horizontal' ? handleValue + '%' : null,'bottom': orientation == 'vertical' ? handleValue + '%' : null}\"></span>\n            <span *ngIf=\"range\" class=\"ui-slider-range ui-widget-header ui-corner-all\" [ngStyle]=\"{'left':handleValues[0] + '%',width: (handleValues[1] - handleValues[0] + '%')}\"></span>\n            <span *ngIf=\"orientation=='vertical'\" class=\"ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all\" [ngStyle]=\"{'height': handleValue + '%'}\"></span>\n            <span *ngIf=\"range\" (mousedown)=\"onMouseDown($event,0)\" [style.transition]=\"dragging ? 'none': null\" class=\"ui-slider-handle ui-state-default ui-corner-all\" [ngStyle]=\"{'left':handleValues[0] + '%'}\"></span>\n            <span *ngIf=\"range\" (mousedown)=\"onMouseDown($event,1)\" [style.transition]=\"dragging ? 'none': null\" class=\"ui-slider-handle ui-state-default ui-corner-all\" [ngStyle]=\"{'left':handleValues[1] + '%'}\"></span>\n        </div>\n    ",
                    providers: [SLIDER_VALUE_ACCESSOR, DomHandler]
                },] },
    ];
    /** @nocollapse */
    Slider.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
    ];
    Slider.propDecorators = {
        'animate': [{ type: Input },],
        'disabled': [{ type: Input },],
        'min': [{ type: Input },],
        'max': [{ type: Input },],
        'orientation': [{ type: Input },],
        'step': [{ type: Input },],
        'range': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'onChange': [{ type: Output },],
        'onSlideEnd': [{ type: Output },],
    };
    return Slider;
}());
export var SliderModule = (function () {
    function SliderModule() {
    }
    SliderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Slider],
                    declarations: [Slider]
                },] },
    ];
    /** @nocollapse */
    SliderModule.ctorParameters = [];
    return SliderModule;
}());
//# sourceMappingURL=slider.js.map