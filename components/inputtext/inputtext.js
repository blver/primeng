import { NgModule, Directive, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
export var InputText = (function () {
    function InputText(el) {
        this.el = el;
    }
    InputText.prototype.onMouseover = function (e) {
        this.hover = true;
    };
    InputText.prototype.onMouseout = function (e) {
        this.hover = false;
    };
    InputText.prototype.onFocus = function (e) {
        this.focus = true;
    };
    InputText.prototype.onBlur = function (e) {
        this.focus = false;
    };
    Object.defineProperty(InputText.prototype, "disabled", {
        get: function () {
            return this.el.nativeElement.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputText.prototype, "filled", {
        get: function () {
            return this.el.nativeElement.value && this.el.nativeElement.value.length;
        },
        enumerable: true,
        configurable: true
    });
    InputText.decorators = [
        { type: Directive, args: [{
                    selector: '[pInputText]',
                    host: {
                        '[class.ui-inputtext]': 'true',
                        '[class.ui-corner-all]': 'true',
                        '[class.ui-state-default]': 'true',
                        '[class.ui-widget]': 'true',
                        '[class.ui-state-hover]': 'hover',
                        '[class.ui-state-focus]': 'focus',
                        '[class.ui-state-disabled]': 'disabled',
                        '[class.ui-state-filled]': 'filled'
                    }
                },] },
    ];
    /** @nocollapse */
    InputText.ctorParameters = [
        { type: ElementRef, },
    ];
    InputText.propDecorators = {
        'onMouseover': [{ type: HostListener, args: ['mouseover', ['$event'],] },],
        'onMouseout': [{ type: HostListener, args: ['mouseout', ['$event'],] },],
        'onFocus': [{ type: HostListener, args: ['focus', ['$event'],] },],
        'onBlur': [{ type: HostListener, args: ['blur', ['$event'],] },],
    };
    return InputText;
}());
export var InputTextModule = (function () {
    function InputTextModule() {
    }
    InputTextModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [InputText],
                    declarations: [InputText]
                },] },
    ];
    /** @nocollapse */
    InputTextModule.ctorParameters = [];
    return InputTextModule;
}());
//# sourceMappingURL=inputtext.js.map