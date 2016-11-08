import { NgModule, Component, ElementRef, Input, Output, EventEmitter, Renderer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { Router } from '@angular/router';
export var SplitButton = (function () {
    function SplitButton(el, domHandler, renderer, router) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.router = router;
        this.iconPos = 'left';
        this.onClick = new EventEmitter();
        this.menuVisible = false;
    }
    SplitButton.prototype.ngOnInit = function () {
        var _this = this;
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
            _this.menuVisible = false;
        });
    };
    SplitButton.prototype.onDefaultButtonClick = function (event) {
        this.onClick.emit(event);
    };
    SplitButton.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url || item.routerLink) {
            event.preventDefault();
        }
        if (item.command) {
            if (!item.eventEmitter) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }
            item.eventEmitter.emit(event);
        }
        this.menuVisible = false;
        if (item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    };
    SplitButton.prototype.onDropdownClick = function (event, menu, container) {
        this.menuVisible = !this.menuVisible;
        this.domHandler.relativePosition(menu, container);
        this.domHandler.fadeIn(menu, 25);
        event.stopPropagation();
    };
    SplitButton.prototype.ngOnDestroy = function () {
        this.documentClickListener();
    };
    SplitButton.decorators = [
        { type: Component, args: [{
                    selector: 'p-splitButton',
                    template: "\n        <div #container [ngClass]=\"{'ui-splitbutton ui-buttonset ui-widget':true,'ui-state-disabled':disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <button #defaultbtn type=\"button\" class=\"ui-button ui-widget ui-state-default ui-corner-left\"\n                [ngClass]=\"{'ui-button-text-only':(!icon&&label),'ui-button-icon-only':(icon&&!label),\n                'ui-button-text-icon-left':(icon&&label&&iconPos=='left'),'ui-button-text-icon-right':(icon&&label&&iconPos=='right'),\n                'ui-state-hover':hoverDefaultBtn&&!disabled,'ui-state-focus':focusDefaultBtn&&!disabled,'ui-state-active':activeDefaultBtn&&!disabled}\"\n                (mouseenter)=\"hoverDefaultBtn=true\" (mouseleave)=\"hoverDefaultBtn=false\" (focus)=\"focusDefaultBtn=true\" (blur)=\"focusDefaultBtn=false\"\n                (mousedown)=\"activeDefaultBtn=true\" (mouseup)=\"activeDefaultBtn=false\" (click)=\"onDefaultButtonClick($event)\"\n                [disabled]=\"disabled\">\n                <span [ngClass]=\"'ui-button-icon-left ui-c fa fa-fw'\" [class]=\"icon\"></span>\n                <span class=\"ui-button-text ui-c\">{{label}}</span>\n            </button>\n            <button class=\"ui-splitbutton-menubutton ui-button ui-widget ui-state-default ui-button-icon-only ui-corner-right\" type=\"button\"\n                [ngClass]=\"{'ui-state-hover':hoverDropdown&&!disabled,'ui-state-focus':focusDropdown&&!disabled,'ui-state-active':activeDropdown&&!disabled}\"\n                (mouseenter)=\"hoverDropdown=true\" (mouseleave)=\"hoverDropdown=false\" (focus)=\"focusDropdown=true\" (blur)=\"focusDropdown=false\"\n                (mousedown)=\"activeDropdown=true\" (mouseup)=\"activeDropdown=false\" (click)=\"onDropdownClick($event,menu,container)\"\n                [disabled]=\"disabled\">\n                <span class=\"ui-button-icon-left ui-c fa fa-fw fa-caret-down\"></span>\n                <span class=\"ui-button-text ui-c\">ui-button</span>\n            </button>\n            <div #menu [ngClass]=\"'ui-menu ui-menu-dynamic ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-shadow'\" [style.display]=\"menuVisible ? 'block' : 'none'\"\n                    [ngStyle]=\"menuStyle\" [class]=\"menuStyleClass\">\n                <ul class=\"ui-menu-list ui-helper-reset\">\n                    <li class=\"ui-menuitem ui-widget ui-corner-all\" role=\"menuitem\" *ngFor=\"let item of model\"\n                        (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\">\n                        <a [href]=\"item.url||'#'\" \n                        [ngClass]=\"{'ui-menuitem-link ui-corner-all':true,'ui-state-hover':(hoveredItem==item&&!item.disabled),'ui-state-disabled':item.disabled}\" \n                        (click)=\"itemClick($event,item)\">\n                            <span [ngClass]=\"'ui-menuitem-icon fa fa-fw'\" [class]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    SplitButton.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
        { type: Router, },
    ];
    SplitButton.propDecorators = {
        'model': [{ type: Input },],
        'icon': [{ type: Input },],
        'iconPos': [{ type: Input },],
        'label': [{ type: Input },],
        'onClick': [{ type: Output },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'menuStyle': [{ type: Input },],
        'menuStyleClass': [{ type: Input },],
        'disabled': [{ type: Input },],
    };
    return SplitButton;
}());
export var SplitButtonModule = (function () {
    function SplitButtonModule() {
    }
    SplitButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [SplitButton],
                    declarations: [SplitButton]
                },] },
    ];
    /** @nocollapse */
    SplitButtonModule.ctorParameters = [];
    return SplitButtonModule;
}());
//# sourceMappingURL=splitbutton.js.map