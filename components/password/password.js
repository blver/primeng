import { NgModule, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
export var Password = (function () {
    function Password(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.promptLabel = 'Please enter a password';
        this.weakLabel = 'Weak';
        this.mediumLabel = 'Medium';
        this.strongLabel = 'Strong';
    }
    Password.prototype.ngAfterViewInit = function () {
        this.panel = document.createElement('div');
        this.panel.className = 'ui-password-panel ui-widget ui-state-highlight ui-corner-all ui-helper-hidden ui-password-panel-overlay';
        this.meter = document.createElement('div');
        this.meter.className = 'ui-password-meter';
        this.info = document.createElement('div');
        this.info.className = 'ui-password-info';
        this.info.textContent = this.promptLabel;
        this.panel.appendChild(this.meter);
        this.panel.appendChild(this.info);
        document.body.appendChild(this.panel);
    };
    Password.prototype.onMouseover = function (e) {
        this.hover = true;
    };
    Password.prototype.onMouseout = function (e) {
        this.hover = false;
    };
    Password.prototype.onFocus = function (e) {
        this.focus = true;
        this.domHandler.removeClass(this.panel, 'ui-helper-hidden');
        this.domHandler.absolutePosition(this.panel, this.el.nativeElement);
        this.domHandler.fadeIn(this.panel, 250);
    };
    Password.prototype.onBlur = function (e) {
        this.focus = false;
        this.domHandler.addClass(this.panel, 'ui-helper-hidden');
    };
    Password.prototype.onKeyup = function (e) {
        var value = e.target.value, label = null, meterPos = null;
        if (value.length === 0) {
            label = this.promptLabel;
            meterPos = '0px 0px';
        }
        else {
            var score = this.testStrength(value);
            if (score < 30) {
                label = this.weakLabel;
                meterPos = '0px -10px';
            }
            else if (score >= 30 && score < 80) {
                label = this.mediumLabel;
                meterPos = '0px -20px';
            }
            else if (score >= 80) {
                label = this.strongLabel;
                meterPos = '0px -30px';
            }
        }
        this.meter.style.backgroundPosition = meterPos;
        this.info.textContent = label;
    };
    Password.prototype.testStrength = function (str) {
        var grade = 0;
        var val;
        val = str.match('[0-9]');
        grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
        val = str.match('[a-zA-Z]');
        grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
        val = str.match('[!@#$%^&*?_~.,;=]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
        val = str.match('[A-Z]');
        grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
        grade *= str.length / 8;
        return grade > 100 ? 100 : grade;
    };
    Password.prototype.normalize = function (x, y) {
        var diff = x - y;
        if (diff <= 0)
            return x / y;
        else
            return 1 + 0.5 * (x / (x + y / 4));
    };
    Object.defineProperty(Password.prototype, "disabled", {
        get: function () {
            return this.el.nativeElement.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Password.prototype, "filled", {
        get: function () {
            return this.el.nativeElement.value != '';
        },
        enumerable: true,
        configurable: true
    });
    Password.prototype.ngOnDestroy = function () {
        this.panel.removeChild(this.meter);
        this.panel.removeChild(this.info);
        document.body.removeChild(this.panel);
        this.panel = null;
        this.meter = null;
        this.info = null;
    };
    Password.decorators = [
        { type: Directive, args: [{
                    selector: '[pPassword]',
                    host: {
                        '[class.ui-inputtext]': 'true',
                        '[class.ui-corner-all]': 'true',
                        '[class.ui-state-default]': 'true',
                        '[class.ui-widget]': 'true',
                        '[class.ui-state-hover]': 'hover',
                        '[class.ui-state-focus]': 'focus',
                        '[class.ui-state-disabled]': 'disabled',
                        '[class.ui-state-filled]': 'filled'
                    },
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    Password.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    Password.propDecorators = {
        'promptLabel': [{ type: Input },],
        'weakLabel': [{ type: Input },],
        'mediumLabel': [{ type: Input },],
        'strongLabel': [{ type: Input },],
        'onMouseover': [{ type: HostListener, args: ['mouseover', ['$event'],] },],
        'onMouseout': [{ type: HostListener, args: ['mouseout', ['$event'],] },],
        'onFocus': [{ type: HostListener, args: ['focus', ['$event'],] },],
        'onBlur': [{ type: HostListener, args: ['blur', ['$event'],] },],
        'onKeyup': [{ type: HostListener, args: ['keyup', ['$event'],] },],
    };
    return Password;
}());
export var PasswordModule = (function () {
    function PasswordModule() {
    }
    PasswordModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Password],
                    declarations: [Password]
                },] },
    ];
    /** @nocollapse */
    PasswordModule.ctorParameters = [];
    return PasswordModule;
}());
//# sourceMappingURL=password.js.map