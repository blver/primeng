import { NgModule, Component, ElementRef, Input, Renderer, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { Router } from '@angular/router';
export var Menu = (function () {
    function Menu(el, domHandler, renderer, router) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.router = router;
    }
    Menu.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.el.nativeElement.children[0];
        if (this.popup) {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.el.nativeElement);
                else
                    this.appendTo.appendChild(this.el.nativeElement);
            }
            this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
                if (!_this.preventDocumentDefault) {
                    _this.hide();
                }
                _this.preventDocumentDefault = false;
            });
        }
    };
    Menu.prototype.toggle = function (event) {
        if (this.container.offsetParent)
            this.hide();
        else
            this.show(event);
        this.preventDocumentDefault = true;
    };
    Menu.prototype.show = function (event) {
        var target = event.target;
        if (target.parentElement.nodeName == 'BUTTON') {
            target = target.parentElement;
        }
        this.container.style.display = 'block';
        this.domHandler.absolutePosition(this.container, target);
        this.domHandler.fadeIn(this.container, 250);
    };
    Menu.prototype.hide = function () {
        this.container.style.display = 'none';
    };
    Menu.prototype.itemClick = function (event, item) {
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
            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }
        if (this.popup) {
            this.hide();
        }
        if (item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    };
    Menu.prototype.ngOnDestroy = function () {
        if (this.popup) {
            this.documentClickListener();
            if (this.appendTo && this.appendTo === 'body') {
                document.body.removeChild(this.el.nativeElement);
            }
        }
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                this.unsubscribe(item);
            }
        }
    };
    Menu.prototype.hasSubMenu = function () {
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.items) {
                    return true;
                }
            }
        }
        return false;
    };
    Menu.prototype.unsubscribe = function (item) {
        if (item.eventEmitter) {
            item.eventEmitter.unsubscribe();
        }
        if (item.items) {
            for (var _i = 0, _a = item.items; _i < _a.length; _i++) {
                var childItem = _a[_i];
                this.unsubscribe(childItem);
            }
        }
    };
    Menu.decorators = [
        { type: Component, args: [{
                    selector: 'p-menu',
                    template: "\n        <div [ngClass]=\"{'ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix':true,'ui-menu-dynamic ui-shadow':popup}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\" (click)=\"preventDocumentDefault=true\">\n            <ul class=\"ui-menu-list ui-helper-reset\">\n                <template ngFor let-submenu [ngForOf]=\"model\" *ngIf=\"hasSubMenu()\">\n                    <li class=\"ui-widget-header ui-corner-all\"><h3>{{submenu.label}}</h3></li>\n                    <li *ngFor=\"let item of submenu.items\" class=\"ui-menuitem ui-widget ui-corner-all\">\n                        <a #link [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                            [ngClass]=\"{'ui-state-hover':link==hoveredItem&&!item.disabled,'ui-state-disabled':item.disabled}\"\n                            (mouseenter)=\"hoveredItem=$event.target\" (mouseleave)=\"hoveredItem=null\" (click)=\"itemClick($event, item)\">\n                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                    </li>\n                </template>\n                <template ngFor let-item [ngForOf]=\"model\" *ngIf=\"!hasSubMenu()\">\n                    <li class=\"ui-menuitem ui-widget ui-corner-all\">\n                        <a #link [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                            [ngClass]=\"{'ui-state-hover':link==hoveredItem&&!item.disabled,'ui-state-disabled':item.disabled}\"\n                            (mouseenter)=\"hoveredItem=$event.target\" (mouseleave)=\"hoveredItem=null\" (click)=\"itemClick($event, item)\">\n                            <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                    </li>\n                </template>\n            </ul>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    Menu.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
        { type: Router, },
    ];
    Menu.propDecorators = {
        'model': [{ type: Input },],
        'popup': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'appendTo': [{ type: Input },],
    };
    return Menu;
}());
export var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Menu],
                    declarations: [Menu]
                },] },
    ];
    /** @nocollapse */
    MenuModule.ctorParameters = [];
    return MenuModule;
}());
//# sourceMappingURL=menu.js.map