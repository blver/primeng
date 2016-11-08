import { NgModule, Component, ElementRef, Input, IterableDiffers } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
export var Growl = (function () {
    function Growl(el, domHandler, differs) {
        this.el = el;
        this.domHandler = domHandler;
        this.sticky = false;
        this.life = 3000;
        this.differ = differs.find([]).create(null);
        this.zIndex = DomHandler.zindex;
    }
    Growl.prototype.ngAfterViewInit = function () {
        this.container = this.el.nativeElement.children[0];
    };
    Growl.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.value);
        if (changes) {
            if (this.stopDoCheckPropagation) {
                this.stopDoCheckPropagation = false;
            }
            else if (this.value && this.value.length) {
                this.zIndex = ++DomHandler.zindex;
                this.domHandler.fadeIn(this.container, 250);
                if (!this.sticky) {
                    if (this.timeout) {
                        clearTimeout(this.timeout);
                    }
                    this.timeout = setTimeout(function () {
                        _this.removeAll();
                    }, this.life);
                }
            }
        }
    };
    Growl.prototype.remove = function (msg, msgel) {
        var _this = this;
        this.stopDoCheckPropagation = true;
        this.domHandler.fadeOut(msgel, 250);
        setTimeout(function () {
            _this.value.splice(_this.findMessageIndex(msg), 1);
        }, 250);
    };
    Growl.prototype.removeAll = function () {
        var _this = this;
        if (this.value && this.value.length) {
            this.stopDoCheckPropagation = true;
            this.domHandler.fadeOut(this.container, 250);
            setTimeout(function () {
                _this.value.splice(0, _this.value.length);
            }, 250);
        }
    };
    Growl.prototype.findMessageIndex = function (msg) {
        var index = -1;
        if (this.value && this.value.length) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.value[i] == msg) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Growl.prototype.ngOnDestroy = function () {
        if (!this.sticky) {
            clearTimeout(this.timeout);
        }
    };
    Growl.decorators = [
        { type: Component, args: [{
                    selector: 'p-growl',
                    template: "\n        <div class=\"ui-growl ui-widget\" [style.zIndex]=\"zIndex\">\n            <div #msgel *ngFor=\"let msg of value\" class=\"ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow\" aria-live=\"polite\"\n                [ngClass]=\"{'ui-growl-message-info':msg.severity == 'info','ui-growl-message-warn':msg.severity == 'warn',\n                    'ui-growl-message-error':msg.severity == 'error','ui-growl-message-success':msg.severity == 'success'}\">\n                <div class=\"ui-growl-item\">\n                     <div class=\"ui-growl-icon-close fa fa-close\" (click)=\"remove(msg,msgel)\"></div>\n                     <span class=\"ui-growl-image fa fa-2x ui-growl-image-info\"\n                        [ngClass]=\"{'fa-info-circle':msg.severity == 'info','fa-warning':msg.severity == 'warn',\n                                'fa-close':msg.severity == 'error','fa-check':msg.severity == 'success'}\"></span>\n                     <div class=\"ui-growl-message\">\n                        <span class=\"ui-growl-title\">{{msg.summary}}</span>\n                        <p>{{msg.detail}}</p>\n                     </div>\n                     <div style=\"clear: both;\"></div>\n                </div>\n            </div>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    Growl.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: IterableDiffers, },
    ];
    Growl.propDecorators = {
        'sticky': [{ type: Input },],
        'life': [{ type: Input },],
        'value': [{ type: Input },],
    };
    return Growl;
}());
export var GrowlModule = (function () {
    function GrowlModule() {
    }
    GrowlModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Growl],
                    declarations: [Growl]
                },] },
    ];
    /** @nocollapse */
    GrowlModule.ctorParameters = [];
    return GrowlModule;
}());
//# sourceMappingURL=growl.js.map