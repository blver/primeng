import { NgModule, Component, ElementRef, Input, Output, EventEmitter, Renderer, ContentChild, trigger, state, style, transition, animate } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { Header, SharedModule } from '../common/shared';
export var Dialog = (function () {
    function Dialog(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.draggable = true;
        this.resizable = true;
        this.minWidth = 150;
        this.minHeight = 150;
        this.closeOnEscape = true;
        this.closable = true;
        this.onBeforeShow = new EventEmitter();
        this.onAfterShow = new EventEmitter();
        this.onBeforeHide = new EventEmitter();
        this.onAfterHide = new EventEmitter();
        this.visibleChange = new EventEmitter();
    }
    Object.defineProperty(Dialog.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (val) {
            this._visible = val;
            if (this._visible) {
                this.onBeforeShow.emit({});
                if (!this.positionInitialized) {
                    this.center();
                    this.positionInitialized = true;
                }
                this.el.nativeElement.children[0].style.zIndex = ++DomHandler.zindex;
                this.shown = true;
            }
            if (this.modal) {
                if (this._visible)
                    this.enableModality();
                else
                    this.disableModality();
            }
        },
        enumerable: true,
        configurable: true
    });
    Dialog.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.contentContainer = this.domHandler.findSingle(this.el.nativeElement, '.ui-dialog-content');
        if (this.draggable) {
            this.documentDragListener = this.renderer.listenGlobal('body', 'mousemove', function (event) {
                _this.onDrag(event);
            });
        }
        if (this.resizable) {
            this.documentResizeListener = this.renderer.listenGlobal('body', 'mousemove', function (event) {
                _this.onResize(event);
            });
            this.documentResizeEndListener = this.renderer.listenGlobal('body', 'mouseup', function (event) {
                if (_this.resizing) {
                    _this.resizing = false;
                }
            });
        }
        if (this.responsive) {
            this.documentResponsiveListener = this.renderer.listenGlobal('window', 'resize', function (event) {
                _this.center();
            });
        }
        if (this.closeOnEscape && this.closable) {
            this.documentEscapeListener = this.renderer.listenGlobal('body', 'keydown', function (event) {
                if (event.which == 27) {
                    if (_this.el.nativeElement.children[0].style.zIndex == DomHandler.zindex) {
                        _this.hide(event);
                    }
                }
            });
        }
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.el.nativeElement);
            else
                this.appendTo.appendChild(this.el.nativeElement);
        }
    };
    Dialog.prototype.ngAfterViewChecked = function () {
        if (this.shown) {
            this.onAfterShow.emit({});
            this.shown = false;
        }
    };
    Dialog.prototype.center = function () {
        var container = this.el.nativeElement.children[0];
        var elementWidth = this.domHandler.getOuterWidth(container);
        var elementHeight = this.domHandler.getOuterHeight(container);
        if (elementWidth == 0 && elementHeight == 0) {
            container.style.visibility = 'hidden';
            container.style.display = 'block';
            elementWidth = this.domHandler.getOuterWidth(container);
            elementHeight = this.domHandler.getOuterHeight(container);
            container.style.display = 'none';
            container.style.visibility = 'visible';
        }
        var viewport = this.domHandler.getViewport();
        var x = (viewport.width - elementWidth) / 2;
        var y = (viewport.height - elementHeight) / 2;
        container.style.left = x + 'px';
        container.style.top = y + 'px';
    };
    Dialog.prototype.enableModality = function () {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = this.el.nativeElement.children[0].style.zIndex - 1;
            this.domHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
            document.body.appendChild(this.mask);
        }
    };
    Dialog.prototype.disableModality = function () {
        if (this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
        }
    };
    Dialog.prototype.hide = function (event) {
        this.onBeforeHide.emit(event);
        this.visibleChange.emit(false);
        this.onAfterHide.emit(event);
        event.preventDefault();
    };
    Dialog.prototype.moveOnTop = function () {
        this.el.nativeElement.children[0].style.zIndex = ++DomHandler.zindex;
    };
    Dialog.prototype.initDrag = function (event) {
        if (this.draggable) {
            this.dragging = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    };
    Dialog.prototype.onDrag = function (event) {
        if (this.dragging) {
            var container = this.el.nativeElement.children[0];
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var leftPos = parseInt(container.style.left);
            var topPos = parseInt(container.style.top);
            container.style.left = leftPos + deltaX + 'px';
            container.style.top = topPos + deltaY + 'px';
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    };
    Dialog.prototype.endDrag = function (event) {
        if (this.draggable) {
            this.dragging = false;
        }
    };
    Dialog.prototype.initResize = function (event) {
        if (this.resizable) {
            this.resizing = true;
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    };
    Dialog.prototype.onResize = function (event) {
        if (this.resizing) {
            var container = this.el.nativeElement.children[0];
            var deltaX = event.pageX - this.lastPageX;
            var deltaY = event.pageY - this.lastPageY;
            var containerWidth = this.domHandler.getOuterWidth(container);
            var contentHeight = this.domHandler.getHeight(this.contentContainer);
            var newWidth = containerWidth + deltaX;
            var newHeight = contentHeight + deltaY;
            if (newWidth > this.minWidth)
                container.style.width = newWidth + 'px';
            if (newHeight > this.minHeight)
                this.contentContainer.style.height = newHeight + 'px';
            this.lastPageX = event.pageX;
            this.lastPageY = event.pageY;
        }
    };
    Dialog.prototype.ngOnDestroy = function () {
        this.disableModality();
        if (this.documentDragListener) {
            this.documentDragListener();
        }
        if (this.resizable) {
            this.documentResizeListener();
            this.documentResizeEndListener();
        }
        if (this.responsive) {
            this.documentResponsiveListener();
        }
        if (this.closeOnEscape && this.closable) {
            this.documentEscapeListener();
        }
        if (this.appendTo && this.appendTo === 'body') {
            document.body.removeChild(this.el.nativeElement);
        }
    };
    Dialog.decorators = [
        { type: Component, args: [{
                    selector: 'p-dialog',
                    template: "\n        <div [ngClass]=\"{'ui-dialog ui-widget ui-widget-content ui-corner-all ui-shadow':true,'ui-dialog-rtl':rtl,'ui-dialog-draggable':draggable}\" \n            [style.display]=\"visible ? 'block' : 'none'\" [style.width.px]=\"width\" [style.height.px]=\"height\" (mousedown)=\"moveOnTop()\" [@dialogState]=\"visible ? 'visible' : 'hidden'\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\"\n                (mousedown)=\"initDrag($event)\" (mouseup)=\"endDrag($event)\">\n                <span class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                <span class=\"ui-dialog-title\" *ngIf=\"headerFacet\">\n                    <ng-content select=\"header\"></ng-content>\n                </span>\n                <a [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true,'ui-state-hover':hoverCloseIcon}\" href=\"#\" role=\"button\" *ngIf=\"closable\" \n                    (click)=\"hide($event)\" (mouseenter)=\"hoverCloseIcon=true\" (mouseleave)=\"hoverCloseIcon=false\">\n                    <span class=\"fa fa-fw fa-close\"></span>\n                </a>\n            </div>\n            <div class=\"ui-dialog-content ui-widget-content\" [style.height.px]=\"contentHeight\">\n                <ng-content></ng-content>\n            </div>\n            <ng-content select=\"footer\"></ng-content>\n            <div *ngIf=\"resizable\" class=\"ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se\" style=\"z-index: 90;\"\n                (mousedown)=\"initResize($event)\"></div>\n        </div>\n    ",
                    animations: [
                        trigger('dialogState', [
                            state('hidden', style({
                                opacity: 0
                            })),
                            state('visible', style({
                                opacity: 1
                            })),
                            transition('visible => hidden', animate('400ms ease-in')),
                            transition('hidden => visible', animate('400ms ease-out'))
                        ])
                    ],
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    Dialog.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
    ];
    Dialog.propDecorators = {
        'header': [{ type: Input },],
        'draggable': [{ type: Input },],
        'resizable': [{ type: Input },],
        'minWidth': [{ type: Input },],
        'minHeight': [{ type: Input },],
        'width': [{ type: Input },],
        'height': [{ type: Input },],
        'contentHeight': [{ type: Input },],
        'modal': [{ type: Input },],
        'showEffect': [{ type: Input },],
        'closeOnEscape': [{ type: Input },],
        'rtl': [{ type: Input },],
        'closable': [{ type: Input },],
        'responsive': [{ type: Input },],
        'appendTo': [{ type: Input },],
        'headerFacet': [{ type: ContentChild, args: [Header,] },],
        'onBeforeShow': [{ type: Output },],
        'onAfterShow': [{ type: Output },],
        'onBeforeHide': [{ type: Output },],
        'onAfterHide': [{ type: Output },],
        'visibleChange': [{ type: Output },],
        'visible': [{ type: Input },],
    };
    return Dialog;
}());
export var DialogModule = (function () {
    function DialogModule() {
    }
    DialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Dialog, SharedModule],
                    declarations: [Dialog]
                },] },
    ];
    /** @nocollapse */
    DialogModule.ctorParameters = [];
    return DialogModule;
}());
//# sourceMappingURL=dialog.js.map