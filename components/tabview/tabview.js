import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
export var TabPanel = (function () {
    function TabPanel() {
    }
    TabPanel.decorators = [
        { type: Component, args: [{
                    selector: 'p-tabPanel',
                    template: "\n        <div class=\"ui-tabview-panel ui-widget-content\" [style.display]=\"selected ? 'block' : 'none'\" \n            *ngIf=\"!closed\" role=\"tabpanel\" [attr.aria-hidden]=\"!selected\">\n            <ng-content></ng-content>\n        </div>\n    ",
                },] },
    ];
    /** @nocollapse */
    TabPanel.ctorParameters = [];
    TabPanel.propDecorators = {
        'header': [{ type: Input },],
        'selected': [{ type: Input },],
        'disabled': [{ type: Input },],
        'closable': [{ type: Input },],
        'headerStyle': [{ type: Input },],
        'headerStyleClass': [{ type: Input },],
        'leftIcon': [{ type: Input },],
        'rightIcon': [{ type: Input },],
    };
    return TabPanel;
}());
export var TabView = (function () {
    function TabView(el) {
        this.el = el;
        this.orientation = 'top';
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
    }
    TabView.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initTabs();
        this.tabPanels.changes.subscribe(function (_) {
            _this.initTabs();
        });
    };
    TabView.prototype.initTabs = function () {
        this.tabs = this.tabPanels.toArray();
        var selectedTab = this.findSelectedTab();
        if (!selectedTab && this.tabs.length) {
            this.tabs[0].selected = true;
        }
    };
    TabView.prototype.open = function (event, tab) {
        if (tab.disabled) {
            event.preventDefault();
            return;
        }
        if (!tab.selected) {
            var selectedTab = this.findSelectedTab();
            if (selectedTab) {
                selectedTab.selected = false;
            }
            tab.selected = true;
            this.onChange.emit({ originalEvent: event, index: this.findTabIndex(tab) });
        }
        event.preventDefault();
    };
    TabView.prototype.close = function (event, tab) {
        var _this = this;
        if (this.controlClose) {
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab),
                close: function () {
                    _this.closeTab(tab);
                } });
        }
        else {
            this.closeTab(tab);
            this.onClose.emit({
                originalEvent: event,
                index: this.findTabIndex(tab)
            });
        }
        event.stopPropagation();
    };
    TabView.prototype.closeTab = function (tab) {
        if (tab.selected) {
            tab.selected = false;
            for (var i = 0; i < this.tabs.length; i++) {
                var tabPanel = this.tabs[i];
                if (!tabPanel.closed && !tab.disabled) {
                    tabPanel.selected = true;
                    break;
                }
            }
        }
        tab.closed = true;
    };
    TabView.prototype.findSelectedTab = function () {
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].selected) {
                return this.tabs[i];
            }
        }
        return null;
    };
    TabView.prototype.findTabIndex = function (tab) {
        var index = -1;
        for (var i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] == tab) {
                index = i;
                break;
            }
        }
        return index;
    };
    TabView.prototype.getDefaultHeaderClass = function (tab) {
        var styleClass = 'ui-state-default ui-corner-' + this.orientation;
        if (tab.headerStyleClass) {
            styleClass = styleClass + " " + tab.headerStyleClass;
        }
        return styleClass;
    };
    TabView.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    TabView.decorators = [
        { type: Component, args: [{
                    selector: 'p-tabView',
                    template: "\n        <div [ngClass]=\"'ui-tabview ui-widget ui-widget-content ui-corner-all ui-tabview-' + orientation\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul class=\"ui-tabview-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all\" role=\"tablist\">\n                <template ngFor let-tab [ngForOf]=\"tabs\">\n                    <li [class]=\"getDefaultHeaderClass(tab)\" [ngStyle]=\"tab.headerStyle\" role=\"tab\"\n                        [ngClass]=\"{'ui-tabview-selected ui-state-active': tab.selected, 'ui-state-hover': tab.hoverHeader&&!tab.disabled, 'ui-state-disabled': tab.disabled}\"\n                        (mouseenter)=\"tab.hoverHeader=true\" (mouseleave)=\"tab.hoverHeader=false\" (click)=\"open($event,tab)\" *ngIf=\"!tab.closed\"\n                        [attr.aria-expanded]=\"tab.selected\" [attr.aria-selected]=\"tab.selected\">\n                        <a href=\"#\">\n                            <span class=\"ui-tabview-left-icon fa\" [ngClass]=\"tab.leftIcon\" *ngIf=\"tab.leftIcon\"></span>\n                            {{tab.header}}\n                            <span class=\"ui-tabview-right-icon fa\" [ngClass]=\"tab.rightIcon\" *ngIf=\"tab.rightIcon\"></span>\n                        </a>\n                        <span *ngIf=\"tab.closable\" class=\"ui-tabview-close fa fa-close\" (click)=\"close($event,tab)\"></span>\n                    </li>\n                </template>\n            </ul>\n            <div class=\"ui-tabview-panels\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
                },] },
    ];
    /** @nocollapse */
    TabView.ctorParameters = [
        { type: ElementRef, },
    ];
    TabView.propDecorators = {
        'orientation': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'controlClose': [{ type: Input },],
        'tabPanels': [{ type: ContentChildren, args: [TabPanel,] },],
        'onChange': [{ type: Output },],
        'onClose': [{ type: Output },],
    };
    return TabView;
}());
export var TabViewModule = (function () {
    function TabViewModule() {
    }
    TabViewModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [TabView, TabPanel],
                    declarations: [TabView, TabPanel]
                },] },
    ];
    /** @nocollapse */
    TabViewModule.ctorParameters = [];
    return TabViewModule;
}());
//# sourceMappingURL=tabview.js.map