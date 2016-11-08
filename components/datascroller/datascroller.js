import { NgModule, Component, ElementRef, Input, Output, Renderer, EventEmitter, ContentChild, IterableDiffers, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../common/shared';
import { Footer } from '../common/shared';
import { SharedModule } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
export var DataScroller = (function () {
    function DataScroller(el, differs, renderer, domHandler) {
        this.el = el;
        this.renderer = renderer;
        this.domHandler = domHandler;
        this.onLazyLoad = new EventEmitter();
        this.buffer = 0.9;
        this.dataToRender = [];
        this.first = 0;
        this.differ = differs.find([]).create(null);
    }
    DataScroller.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.lazy) {
            this.load();
        }
        if (this.loader) {
            this.scrollFunction = this.renderer.listen(this.loader, 'click', function () {
                _this.load();
            });
        }
        else {
            this.bindScrollListener();
        }
    };
    DataScroller.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.value);
        if (changes) {
            if (this.lazy)
                this.dataToRender = this.value;
            else
                this.load();
        }
    };
    DataScroller.prototype.load = function () {
        if (this.lazy) {
            this.onLazyLoad.emit({
                first: this.first,
                rows: this.rows
            });
        }
        else {
            for (var i = this.first; i < (this.first + this.rows); i++) {
                if (i >= this.value.length) {
                    break;
                }
                this.dataToRender.push(this.value[i]);
            }
        }
        this.first = this.first + this.rows;
    };
    DataScroller.prototype.reset = function () {
        this.first = 0;
        this.dataToRender = [];
        this.load();
    };
    DataScroller.prototype.isEmpty = function () {
        return !this.dataToRender || (this.dataToRender.length == 0);
    };
    DataScroller.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.rows
        };
    };
    DataScroller.prototype.bindScrollListener = function () {
        var _this = this;
        if (this.inline) {
            this.contentElement = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-datascroller-content');
            this.scrollFunction = this.renderer.listen(this.contentElement, 'scroll', function () {
                var scrollTop = _this.contentElement.scrollTop;
                var scrollHeight = _this.contentElement.scrollHeight;
                var viewportHeight = _this.contentElement.clientHeight;
                if ((scrollTop >= ((scrollHeight * _this.buffer) - (viewportHeight)))) {
                    _this.load();
                }
            });
        }
        else {
            this.scrollFunction = this.renderer.listenGlobal('window', 'scroll', function () {
                var docBody = document.body;
                var docElement = document.documentElement;
                var scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
                var winHeight = docElement.clientHeight;
                var docHeight = Math.max(docBody.scrollHeight, docBody.offsetHeight, winHeight, docElement.scrollHeight, docElement.offsetHeight);
                if (scrollTop >= ((docHeight * _this.buffer) - winHeight)) {
                    _this.load();
                }
            });
        }
    };
    DataScroller.prototype.ngOnDestroy = function () {
        //unbind
        if (this.scrollFunction) {
            this.scrollFunction();
            this.contentElement = null;
        }
    };
    DataScroller.decorators = [
        { type: Component, args: [{
                    selector: 'p-dataScroller',
                    template: "\n    <div [ngClass]=\"{'ui-datascroller ui-widget': true, 'ui-datascroller-inline': inline}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n        <div class=\"ui-datascroller-header ui-widget-header ui-corner-top\" *ngIf=\"header\">\n            <ng-content select=\"header\"></ng-content>\n        </div>\n        <div class=\"ui-datascroller-content ui-widget-content\" [ngStyle]=\"{'max-height': scrollHeight}\">\n            <ul class=\"ui-datascroller-list\">\n                <li *ngFor=\"let item of dataToRender\">\n                    <template [pTemplateWrapper]=\"itemTemplate\" [item]=\"item\"></template>\n                </li>\n            </ul>\n        </div>\n        <div class=\"ui-datascroller-footer ui-widget-header ui-corner-bottom\" *ngIf=\"footer\">\n            <ng-content select=\"footer\"></ng-content>\n        </div>\n    </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    DataScroller.ctorParameters = [
        { type: ElementRef, },
        { type: IterableDiffers, },
        { type: Renderer, },
        { type: DomHandler, },
    ];
    DataScroller.propDecorators = {
        'value': [{ type: Input },],
        'rows': [{ type: Input },],
        'lazy': [{ type: Input },],
        'onLazyLoad': [{ type: Output },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'buffer': [{ type: Input },],
        'inline': [{ type: Input },],
        'scrollHeight': [{ type: Input },],
        'header': [{ type: ContentChild, args: [Header,] },],
        'footer': [{ type: ContentChild, args: [Footer,] },],
        'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
        'loader': [{ type: Input },],
    };
    return DataScroller;
}());
export var DataScrollerModule = (function () {
    function DataScrollerModule() {
    }
    DataScrollerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule],
                    exports: [DataScroller, SharedModule],
                    declarations: [DataScroller]
                },] },
    ];
    /** @nocollapse */
    DataScrollerModule.ctorParameters = [];
    return DataScrollerModule;
}());
//# sourceMappingURL=datascroller.js.map