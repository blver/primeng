import { NgModule, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
export var Tooltip = (function () {
    function Tooltip(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.tooltipPosition = 'right';
        this.tooltipEvent = 'hover';
    }
    Tooltip.prototype.onMouseEnter = function (e) {
        if (this.tooltipEvent === 'hover') {
            this.show();
        }
    };
    Tooltip.prototype.onMouseLeave = function (e) {
        if (this.tooltipEvent === 'hover') {
            this.hide();
        }
    };
    Tooltip.prototype.onFocus = function (e) {
        if (this.tooltipEvent === 'focus') {
            this.show();
        }
    };
    Tooltip.prototype.onBlur = function (e) {
        if (this.tooltipEvent === 'focus') {
            this.hide();
        }
    };
    Tooltip.prototype.show = function () {
        this.create();
        var rect = this.el.nativeElement.getBoundingClientRect();
        var targetTop = rect.top + document.body.scrollTop;
        var targetLeft = rect.left + document.body.scrollLeft;
        var left;
        var top;
        this.container.style.display = 'block';
        switch (this.tooltipPosition) {
            case 'right':
                left = targetLeft + this.domHandler.getOuterWidth(this.el.nativeElement);
                top = targetTop + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
                break;
            case 'left':
                left = targetLeft - this.domHandler.getOuterWidth(this.container);
                top = targetTop + (this.domHandler.getOuterHeight(this.el.nativeElement) - this.domHandler.getOuterHeight(this.container)) / 2;
                break;
            case 'top':
                left = targetLeft + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
                top = targetTop - this.domHandler.getOuterHeight(this.container);
                break;
            case 'bottom':
                left = targetLeft + (this.domHandler.getOuterWidth(this.el.nativeElement) - this.domHandler.getOuterWidth(this.container)) / 2;
                top = targetTop + this.domHandler.getOuterHeight(this.el.nativeElement);
                break;
        }
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
        this.domHandler.fadeIn(this.container, 250);
        this.container.style.zIndex = ++DomHandler.zindex;
    };
    Tooltip.prototype.hide = function () {
        this.container.style.display = 'none';
        document.body.removeChild(this.container);
        this.container = null;
    };
    Tooltip.prototype.create = function () {
        this.container = document.createElement('div');
        this.container.className = 'ui-widget ui-tooltip ui-tooltip-' + this.tooltipPosition;
        var tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'ui-tooltip-arrow';
        this.container.appendChild(tooltipArrow);
        var tooltipText = document.createElement('div');
        tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
        tooltipText.innerHTML = this.text;
        this.container.appendChild(tooltipText);
        document.body.appendChild(this.container);
    };
    Tooltip.prototype.ngOnDestroy = function () {
        if (this.container && this.container.parentElement) {
            document.body.removeChild(this.container);
        }
        this.container = null;
    };
    Tooltip.decorators = [
        { type: Directive, args: [{
                    selector: '[pTooltip]',
                    host: {},
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    Tooltip.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    Tooltip.propDecorators = {
        'text': [{ type: Input, args: ['pTooltip',] },],
        'tooltipPosition': [{ type: Input },],
        'tooltipEvent': [{ type: Input },],
        'onMouseEnter': [{ type: HostListener, args: ['mouseenter', ['$event'],] },],
        'onMouseLeave': [{ type: HostListener, args: ['mouseleave', ['$event'],] },],
        'onFocus': [{ type: HostListener, args: ['focus', ['$event'],] },],
        'onBlur': [{ type: HostListener, args: ['blur', ['$event'],] },],
    };
    return Tooltip;
}());
export var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Tooltip],
                    declarations: [Tooltip]
                },] },
    ];
    /** @nocollapse */
    TooltipModule.ctorParameters = [];
    return TooltipModule;
}());
//# sourceMappingURL=tooltip.js.map