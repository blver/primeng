import { NgModule, EventEmitter, Directive, ViewContainerRef, Input, Output, ContentChildren, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
export var Header = (function () {
    function Header() {
    }
    Header.decorators = [
        { type: Component, args: [{
                    selector: 'header',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    Header.ctorParameters = [];
    return Header;
}());
export var Footer = (function () {
    function Footer() {
    }
    Footer.decorators = [
        { type: Component, args: [{
                    selector: 'footer',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    Footer.ctorParameters = [];
    return Footer;
}());
export var PrimeTemplate = (function () {
    function PrimeTemplate(template) {
        this.template = template;
    }
    PrimeTemplate.decorators = [
        { type: Directive, args: [{
                    selector: '[pTemplate]',
                    host: {}
                },] },
    ];
    /** @nocollapse */
    PrimeTemplate.ctorParameters = [
        { type: TemplateRef, },
    ];
    PrimeTemplate.propDecorators = {
        'type': [{ type: Input },],
    };
    return PrimeTemplate;
}());
export var TemplateWrapper = (function () {
    function TemplateWrapper(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateWrapper.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item
        });
    };
    TemplateWrapper.decorators = [
        { type: Directive, args: [{
                    selector: '[pTemplateWrapper]'
                },] },
    ];
    /** @nocollapse */
    TemplateWrapper.ctorParameters = [
        { type: ViewContainerRef, },
    ];
    TemplateWrapper.propDecorators = {
        'item': [{ type: Input },],
        'templateRef': [{ type: Input, args: ['pTemplateWrapper',] },],
    };
    return TemplateWrapper;
}());
export var Column = (function () {
    function Column() {
        this.sortFunction = new EventEmitter();
    }
    Column.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.type) {
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                default:
                    _this.bodyTemplate = item.template;
                    break;
            }
        });
    };
    Column.decorators = [
        { type: Component, args: [{
                    selector: 'p-column',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Column.ctorParameters = [];
    Column.propDecorators = {
        'field': [{ type: Input },],
        'header': [{ type: Input },],
        'footer': [{ type: Input },],
        'sortable': [{ type: Input },],
        'editable': [{ type: Input },],
        'filter': [{ type: Input },],
        'filterMatchMode': [{ type: Input },],
        'rowspan': [{ type: Input },],
        'colspan': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'hidden': [{ type: Input },],
        'expander': [{ type: Input },],
        'selectionMode': [{ type: Input },],
        'filterPlaceholder': [{ type: Input },],
        'sortFunction': [{ type: Output },],
        'templates': [{ type: ContentChildren, args: [PrimeTemplate,] },],
        'template': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return Column;
}());
export var Row = (function () {
    function Row() {
    }
    Row.decorators = [
        { type: Component, args: [{
                    selector: 'p-row',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    Row.ctorParameters = [];
    Row.propDecorators = {
        'columns': [{ type: ContentChildren, args: [Column,] },],
    };
    return Row;
}());
export var HeaderColumnGroup = (function () {
    function HeaderColumnGroup() {
    }
    HeaderColumnGroup.decorators = [
        { type: Component, args: [{
                    selector: 'p-headerColumnGroup',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    HeaderColumnGroup.ctorParameters = [];
    HeaderColumnGroup.propDecorators = {
        'rows': [{ type: ContentChildren, args: [Row,] },],
    };
    return HeaderColumnGroup;
}());
export var FooterColumnGroup = (function () {
    function FooterColumnGroup() {
    }
    FooterColumnGroup.decorators = [
        { type: Component, args: [{
                    selector: 'p-footerColumnGroup',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    FooterColumnGroup.ctorParameters = [];
    FooterColumnGroup.propDecorators = {
        'rows': [{ type: ContentChildren, args: [Row,] },],
    };
    return FooterColumnGroup;
}());
export var ColumnBodyTemplateLoader = (function () {
    function ColumnBodyTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnBodyTemplateLoader.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    };
    ColumnBodyTemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'p-columnBodyTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnBodyTemplateLoader.ctorParameters = [
        { type: ViewContainerRef, },
    ];
    ColumnBodyTemplateLoader.propDecorators = {
        'column': [{ type: Input },],
        'rowData': [{ type: Input },],
        'rowIndex': [{ type: Input },],
    };
    return ColumnBodyTemplateLoader;
}());
export var ColumnHeaderTemplateLoader = (function () {
    function ColumnHeaderTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnHeaderTemplateLoader.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
            '\$implicit': this.column
        });
    };
    ColumnHeaderTemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'p-columnHeaderTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnHeaderTemplateLoader.ctorParameters = [
        { type: ViewContainerRef, },
    ];
    ColumnHeaderTemplateLoader.propDecorators = {
        'column': [{ type: Input },],
    };
    return ColumnHeaderTemplateLoader;
}());
export var ColumnFooterTemplateLoader = (function () {
    function ColumnFooterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnFooterTemplateLoader.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.column.footerTemplate, {
            '\$implicit': this.column
        });
    };
    ColumnFooterTemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'p-columnFooterTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ColumnFooterTemplateLoader.ctorParameters = [
        { type: ViewContainerRef, },
    ];
    ColumnFooterTemplateLoader.propDecorators = {
        'column': [{ type: Input },],
    };
    return ColumnFooterTemplateLoader;
}());
export var TemplateLoader = (function () {
    function TemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateLoader.prototype.ngOnInit = function () {
        if (this.template) {
            this.viewContainer.createEmbeddedView(this.template, {});
        }
    };
    TemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'p-templateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    TemplateLoader.ctorParameters = [
        { type: ViewContainerRef, },
    ];
    TemplateLoader.propDecorators = {
        'template': [{ type: Input },],
    };
    return TemplateLoader;
}());
export var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup],
                    declarations: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup]
                },] },
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = [];
    return SharedModule;
}());
//# sourceMappingURL=shared.js.map