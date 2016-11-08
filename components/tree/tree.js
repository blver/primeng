import { NgModule, Component, Input, Output, EventEmitter, ViewContainerRef, ContentChildren, Inject, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared';
import { PrimeTemplate } from '../common/shared';
export var TreeNodeTemplateLoader = (function () {
    function TreeNodeTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TreeNodeTemplateLoader.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.template, {
            '\$implicit': this.node
        });
    };
    TreeNodeTemplateLoader.decorators = [
        { type: Component, args: [{
                    selector: 'p-treeNodeTemplateLoader',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    TreeNodeTemplateLoader.ctorParameters = [
        { type: ViewContainerRef, },
    ];
    TreeNodeTemplateLoader.propDecorators = {
        'node': [{ type: Input },],
        'template': [{ type: Input },],
    };
    return TreeNodeTemplateLoader;
}());
export var UITreeNode = (function () {
    function UITreeNode(tree) {
        this.tree = tree;
        this.hover = false;
    }
    UITreeNode.prototype.getIcon = function () {
        var icon;
        if (this.node.icon)
            icon = this.node.icon;
        else
            icon = this.node.expanded ? this.node.expandedIcon : this.node.collapsedIcon;
        return UITreeNode.ICON_CLASS + ' ' + icon;
    };
    UITreeNode.prototype.isLeaf = function () {
        return this.node.leaf == false ? false : !(this.node.children && this.node.children.length);
    };
    UITreeNode.prototype.toggle = function (event) {
        if (this.node.expanded)
            this.tree.onNodeCollapse.emit({ originalEvent: event, node: this.node });
        else
            this.tree.onNodeExpand.emit({ originalEvent: event, node: this.node });
        this.node.expanded = !this.node.expanded;
    };
    UITreeNode.prototype.onNodeClick = function (event) {
        this.tree.onNodeClick(event, this.node);
    };
    UITreeNode.prototype.onNodeRightClick = function (event) {
        this.tree.onNodeRightClick(event, this.node);
    };
    UITreeNode.prototype.isSelected = function () {
        return this.tree.isSelected(this.node);
    };
    UITreeNode.ICON_CLASS = 'ui-treenode-icon fa fa-fw';
    UITreeNode.decorators = [
        { type: Component, args: [{
                    selector: 'p-treeNode',
                    template: "\n        <template [ngIf]=\"node\">\n            <li class=\"ui-treenode\" *ngIf=\"!tree.horizontal\">\n                <div class=\"ui-treenode-content\"\n                    (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\" (click)=\"onNodeClick($event)\" (contextmenu)=\"onNodeRightClick($event)\">\n                    <span class=\"ui-tree-toggler fa fa-fw\" [ngClass]=\"{'fa-caret-right':!node.expanded,'fa-caret-down':node.expanded}\" *ngIf=\"!isLeaf()\"\n                            (click)=\"toggle($event)\"></span\n                    ><span class=\"ui-treenode-leaf-icon\" *ngIf=\"isLeaf()\"></span\n                    ><span [class]=\"getIcon()\" *ngIf=\"node.icon||node.expandedIcon||node.collapsedIcon\"></span\n                    ><span class=\"ui-treenode-label ui-corner-all\" \n                        [ngClass]=\"{'ui-state-hover':hover&&tree.selectionMode,'ui-state-highlight':isSelected()}\">\n                            <span *ngIf=\"!tree.getTemplateForNode(node)\">{{node.label}}</span>\n                            <span *ngIf=\"tree.getTemplateForNode(node)\">\n                                <p-treeNodeTemplateLoader [node]=\"node\" [template]=\"tree.getTemplateForNode(node)\"></p-treeNodeTemplateLoader>\n                            </span>\n                    </span>\n                </div>\n                <ul class=\"ui-treenode-children\" style=\"display: none;\" *ngIf=\"node.children&&node.expanded\" [style.display]=\"node.expanded ? 'block' : 'none'\">\n                    <p-treeNode *ngFor=\"let childNode of node.children\" [node]=\"childNode\"></p-treeNode>\n                </ul>\n            </li>\n            <table *ngIf=\"tree.horizontal\">\n                <tbody>\n                    <tr>\n                        <td class=\"ui-treenode-connector\" *ngIf=\"!root\">\n                            <table class=\"ui-treenode-connector-table\">\n                                <tbody>\n                                    <tr>\n                                        <td [ngClass]=\"{'ui-treenode-connector-line':!firstChild}\"></td>\n                                    </tr>\n                                    <tr>\n                                        <td [ngClass]=\"{'ui-treenode-connector-line':!lastChild}\"></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </td>\n                        <td class=\"ui-treenode\" [ngClass]=\"{'ui-treenode-collapsed':!node.expanded}\">\n                            <div class=\"ui-treenode-content ui-state-default ui-corner-all\" \n                                [ngClass]=\"{'ui-state-hover':hover&&tree.selectionMode,'ui-state-highlight':isSelected()}\"\n                                (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\" (click)=\"onNodeClick($event)\" (contextmenu)=\"onNodeRightClick($event)\">\n                                <span class=\"ui-tree-toggler fa fa-fw\" [ngClass]=\"{'fa-plus':!node.expanded,'fa-minus':node.expanded}\" *ngIf=\"!isLeaf()\"\n                                        (click)=\"toggle($event)\"></span\n                                ><span [class]=\"getIcon()\" *ngIf=\"node.icon||node.expandedIcon||node.collapsedIcon\"></span\n                                ><span class=\"ui-treenode-label ui-corner-all\">\n                                        <span *ngIf=\"!tree.getTemplateForNode(node)\">{{node.label}}</span>\n                                        <span *ngIf=\"tree.getTemplateForNode(node)\">\n                                            <p-treeNodeTemplateLoader [node]=\"node\" [template]=\"tree.getTemplateForNode(node)\"></p-treeNodeTemplateLoader>\n                                        </span>\n                                </span>\n                            </div>\n                        </td>\n                        <td class=\"ui-treenode-children-container\" *ngIf=\"node.children&&node.expanded\" [style.display]=\"node.expanded ? 'table-cell' : 'none'\">\n                            <div class=\"ui-treenode-children\">\n                                <p-treeNode *ngFor=\"let childNode of node.children;let firstChild=first;let lastChild=last;\" [node]=\"childNode\" \n                                        [firstChild]=\"firstChild\" [lastChild]=\"lastChild\"></p-treeNode>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </template>\n    "
                },] },
    ];
    /** @nocollapse */
    UITreeNode.ctorParameters = [
        { type: Tree, decorators: [{ type: Inject, args: [forwardRef(function () { return Tree; }),] },] },
    ];
    UITreeNode.propDecorators = {
        'node': [{ type: Input },],
        'root': [{ type: Input },],
        'firstChild': [{ type: Input },],
        'lastChild': [{ type: Input },],
    };
    return UITreeNode;
}());
export var Tree = (function () {
    function Tree() {
        this.selectionChange = new EventEmitter();
        this.onNodeSelect = new EventEmitter();
        this.onNodeUnselect = new EventEmitter();
        this.onNodeExpand = new EventEmitter();
        this.onNodeCollapse = new EventEmitter();
        this.onNodeContextMenuSelect = new EventEmitter();
        this.layout = 'vertical';
    }
    Object.defineProperty(Tree.prototype, "horizontal", {
        get: function () {
            return this.layout == 'horizontal';
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.templates.length) {
            this.templateMap = {};
        }
        this.templates.forEach(function (item) {
            _this.templateMap[item.type] = item.template;
        });
    };
    Tree.prototype.onNodeClick = function (event, node) {
        var eventTarget = event.target;
        if (eventTarget.className && eventTarget.className.indexOf('ui-tree-toggler') === 0) {
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
    Tree.prototype.onNodeRightClick = function (event, node) {
        if (this.contextMenu) {
            var eventTarget = event.target;
            if (eventTarget.className && eventTarget.className.indexOf('ui-tree-toggler') === 0) {
                return;
            }
            else {
                var index = this.findIndexInSelection(node);
                var selected = (index >= 0);
                if (!selected) {
                    if (this.isSingleSelectionMode())
                        this.selectionChange.emit(node);
                    else
                        this.selectionChange.emit([node]);
                }
                this.contextMenu.show(event);
                this.onNodeContextMenuSelect.emit({ originalEvent: event, node: node });
            }
        }
    };
    Tree.prototype.findIndexInSelection = function (node) {
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
    Tree.prototype.isSelected = function (node) {
        return this.findIndexInSelection(node) != -1;
    };
    Tree.prototype.isSingleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'single';
    };
    Tree.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode && this.selectionMode == 'multiple';
    };
    Tree.prototype.expandToNode = function (node) {
        var pathToNode = this.findPathToNode(node);
        if (pathToNode) {
            pathToNode.forEach(function (node) { return node.expanded = true; });
        }
    };
    Tree.prototype.findPathToNode = function (node) {
        return Tree.findPathToNodeRecursive(node, this.value);
    };
    Tree.findPathToNodeRecursive = function (searchingFor, searchingIn) {
        if (!searchingIn || searchingIn.length == 0) {
            return undefined;
        }
        for (var i = 0; i < searchingIn.length; i++) {
            if (searchingFor == searchingIn[i]) {
                return [searchingIn[i]];
            }
            var path = Tree.findPathToNodeRecursive(searchingFor, searchingIn[i].children);
            if (path) {
                path.unshift(searchingIn[i]);
                return path;
            }
        }
        return undefined;
    };
    Tree.prototype.getTemplateForNode = function (node) {
        if (this.templateMap)
            return node.type ? this.templateMap[node.type] : this.templateMap['default'];
        else
            return null;
    };
    Tree.decorators = [
        { type: Component, args: [{
                    selector: 'p-tree',
                    template: "\n        <div [ngClass]=\"{'ui-tree ui-widget ui-widget-content ui-corner-all':true,'ui-tree-selectable':selectionMode}\" [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"!horizontal\">\n            <ul class=\"ui-tree-container\">\n                <p-treeNode *ngFor=\"let node of value\" [node]=\"node\"></p-treeNode>\n            </ul>\n        </div>\n        <div [ngClass]=\"{'ui-tree ui-tree-horizontal ui-widget ui-widget-content ui-corner-all':true,'ui-tree-selectable':selectionMode}\"  [ngStyle]=\"style\" [class]=\"styleClass\" *ngIf=\"horizontal\">\n            <table *ngIf=\"value&&value[0]\">\n                <p-treeNode [node]=\"value[0]\" [root]=\"true\"></p-treeNode>\n            </table>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    Tree.ctorParameters = [];
    Tree.propDecorators = {
        'value': [{ type: Input },],
        'selectionMode': [{ type: Input },],
        'selection': [{ type: Input },],
        'selectionChange': [{ type: Output },],
        'onNodeSelect': [{ type: Output },],
        'onNodeUnselect': [{ type: Output },],
        'onNodeExpand': [{ type: Output },],
        'onNodeCollapse': [{ type: Output },],
        'onNodeContextMenuSelect': [{ type: Output },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'contextMenu': [{ type: Input },],
        'layout': [{ type: Input },],
        'templates': [{ type: ContentChildren, args: [PrimeTemplate,] },],
    };
    return Tree;
}());
export var TreeModule = (function () {
    function TreeModule() {
    }
    TreeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Tree, SharedModule],
                    declarations: [Tree, UITreeNode, TreeNodeTemplateLoader]
                },] },
    ];
    /** @nocollapse */
    TreeModule.ctorParameters = [];
    return TreeModule;
}());
//# sourceMappingURL=tree.js.map