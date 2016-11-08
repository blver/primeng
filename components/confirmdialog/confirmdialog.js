import { NgModule, Component, ElementRef, Input, EventEmitter, Renderer, ContentChild, trigger, state, style, transition, animate } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { Footer } from '../common/shared';
import { ButtonModule } from '../button/button';
import { ConfirmationService } from '../common/api';
export var ConfirmDialog = (function () {
    function ConfirmDialog(el, domHandler, renderer, confirmationService) {
        var _this = this;
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.confirmationService = confirmationService;
        this.acceptIcon = 'fa-check';
        this.acceptLabel = 'Yes';
        this.acceptVisible = true;
        this.rejectIcon = 'fa-close';
        this.rejectLabel = 'No';
        this.rejectVisible = true;
        this.closeOnEscape = true;
        this.closable = true;
        this.responsive = true;
        this.subscription = confirmationService.requireConfirmation$.subscribe(function (confirmation) {
            _this.confirmation = confirmation;
            _this.message = _this.confirmation.message || _this.message;
            _this.icon = _this.confirmation.icon || _this.icon;
            _this.header = _this.confirmation.header || _this.header;
            _this.rejectVisible = _this.confirmation.rejectVisible === false ? false : _this.rejectVisible;
            _this.acceptVisible = _this.confirmation.acceptVisible === false ? false : _this.acceptVisible;
            if (_this.confirmation.accept) {
                _this.confirmation.acceptEvent = new EventEmitter();
                _this.confirmation.acceptEvent.subscribe(_this.confirmation.accept);
            }
            if (_this.confirmation.reject) {
                _this.confirmation.rejectEvent = new EventEmitter();
                _this.confirmation.rejectEvent.subscribe(_this.confirmation.reject);
            }
            _this.visible = true;
        });
    }
    Object.defineProperty(ConfirmDialog.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (val) {
            this._visible = val;
            if (this._visible) {
                if (!this.positionInitialized) {
                    this.center();
                    this.positionInitialized = true;
                }
                this.el.nativeElement.children[0].style.zIndex = ++DomHandler.zindex;
            }
            if (this._visible)
                this.enableModality();
            else
                this.disableModality();
        },
        enumerable: true,
        configurable: true
    });
    ConfirmDialog.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.contentContainer = this.domHandler.findSingle(this.el.nativeElement, '.ui-dialog-content');
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
    ConfirmDialog.prototype.center = function () {
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
    ConfirmDialog.prototype.enableModality = function () {
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = this.el.nativeElement.children[0].style.zIndex - 1;
            this.domHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-dialog-mask');
            document.body.appendChild(this.mask);
        }
    };
    ConfirmDialog.prototype.disableModality = function () {
        if (this.mask) {
            document.body.removeChild(this.mask);
            this.mask = null;
        }
    };
    ConfirmDialog.prototype.hide = function (event) {
        this.visible = false;
        if (event) {
            event.preventDefault();
        }
    };
    ConfirmDialog.prototype.moveOnTop = function () {
        this.el.nativeElement.children[0].style.zIndex = ++DomHandler.zindex;
    };
    ConfirmDialog.prototype.ngOnDestroy = function () {
        this.disableModality();
        if (this.responsive) {
            this.documentResponsiveListener();
        }
        if (this.closeOnEscape && this.closable) {
            this.documentEscapeListener();
        }
        if (this.appendTo && this.appendTo === 'body') {
            document.body.removeChild(this.el.nativeElement);
        }
        this.subscription.unsubscribe();
    };
    ConfirmDialog.prototype.accept = function () {
        if (this.confirmation.acceptEvent) {
            this.confirmation.acceptEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    ConfirmDialog.prototype.reject = function () {
        if (this.confirmation.rejectEvent) {
            this.confirmation.rejectEvent.emit();
        }
        this.hide();
        this.confirmation = null;
    };
    ConfirmDialog.decorators = [
        { type: Component, args: [{
                    selector: 'p-confirmDialog',
                    template: "\n        <div [ngClass]=\"{'ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true,'ui-dialog-rtl':rtl}\" \n            [style.display]=\"visible ? 'block' : 'none'\" [style.width.px]=\"width\" [style.height.px]=\"height\" (mousedown)=\"moveOnTop()\" [@dialogState]=\"visible ? 'visible' : 'hidden'\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\">\n                <span class=\"ui-dialog-title\" *ngIf=\"header\">{{header}}</span>\n                <a [ngClass]=\"{'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all':true,'ui-state-hover':hoverCloseIcon}\" href=\"#\" role=\"button\" *ngIf=\"closable\" \n                    (click)=\"hide($event)\" (mouseenter)=\"hoverCloseIcon=true\" (mouseleave)=\"hoverCloseIcon=false\">\n                    <span class=\"fa fa-fw fa-close\"></span>\n                </a>\n            </div>\n            <div class=\"ui-dialog-content ui-widget-content\">\n                <i [class]=\"icon\"></i>\n                <span class=\"ui-confirmdialog-message\">{{message}}</span>\n            </div>\n            <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\" *ngIf=\"footer\">\n                <ng-content select=\"footer\"></ng-content>\n            </div>\n            <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\" *ngIf=\"!footer\">\n                <button type=\"button\" pButton [icon]=\"rejectIcon\" [label]=\"rejectLabel\" (click)=\"reject()\" *ngIf=\"rejectVisible\"></button>\n                <button type=\"button\" pButton [icon]=\"acceptIcon\" [label]=\"acceptLabel\" (click)=\"accept()\" *ngIf=\"acceptVisible\"></button>\n            </div>\n        </div>\n    ",
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
    ConfirmDialog.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
        { type: ConfirmationService, },
    ];
    ConfirmDialog.propDecorators = {
        'header': [{ type: Input },],
        'icon': [{ type: Input },],
        'message': [{ type: Input },],
        'acceptIcon': [{ type: Input },],
        'acceptLabel': [{ type: Input },],
        'acceptVisible': [{ type: Input },],
        'rejectIcon': [{ type: Input },],
        'rejectLabel': [{ type: Input },],
        'rejectVisible': [{ type: Input },],
        'width': [{ type: Input },],
        'height': [{ type: Input },],
        'closeOnEscape': [{ type: Input },],
        'rtl': [{ type: Input },],
        'closable': [{ type: Input },],
        'responsive': [{ type: Input },],
        'appendTo': [{ type: Input },],
        'footer': [{ type: ContentChild, args: [Footer,] },],
        'visible': [{ type: Input },],
    };
    return ConfirmDialog;
}());
export var ConfirmDialogModule = (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ButtonModule],
                    exports: [ConfirmDialog, ButtonModule],
                    declarations: [ConfirmDialog]
                },] },
    ];
    /** @nocollapse */
    ConfirmDialogModule.ctorParameters = [];
    return ConfirmDialogModule;
}());
//# sourceMappingURL=confirmdialog.js.map