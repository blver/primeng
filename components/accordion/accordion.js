import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChild, trigger, state, transition, style, animate } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../common/shared';
export var Accordion = (function () {
    function Accordion(el) {
        this.el = el;
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.tabs = [];
    }
    Accordion.prototype.addTab = function (tab) {
        this.tabs.push(tab);
    };
    Accordion.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Accordion.decorators = [
        { type: Component, args: [{
                    selector: 'p-accordion',
                    template: "\n        <div [ngClass]=\"'ui-accordion ui-widget ui-helper-reset'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ng-content></ng-content>\n        </div>\n    ",
                },] },
    ];
    /** @nocollapse */
    Accordion.ctorParameters = [
        { type: ElementRef, },
    ];
    Accordion.propDecorators = {
        'multiple': [{ type: Input },],
        'onClose': [{ type: Output },],
        'onOpen': [{ type: Output },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
    };
    return Accordion;
}());
export var AccordionTab = (function () {
    function AccordionTab(accordion) {
        this.accordion = accordion;
        this.selectedChange = new EventEmitter();
        this.accordion.addTab(this);
    }
    AccordionTab.prototype.toggle = function (event) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.animating = true;
        var index = this.findTabIndex();
        if (this.selected) {
            this.selected = false;
            this.accordion.onClose.emit({ originalEvent: event, index: index });
        }
        else {
            if (!this.accordion.multiple) {
                for (var i = 0; i < this.accordion.tabs.length; i++) {
                    this.accordion.tabs[i].selected = false;
                    this.accordion.tabs[i].selectedChange.emit(false);
                }
            }
            this.selected = true;
            this.accordion.onOpen.emit({ originalEvent: event, index: index });
        }
        this.selectedChange.emit(this.selected);
        //TODO: Use onDone of animate callback instead with RC6
        setTimeout(function () {
            _this.animating = false;
        }, 400);
        event.preventDefault();
    };
    AccordionTab.prototype.findTabIndex = function () {
        var index = -1;
        for (var i = 0; i < this.accordion.tabs.length; i++) {
            if (this.accordion.tabs[i] == this) {
                index = i;
                break;
            }
        }
        return index;
    };
    AccordionTab.decorators = [
        { type: Component, args: [{
                    selector: 'p-accordionTab',
                    template: "\n        <div class=\"ui-accordion-header ui-state-default ui-corner-all\" [ngClass]=\"{'ui-state-active': selected,'ui-state-hover':hover&&!disabled,'ui-state-disabled':disabled}\"\n            (mouseenter)=\"hover = true\" (mouseleave)=\"hover=false\" (click)=\"toggle($event)\">\n            <span class=\"fa fa-fw\" [ngClass]=\"{'fa-caret-down': selected, 'fa-caret-right': !selected}\"></span>\n            <a href=\"#\" *ngIf=\"!headerFacet\" role=\"tab\" [attr.aria-expanded]=\"selected\" [attr.aria-selected]=\"selected\">{{header}}</a>\n            <a href=\"#\" *ngIf=\"headerFacet\" role=\"tab\" [attr.aria-expanded]=\"selected\" [attr.aria-selected]=\"selected\">\n                <ng-content select=\"header\"></ng-content>\n            </a>\n        </div>\n        <div class=\"ui-accordion-content-wrapper\" [@tabContent]=\"selected ? 'visible' : 'hidden'\" \n            [ngClass]=\"{'ui-accordion-content-wrapper-overflown': !selected||animating}\" role=\"tabpanel\" [attr.aria-hidden]=\"!selected\">\n            <div class=\"ui-accordion-content ui-widget-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
                    animations: [
                        trigger('tabContent', [
                            state('hidden', style({
                                height: '0px'
                            })),
                            state('visible', style({
                                height: '*'
                            })),
                            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    AccordionTab.ctorParameters = [
        { type: Accordion, },
    ];
    AccordionTab.propDecorators = {
        'header': [{ type: Input },],
        'selected': [{ type: Input },],
        'disabled': [{ type: Input },],
        'selectedChange': [{ type: Output },],
        'headerFacet': [{ type: ContentChild, args: [Header,] },],
    };
    return AccordionTab;
}());
export var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Accordion, AccordionTab],
                    declarations: [Accordion, AccordionTab]
                },] },
    ];
    /** @nocollapse */
    AccordionModule.ctorParameters = [];
    return AccordionModule;
}());
//# sourceMappingURL=accordion.js.map