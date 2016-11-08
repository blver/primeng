import { NgModule, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { CommonModule } from '@angular/common';
export var Button = (function () {
    function Button(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.iconPos = 'left';
    }
    Button.prototype.ngAfterViewInit = function () {
        this.domHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            var iconElement = document.createElement("span");
            var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-c fa fa-fw ' + this.icon;
            this.el.nativeElement.appendChild(iconElement);
        }
        var labelElement = document.createElement("span");
        labelElement.className = 'ui-button-text ui-c';
        labelElement.appendChild(document.createTextNode(this.label || 'ui-button'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    };
    Button.prototype.onMouseenter = function (e) {
        this.hover = true;
    };
    Button.prototype.onMouseleave = function (e) {
        this.hover = false;
        this.active = false;
    };
    Button.prototype.onMouseDown = function (e) {
        this.active = true;
    };
    Button.prototype.onMouseUp = function (e) {
        this.active = false;
    };
    Button.prototype.onFocus = function (e) {
        this.focus = true;
    };
    Button.prototype.onBlur = function (e) {
        this.focus = false;
    };
    Button.prototype.isDisabled = function () {
        return this.el.nativeElement.disabled;
    };
    Button.prototype.getStyleClass = function () {
        var styleClass = 'ui-button ui-widget ui-state-default ui-corner-all';
        if (this.icon) {
            if (this.label != null && this.label != undefined) {
                if (this.iconPos == 'left')
                    styleClass = styleClass + ' ui-button-text-icon-left';
                else
                    styleClass = styleClass + ' ui-button-text-icon-right';
            }
            else {
                styleClass = styleClass + ' ui-button-icon-only';
            }
        }
        else {
            styleClass = styleClass + ' ui-button-text-only';
        }
        return styleClass;
    };
    Object.defineProperty(Button.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (val) {
            this._label = val;
            if (this.initialized) {
                this.domHandler.findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label;
            }
        },
        enumerable: true,
        configurable: true
    });
    Button.prototype.ngOnDestroy = function () {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }
        this.initialized = false;
    };
    Button.decorators = [
        { type: Directive, args: [{
                    selector: '[pButton]',
                    host: {
                        '[class.ui-state-hover]': 'hover&&!isDisabled()',
                        '[class.ui-state-focus]': 'focus',
                        '[class.ui-state-active]': 'active',
                        '[class.ui-state-disabled]': 'isDisabled()'
                    },
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    Button.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    Button.propDecorators = {
        'icon': [{ type: Input },],
        'iconPos': [{ type: Input },],
        'onMouseenter': [{ type: HostListener, args: ['mouseenter', ['$event'],] },],
        'onMouseleave': [{ type: HostListener, args: ['mouseleave', ['$event'],] },],
        'onMouseDown': [{ type: HostListener, args: ['mousedown', ['$event'],] },],
        'onMouseUp': [{ type: HostListener, args: ['mouseup', ['$event'],] },],
        'onFocus': [{ type: HostListener, args: ['focus', ['$event'],] },],
        'onBlur': [{ type: HostListener, args: ['blur', ['$event'],] },],
        'label': [{ type: Input },],
    };
    return Button;
}());
export var ButtonModule = (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Button],
                    declarations: [Button]
                },] },
    ];
    /** @nocollapse */
    ButtonModule.ctorParameters = [];
    return ButtonModule;
}());
//# sourceMappingURL=button.js.map