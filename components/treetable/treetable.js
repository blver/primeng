import { NgModule, Component, Input, Output, EventEmitter, ContentChild, ContentChildren, Inject, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header, Footer, Column } from '../common/shared';
import { SharedModule } from '../common/shared';
export var UITreeRow = (function () {
    function UITreeRow(treeTable) {
        this.treeTable = treeTable;
        this.level = 0;
    }
    UITreeRow.prototype.toggle = function (event) {
        if (this.node.expanded)
            this.treeTable.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        else
            this.treeTable.onNodeExpand.emit({ originalEvent: event, node: this.node });
        this.node.expanded = !this.node.expanded;
    };
    UITreeRow.prototype.isLeaf = function () {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    };
    UITreeRow.prototype.isSelected = function () {
        return this.treeTable.isSelected(this.node);
    };
    UITreeRow.prototype.onRowClick = function (event) {
        this.treeTable.onRowClick(event, this.node);
    };
    UITreeRow.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    UITreeRow.decorators = [
        { type: Component, args: [{
                    selector: '[pTreeRow]',
                    template: "\n        <div class=\"ui-treetable-row\" [ngClass]=\"{'ui-state-hover':hover&&treeTable.selectionMode,'ui-state-highlight':isSelected()}\">\n            <td *ngFor=\"let col of treeTable.columns; let i=index\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\"\n                (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\" (click)=\"onRowClick($event)\">\n                <span *ngIf=\"i==0\" class=\"ui-treetable-toggler fa fa-fw ui-c\" [ngClass]=\"{'fa-caret-down':node.expanded,'fa-caret-right':!node.expanded}\"\n                    [ngStyle]=\"{'margin-left':level*16 + 'px','visibility': isLeaf() ? 'hidden' : 'visible'}\"\n                    (click)=\"toggle($event)\"></span>\n                <span *ngIf=\"!col.template\">{{resolveFieldData(node.data,col.field)}}</span>\n                <p-columnBodyTemplateLoader [column]=\"col\" [rowData]=\"node\" *ngIf=\"col.template\"></p-columnBodyTemplateLoader>\n            </td>\n        </div>\n        <div *ngIf=\"node.children\" class=\"ui-treetable-row\" [style.display]=\"node.expanded ? 'table-row' : 'none'\">\n            <td [attr.colspan]=\"treeTable.columns.length\" class=\"ui-treetable-child-table-container\">\n                <table>\n                    <tbody pTreeRow *ngFor=\"let childNode of node.children\" [node]=\"childNode\" [level]=\"level+1\"></tbody>\n                </table>\n            </td>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    UITreeRow.ctorParameters = [
        { type: TreeTable, decorators: [{ type: Inject, args: [forwardRef(function () { return TreeTable; }),] },] },
    ];
    UITreeRow.propDecorators = {
        'node': [{ type: Input },],
        'level': [{ type: Input },],
    };
    return UITreeRow;
}());
export var TreeTable = (function () {
    function TreeTable() {
        this.selectionChange = new EventEmitter();
        this.onNodeSelect = new EventEmitter();
        this.onNodeUnselect = new EventEmitter();
        this.onNodeExpand = new EventEmitter();
        this.onNodeCollapse = new EventEmitter();
    }
    TreeTable.prototype.onRowClick = function (event, node) {
        var eventTarget = event.target;
        if (eventTarget.className && eventTarget.className.indexOf('ui-treetable-toggler') === 0) {
            return;
        }
        else {
            var metaKey = (event.metaKey || event.ctrlKey);
            var index = this.findIndexInSelection(node);
            var selected = (index >= 0);
            if (selected && metaKey) {
                if (this.isSingleSelectionMode()) {
                    this.selectionChange.emit(null);
                }
                else {
                    this.selection.splice(index, 1);
                    this.selectionChange.emit(this.selection);
                }
                this.onNodeUnselect.emit({ originalEvent: event, node: node });
            }
            else {
                if (this.isSingleSelectionMode()) {
                    this.selectionChange.emit(node);
                }
                else if (this.isMultipleSelectionMode()) {
                    this.selection = (!metaKey) ? [] : this.selection || [];
                    this.selection.push(node);
                    this.selectionChange.emit(this.selection);
                }
                this.onNodeSelect.emit({ originalEvent: event, node: node });
            }
        }
    };
    TreeTable.prototype.findIndexInSelection = function (node) {
        var index = -1;
        if (this.selectionMode && this.selection) {
            if (this.isSingleSelectionMode()) {
                index = (this.selection == node) ? 0 : -1;
            }
            else if (this.isMultipleSelectionMode()) {
                for (var i = 0; i < this.selection.length; i++) {
                    if (this.selection[i] == node) {
                        index = i;
                        break;
                    }
                }
            }
        }
        return index;
    };
    TreeTable.prototype.isSelected = function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    TreeTable.prototype.isSingleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'single';
    };
    TreeTable.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'multiple';
    };
    TreeTable.prototype.hasFooter = function () {
        if (this.columns) {
            var columnsArr = this.columns.toArray();
            for (var i = 0; i < columnsArr.length; i++) {
                if (columnsArr[i].footer) {
                    return true;
                }
            }
        }
        return false;
    };
    TreeTable.decorators = [
        { type: Component, args: [{
                    selector: 'p-treeTable',
                    template: "\n        <div [ngClass]=\"'ui-treetable ui-widget'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-treetable-header ui-widget-header\" *ngIf=\"header\">\n                <ng-content select=\"header\"></ng-content>\n            </div>\n            <div class=\"ui-treetable-tablewrapper\">\n                <table class=\"ui-widget-content\" style=\"border:0 0 1px 0px\">\n                    <thead>\n                        <tr class=\"ui-state-default\">\n                            <th #headerCell *ngFor=\"let col of columns\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\" \n                                [ngClass]=\"'ui-state-default ui-unselectable-text'\">\n                                <span class=\"ui-column-title\" *ngIf=\"!col.headerTemplate\">{{col.header}}</span>\n                                <span class=\"ui-column-title\" *ngIf=\"col.headerTemplate\">\n                                    <p-columnHeaderTemplateLoader [column]=\"col\"></p-columnHeaderTemplateLoader>\n                                </span>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tfoot *ngIf=\"hasFooter()\">\n                        <tr>\n                            <td *ngFor=\"let col of columns\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\" [ngClass]=\"{'ui-state-default':true}\">\n                                <span class=\"ui-column-footer\" *ngIf=\"!col.footerTemplate\">{{col.footer}}</span>\n                                <span class=\"ui-column-footer\" *ngIf=\"col.footerTemplate\">\n                                    <p-columnFooterTemplateLoader [column]=\"col\"></p-columnFooterTemplateLoader>\n                                </span>\n                            </td>\n                        </tr>\n                    </tfoot>\n                    <tbody pTreeRow *ngFor=\"let node of value\" [node]=\"node\" [level]=\"0\"></tbody>\n                </table>\n            </div>\n            <div class=\"ui-treetable-footer ui-widget-header\" *ngIf=\"footer\">\n                <ng-content select=\"footer\"></ng-content>\n            </div>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    TreeTable.ctorParameters = [];
    TreeTable.propDecorators = {
        'value': [{ type: Input },],
        'selectionMode': [{ type: Input },],
        'selection': [{ type: Input },],
        'selectionChange': [{ type: Output },],
        'onNodeSelect': [{ type: Output },],
        'onNodeUnselect': [{ type: Output },],
        'onNodeExpand': [{ type: Output },],
        'onNodeCollapse': [{ type: Output },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'header': [{ type: ContentChild, args: [Header,] },],
        'footer': [{ type: ContentChild, args: [Footer,] },],
        'columns': [{ type: ContentChildren, args: [Column,] },],
    };
    return TreeTable;
}());
export var TreeTableModule = (function () {
    function TreeTableModule() {
    }
    TreeTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule],
                    exports: [TreeTable, SharedModule],
                    declarations: [TreeTable, UITreeRow]
                },] },
    ];
    /** @nocollapse */
    TreeTableModule.ctorParameters = [];
    return TreeTableModule;
}());
//# sourceMappingURL=treetable.js.map