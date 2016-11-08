import { NgModule, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
export var Toolbar = (function () {
    function Toolbar() {
    }
    Toolbar.decorators = [
        { type: Component, args: [{
                    selector: 'p-toolbar',
                    template: "\n        <div [ngClass]=\"'ui-toolbar ui-widget ui-widget-header ui-corner-all ui-helper-clearfix'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ng-content></ng-content>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Toolbar.ctorParameters = [];
    Toolbar.propDecorators = {
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
    };
    return Toolbar;
}());
export var ToolbarModule = (function () {
    function ToolbarModule() {
    }
    ToolbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Toolbar],
                    declarations: [Toolbar]
                },] },
    ];
    /** @nocollapse */
    ToolbarModule.ctorParameters = [];
    return ToolbarModule;
}());
//# sourceMappingURL=toolbar.js.map