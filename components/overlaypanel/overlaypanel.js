import { NgModule, Component, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
export var OverlayPanel = (function () {
    function OverlayPanel(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.dismissable = true;
        this.onBeforeShow = new EventEmitter();
        this.onAfterShow = new EventEmitter();
        this.onBeforeHide = new EventEmitter();
        this.onAfterHide = new EventEmitter();
        this.visible = false;
    }
    OverlayPanel.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissable) {
            this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
                if (!_this.selfClick && !_this.targetEvent) {
                    _this.hide();
                }
                _this.selfClick = false;
                _this.targetEvent = false;
            });
        }
    };
    OverlayPanel.prototype.ngAfterViewInit = function () {
        this.container = this.el.nativeElement.children[0];
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                this.appendTo.appendChild(this.container);
        }
    };
    OverlayPanel.prototype.toggle = function (event, target) {
        var currentTarget = (target || event.currentTarget || event.target);
        if (!this.target || this.target == currentTarget) {
            if (this.visible)
                this.hide();
            else
                this.show(event, target);
        }
        else {
            this.show(event, target);
        }
        if (this.dismissable) {
            this.targetEvent = true;
        }
        this.target = currentTarget;
    };
    OverlayPanel.prototype.show = function (event, target) {
        if (this.dismissable) {
            this.targetEvent = true;
        }
        this.onBeforeShow.emit(null);
        var elementTarget = target || event.currentTarget || event.target;
        this.container.style.zIndex = ++DomHandler.zindex;
        if (this.visible) {
            this.domHandler.absolutePosition(this.container, elementTarget);
        }
        else {
            this.visible = true;
            this.domHandler.absolutePosition(this.container, elementTarget);
            this.domHandler.fadeIn(this.container, 250);
        }
        this.onAfterShow.emit(null);
    };
    OverlayPanel.prototype.hide = function () {
        if (this.visible) {
            this.onBeforeHide.emit(null);
            this.visible = false;
            this.onAfterHide.emit(null);
        }
    };
    OverlayPanel.prototype.onPanelClick = function () {
        if (this.dismissable) {
            this.selfClick = true;
        }
    };
    OverlayPanel.prototype.onCloseClick = function (event) {
        this.hide();
        if (this.dismissable) {
            this.selfClick = true;
        }
        event.preventDefault();
    };
    OverlayPanel.prototype.ngOnDestroy = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
        this.target = null;
    };
    OverlayPanel.decorators = [
        { type: Component, args: [{
                    selector: 'p-overlayPanel',
                    template: "\n        <div [ngClass]=\"'ui-overlaypanel ui-widget ui-widget-content ui-corner-all ui-shadow'\" [ngStyle]=\"style\" [class]=\"styleClass\"\n            [style.display]=\"visible ? 'block' : 'none'\" (click)=\"onPanelClick()\">\n            <div class=\"ui-overlaypanel-content\">\n                <ng-content></ng-content>\n            </div>\n            <a href=\"#\" *ngIf=\"showCloseIcon\" class=\"ui-overlaypanel-close ui-state-default\" [ngClass]=\"{'ui-state-hover':hoverCloseIcon}\"\n                (mouseenter)=\"hoverCloseIcon=true\" (mouseleave)=\"hoverCloseIcon=false\" (click)=\"onCloseClick($event)\"><span class=\"fa fa-fw fa-close\"></span></a>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    OverlayPanel.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
    ];
    OverlayPanel.propDecorators = {
        'dismissable': [{ type: Input },],
        'showCloseIcon': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'appendTo': [{ type: Input },],
        'onBeforeShow': [{ type: Output },],
        'onAfterShow': [{ type: Output },],
        'onBeforeHide': [{ type: Output },],
        'onAfterHide': [{ type: Output },],
    };
    return OverlayPanel;
}());
export var OverlayPanelModule = (function () {
    function OverlayPanelModule() {
    }
    OverlayPanelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [OverlayPanel],
                    declarations: [OverlayPanel]
                },] },
    ];
    /** @nocollapse */
    OverlayPanelModule.ctorParameters = [];
    return OverlayPanelModule;
}());
//# sourceMappingURL=overlaypanel.js.map