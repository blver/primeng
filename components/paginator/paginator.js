import { NgModule, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
export var Paginator = (function () {
    function Paginator() {
        this.rows = 0;
        this.pageLinkSize = 5;
        this.onPageChange = new EventEmitter();
        this._totalRecords = 0;
        this._first = 0;
    }
    Object.defineProperty(Paginator.prototype, "totalRecords", {
        get: function () {
            return this._totalRecords;
        },
        set: function (val) {
            this._totalRecords = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "first", {
        get: function () {
            return this._first;
        },
        set: function (val) {
            this._first = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    Paginator.prototype.isFirstPage = function () {
        return this.getPage() === 0;
    };
    Paginator.prototype.isLastPage = function () {
        return this.getPage() === this.getPageCount() - 1;
    };
    Paginator.prototype.getPageCount = function () {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    };
    Paginator.prototype.calculatePageLinkBoundaries = function () {
        var numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        var start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    };
    Paginator.prototype.updatePageLinks = function () {
        this.pageLinks = [];
        var boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
        for (var i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    };
    Paginator.prototype.changePage = function (p, event) {
        var pc = this.getPageCount();
        if (p >= 0 && p < pc) {
            this.first = this.rows * p;
            var state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
        }
        if (event) {
            event.preventDefault();
        }
    };
    Paginator.prototype.getPage = function () {
        return Math.floor(this.first / this.rows);
    };
    Paginator.prototype.changePageToFirst = function (event) {
        this.changePage(0, event);
    };
    Paginator.prototype.changePageToPrev = function (event) {
        this.changePage(this.getPage() - 1, event);
    };
    Paginator.prototype.changePageToNext = function (event) {
        this.changePage(this.getPage() + 1, event);
    };
    Paginator.prototype.changePageToLast = function (event) {
        this.changePage(this.getPageCount() - 1, event);
    };
    Paginator.prototype.onRppChange = function (event) {
        this.rows = this.rowsPerPageOptions[event.target.selectedIndex];
        this.changePageToFirst(event);
    };
    Paginator.decorators = [
        { type: Component, args: [{
                    selector: 'p-paginator',
                    template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"{'ui-paginator ui-widget-header ui-unselectable-text':true}\">\n            <a href=\"#\" #firstlink class=\"ui-paginator-first ui-paginator-element ui-state-default ui-corner-all\" (mouseenter)=\"hoveredItem = $event.target\" (mouseleave)=\"hoveredItem = null\"\n                        (click)=\"changePageToFirst($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage(),'ui-state-hover':(firstlink === hoveredItem && !isFirstPage())}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"fa fa-step-backward\"></span>\n            </a>\n            <a href=\"#\" #prevlink class=\"ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all\" (mouseenter)=\"hoveredItem = $event.target\" (mouseleave)=\"hoveredItem = null\"\n                    (click)=\"changePageToPrev($event)\" [ngClass]=\"{'ui-state-disabled':isFirstPage(),'ui-state-hover':(prevlink === hoveredItem && !isFirstPage())}\" [tabindex]=\"isFirstPage() ? -1 : null\">\n                <span class=\"fa fa-backward\"></span>\n            </a>\n            <span class=\"ui-paginator-pages\">\n                <a href=\"#\" #plink *ngFor=\"let pageLink of pageLinks\" class=\"ui-paginator-page ui-paginator-element ui-state-default ui-corner-all\"\n                    (mouseenter)=\"hoveredItem = $event.target\" (mouseleave)=\"hoveredItem = null\" (click)=\"changePage(pageLink - 1, $event)\"\n                    [ngClass]=\"{'ui-state-hover':(plink === hoveredItem), 'ui-state-active': (pageLink-1 == getPage())}\">{{pageLink}}</a>\n            </span>\n            <a href=\"#\" #nextlink class=\"ui-paginator-next ui-paginator-element ui-state-default ui-corner-all\" (mouseenter)=\"hoveredItem = $event.target\" (mouseleave)=\"hoveredItem = null\"\n                    (click)=\"changePageToNext($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage(),'ui-state-hover':(nextlink === hoveredItem  && !isLastPage())}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"fa fa-forward\"></span>\n            </a>\n            <a href=\"#\" #lastlink class=\"ui-paginator-last ui-paginator-element ui-state-default ui-corner-all\" (mouseenter)=\"hoveredItem = $event.target\" (mouseleave)=\"hoveredItem = null\"\n                    (click)=\"changePageToLast($event)\" [ngClass]=\"{'ui-state-disabled':isLastPage(),'ui-state-hover':(lastlink === hoveredItem  && !isLastPage())}\" [tabindex]=\"isLastPage() ? -1 : null\">\n                <span class=\"fa fa-step-forward\"></span>\n            </a>\n            <select class=\"ui-paginator-rpp-options ui-widget ui-state-default\" *ngIf=\"rowsPerPageOptions\" (change)=\"onRppChange($event)\">\n                <option *ngFor=\"let opt of rowsPerPageOptions\" [value]=\"opt\" [selected]=\"rows == opt\">{{opt}}</option>\n            </select>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Paginator.ctorParameters = [];
    Paginator.propDecorators = {
        'rows': [{ type: Input },],
        'pageLinkSize': [{ type: Input },],
        'onPageChange': [{ type: Output },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'rowsPerPageOptions': [{ type: Input },],
        'totalRecords': [{ type: Input },],
        'first': [{ type: Input },],
    };
    return Paginator;
}());
export var PaginatorModule = (function () {
    function PaginatorModule() {
    }
    PaginatorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Paginator],
                    declarations: [Paginator]
                },] },
    ];
    /** @nocollapse */
    PaginatorModule.ctorParameters = [];
    return PaginatorModule;
}());
//# sourceMappingURL=paginator.js.map