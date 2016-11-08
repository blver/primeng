import { NgModule, Directive, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
export var CodeHighlighter = (function () {
    function CodeHighlighter(el) {
        this.el = el;
    }
    CodeHighlighter.prototype.ngOnInit = function () {
        Prism.highlightElement(this.el.nativeElement);
    };
    CodeHighlighter.decorators = [
        { type: Directive, args: [{
                    selector: '[pCode]'
                },] },
    ];
    /** @nocollapse */
    CodeHighlighter.ctorParameters = [
        { type: ElementRef, },
    ];
    return CodeHighlighter;
}());
export var CodeHighlighterModule = (function () {
    function CodeHighlighterModule() {
    }
    CodeHighlighterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [CodeHighlighter],
                    declarations: [CodeHighlighter]
                },] },
    ];
    /** @nocollapse */
    CodeHighlighterModule.ctorParameters = [];
    return CodeHighlighterModule;
}());
//# sourceMappingURL=codehighlighter.js.map