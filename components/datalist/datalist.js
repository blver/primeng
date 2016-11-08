import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChild, IterableDiffers, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../common/shared';
import { Footer } from '../common/shared';
import { SharedModule } from '../common/shared';
import { PaginatorModule } from '../paginator/paginator';
export var DataList = (function () {
    function DataList(el, differs) {
        this.el = el;
        this.pageLinks = 5;
        this.onLazyLoad = new EventEmitter();
        this.paginatorPosition = 'bottom';
        this.first = 0;
        this.page = 0;
        this.differ = differs.find([]).create(null);
    }
    DataList.prototype.ngAfterViewInit = function () {
        if (this.lazy) {
            this.onLazyLoad.emit({
                first: this.first,
                rows: this.rows
            });
        }
    };
    DataList.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.value);
        if (changes) {
            if (this.paginator) {
                this.updatePaginator();
            }
            this.updateDataToRender(this.value);
        }
    };
    DataList.prototype.updatePaginator = function () {
        //total records
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
        //first
        if (this.totalRecords && this.first >= this.totalRecords) {
            var numberOfPages = Math.ceil(this.totalRecords / this.rows);
            this.first = Math.max((numberOfPages - 1) * this.rows, 0);
        }
    };
    DataList.prototype.paginate = function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.updateDataToRender(this.value);
        }
    };
    DataList.prototype.updateDataToRender = function (datasource) {
        if (this.paginator && datasource) {
            this.dataToRender = [];
            var startIndex = this.lazy ? 0 : this.first;
            for (var i = startIndex; i < (startIndex + this.rows); i++) {
                if (i >= datasource.length) {
                    break;
                }
                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }
    };
    DataList.prototype.isEmpty = function () {
        return !this.dataToRender || (this.dataToRender.length == 0);
    };
    DataList.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.rows
        };
    };
    DataList.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    DataList.decorators = [
        { type: Component, args: [{
                    selector: 'p-dataList',
                    template: "\n        <div [ngClass]=\"'ui-datalist ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-datalist-header ui-widget-header ui-corner-top\" *ngIf=\"header\">\n                <ng-content select=\"header\"></ng-content>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" \n            (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-bottom\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator  && paginatorPosition!='bottom' || paginatorPosition =='both'\"></p-paginator>\n            <div class=\"ui-datalist-content ui-widget-content\">\n                <ul class=\"ui-datalist-data\">\n                    <li *ngFor=\"let item of dataToRender\">\n                        <template [pTemplateWrapper]=\"itemTemplate\" [item]=\"item\"></template>\n                    </li>\n                </ul>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" \n            (onPageChange)=\"paginate($event)\" styleClass=\"ui-paginator-bottom\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator  && paginatorPosition!='top' || paginatorPosition =='both'\"></p-paginator>\n            <div class=\"ui-datalist-footer ui-widget-header ui-corner-bottom\" *ngIf=\"footer\">\n                <ng-content select=\"footer\"></ng-content>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    DataList.ctorParameters = [
        { type: ElementRef, },
        { type: IterableDiffers, },
    ];
    DataList.propDecorators = {
        'value': [{ type: Input },],
        'paginator': [{ type: Input },],
        'rows': [{ type: Input },],
        'totalRecords': [{ type: Input },],
        'pageLinks': [{ type: Input },],
        'rowsPerPageOptions': [{ type: Input },],
        'lazy': [{ type: Input },],
        'onLazyLoad': [{ type: Output },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'paginatorPosition': [{ type: Input },],
        'header': [{ type: ContentChild, args: [Header,] },],
        'footer': [{ type: ContentChild, args: [Footer,] },],
        'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return DataList;
}());
export var DataListModule = (function () {
    function DataListModule() {
    }
    DataListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule, PaginatorModule],
                    exports: [DataList, SharedModule],
                    declarations: [DataList]
                },] },
    ];
    /** @nocollapse */
    DataListModule.ctorParameters = [];
    return DataListModule;
}());
//# sourceMappingURL=datalist.js.map