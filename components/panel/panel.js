import { NgModule, Component, Input, Output, EventEmitter, trigger, state, transition, style, animate, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
export var Panel = (function () {
    function Panel(el) {
        this.el = el;
        this.collapsed = false;
        this.collapsedChange = new EventEmitter();
        this.onBeforeToggle = new EventEmitter();
        this.onAfterToggle = new EventEmitter();
    }
    Panel.prototype.toggle = function (event) {
        var _this = this;
        this.animating = true;
        this.onBeforeToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        if (this.toggleable) {
            if (this.collapsed)
                this.expand(event);
            else
                this.collapse(event);
        }
        this.onAfterToggle.emit({ originalEvent: event, collapsed: this.collapsed });
        //TODO: Use onDone of animate callback instead with RC6
        setTimeout(function () {
            _this.animating = false;
        }, 400);
        event.preventDefault();
    };
    Panel.prototype.expand = function (event) {
        this.collapsed = false;
        this.collapsedChange.emit(this.collapsed);
    };
    Panel.prototype.collapse = function (event) {
        this.collapsed = true;
        this.collapsedChange.emit(this.collapsed);
    };
    Panel.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Panel.decorators = [
        { type: Component, args: [{
                    selector: 'p-panel',
                    template: "\n        <div [ngClass]=\"'ui-panel ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-panel-titlebar ui-widget-header ui-helper-clearfix ui-corner-all\">\n                <span class=\"ui-panel-title\" *ngIf=\"header\">{{header}}</span>\n                <ng-content select=\"header\"></ng-content>\n                <a *ngIf=\"toggleable\" class=\"ui-panel-titlebar-icon ui-panel-titlebar-toggler ui-corner-all ui-state-default\" href=\"#\"\n                    [ngClass]=\"{'ui-state-hover':hoverToggler}\" (mouseenter)=\"hoverToggler=true\" (mouseleave)=\"hoverToggler=false\" (click)=\"toggle($event)\">\n                    <span class=\"fa fa-fw\" [ngClass]=\"{'fa-minus': !collapsed,'fa-plus':collapsed}\"></span>\n                </a>\n            </div>\n            <div class=\"ui-panel-content-wrapper\" [@panelContent]=\"collapsed ? 'hidden' : 'visible'\" \n                [ngClass]=\"{'ui-panel-content-wrapper-overflown': collapsed||animating}\">\n                <div class=\"ui-panel-content ui-widget-content\">\n                    <ng-content></ng-content>\n                </div>\n            </div>\n        </div>\n    ",
                    animations: [
                        trigger('panelContent', [
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
    Panel.ctorParameters = [
        { type: ElementRef, },
    ];
    Panel.propDecorators = {
        'toggleable': [{ type: Input },],
        'header': [{ type: Input },],
        'collapsed': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'collapsedChange': [{ type: Output },],
        'onBeforeToggle': [{ type: Output },],
        'onAfterToggle': [{ type: Output },],
    };
    return Panel;
}());
export var PanelModule = (function () {
    function PanelModule() {
    }
    PanelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Panel],
                    declarations: [Panel]
                },] },
    ];
    /** @nocollapse */
    PanelModule.ctorParameters = [];
    return PanelModule;
}());
//# sourceMappingURL=panel.js.map