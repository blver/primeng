import { NgModule, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
export var InputTextarea = (function () {
    function InputTextarea(el) {
        this.el = el;
    }
    InputTextarea.prototype.ngOnInit = function () {
        this.rowsDefault = this.rows;
        this.colsDefault = this.cols;
    };
    InputTextarea.prototype.onMouseover = function (e) {
        this.hover = true;
    };
    InputTextarea.prototype.onMouseout = function (e) {
        this.hover = false;
    };
    InputTextarea.prototype.onFocus = function (e) {
        this.focus = true;
        if (this.autoResize) {
            this.resize();
        }
    };
    InputTextarea.prototype.onBlur = function (e) {
        this.focus = false;
        if (this.autoResize) {
            this.resize();
        }
    };
    InputTextarea.prototype.onKeyup = function (e) {
        if (this.autoResize) {
            this.resize();
        }
    };
    InputTextarea.prototype.resize = function () {
        var linesCount = 0, lines = this.el.nativeElement.value.split('\n');
        for (var i = lines.length - 1; i >= 0; --i) {
            linesCount += Math.floor((lines[i].length / this.colsDefault) + 1);
        }
        this.rows = (linesCount >= this.rowsDefault) ? (linesCount + 1) : this.rowsDefault;
    };
    Object.defineProperty(InputTextarea.prototype, "disabled", {
        get: function () {
            return this.el.nativeElement.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputTextarea.prototype, "filled", {
        get: function () {
            return this.el.nativeElement.value != '';
        },
        enumerable: true,
        configurable: true
    });
    InputTextarea.decorators = [
        { type: Directive, args: [{
                    selector: '[pInputTextarea]',
                    host: {
                        '[class.ui-inputtext]': 'true',
                        '[class.ui-corner-all]': 'true',
                        '[class.ui-state-default]': 'true',
                        '[class.ui-widget]': 'true',
                        '[class.ui-state-hover]': 'hover',
                        '[class.ui-state-focus]': 'focus',
                        '[class.ui-state-disabled]': 'disabled',
                        '[class.ui-state-filled]': 'filled',
                        '[attr.rows]': 'rows',
                        '[attr.cols]': 'cols'
                    }
                },] },
    ];
    /** @nocollapse */
    InputTextarea.ctorParameters = [
        { type: ElementRef, },
    ];
    InputTextarea.propDecorators = {
        'autoResize': [{ type: Input },],
        'rows': [{ type: Input },],
        'cols': [{ type: Input },],
        'onMouseover': [{ type: HostListener, args: ['mouseover', ['$event'],] },],
        'onMouseout': [{ type: HostListener, args: ['mouseout', ['$event'],] },],
        'onFocus': [{ type: HostListener, args: ['focus', ['$event'],] },],
        'onBlur': [{ type: HostListener, args: ['blur', ['$event'],] },],
        'onKeyup': [{ type: HostListener, args: ['keyup', ['$event'],] },],
    };
    return InputTextarea;
}());
export var InputTextareaModule = (function () {
    function InputTextareaModule() {
    }
    InputTextareaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [InputTextarea],
                    declarations: [InputTextarea]
                },] },
    ];
    /** @nocollapse */
    InputTextareaModule.ctorParameters = [];
    return InputTextareaModule;
}());
//# sourceMappingURL=inputtextarea.js.map