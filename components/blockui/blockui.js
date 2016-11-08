import { NgModule, Component, Input, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
export var BlockUI = (function () {
    function BlockUI(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
    }
    Object.defineProperty(BlockUI.prototype, "blocked", {
        get: function () {
            return this._blocked;
        },
        set: function (val) {
            this._blocked = val;
            if (this._mask) {
                if (this._blocked)
                    this.block();
                else
                    this.unblock();
            }
        },
        enumerable: true,
        configurable: true
    });
    BlockUI.prototype.ngAfterViewInit = function () {
        this._mask = this.el.nativeElement.children[0];
        if (this.target && !this.target.getBlockableElement) {
            throw 'Target of BlockUI must implement BlockableUI interface';
        }
    };
    BlockUI.prototype.block = function () {
        if (this.target) {
            this.target.getBlockableElement().appendChild(this._mask);
            this.target.style.position = 'relative';
        }
        else {
            document.body.appendChild(this._mask);
        }
        this._mask.style.zIndex = String(++DomHandler.zindex);
    };
    BlockUI.prototype.unblock = function () {
        this.el.nativeElement.appendChild(this._mask);
    };
    BlockUI.prototype.ngOnDestroy = function () {
    };
    BlockUI.decorators = [
        { type: Component, args: [{
                    selector: 'p-blockUI',
                    template: "\n        <div class=\"ui-blockui ui-widget-overlay\" [ngStyle]=\"{display: blocked ? 'block' : 'none'}\"></div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    BlockUI.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    BlockUI.propDecorators = {
        'target': [{ type: Input },],
        'blocked': [{ type: Input },],
    };
    return BlockUI;
}());
export var BlockUIModule = (function () {
    function BlockUIModule() {
    }
    BlockUIModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [BlockUI],
                    declarations: [BlockUI]
                },] },
    ];
    /** @nocollapse */
    BlockUIModule.ctorParameters = [];
    return BlockUIModule;
}());
//# sourceMappingURL=blockui.js.map