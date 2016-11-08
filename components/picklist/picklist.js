import { NgModule, Component, ElementRef, Input, Output, ContentChild, TemplateRef, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button';
import { SharedModule } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
export var PickList = (function () {
    function PickList(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.showSourceControls = true;
        this.showTargetControls = true;
        this.onMovetoSource = new EventEmitter();
        this.onMoveToTarget = new EventEmitter();
    }
    PickList.prototype.ngAfterViewChecked = function () {
        if (this.movedUp || this.movedDown) {
            var listItems = this.domHandler.find(this.reorderedListElement, 'li.ui-state-highlight');
            var listItem = void 0;
            if (this.movedUp)
                listItem = listItems[0];
            else
                listItem = listItems[listItems.length - 1];
            this.domHandler.scrollInView(this.reorderedListElement, listItem);
            this.movedUp = false;
            this.movedDown = false;
            this.reorderedListElement = null;
        }
    };
    PickList.prototype.selectItem = function (event, item) {
        var metaKey = (event.metaKey || event.ctrlKey);
        var index = this.findIndexInSelection(item);
        var selected = (index != -1);
        if (selected && metaKey) {
            this.selectedItems.splice(index, 1);
        }
        else {
            this.selectedItems = (metaKey) ? this.selectedItems || [] : [];
            this.selectedItems.push(item);
        }
    };
    PickList.prototype.moveUp = function (listElement, list) {
        if (this.selectedItems && this.selectedItems.length) {
            for (var i = 0; i < this.selectedItems.length; i++) {
                var selectedItem = this.selectedItems[i];
                var selectedItemIndex = this.findIndexInList(selectedItem, list);
                if (selectedItemIndex != 0) {
                    var movedItem = list[selectedItemIndex];
                    var temp = list[selectedItemIndex - 1];
                    list[selectedItemIndex - 1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedUp = true;
            this.reorderedListElement = listElement;
        }
    };
    PickList.prototype.moveTop = function (listElement, list) {
        if (this.selectedItems && this.selectedItems.length) {
            for (var i = 0; i < this.selectedItems.length; i++) {
                var selectedItem = this.selectedItems[i];
                var selectedItemIndex = this.findIndexInList(selectedItem, list);
                if (selectedItemIndex != 0) {
                    var movedItem = list.splice(selectedItemIndex, 1)[0];
                    list.unshift(movedItem);
                }
                else {
                    break;
                }
            }
            listElement.scrollTop = 0;
        }
    };
    PickList.prototype.moveDown = function (listElement, list) {
        if (this.selectedItems && this.selectedItems.length) {
            for (var i = this.selectedItems.length - 1; i >= 0; i--) {
                var selectedItem = this.selectedItems[i];
                var selectedItemIndex = this.findIndexInList(selectedItem, list);
                if (selectedItemIndex != (list.length - 1)) {
                    var movedItem = list[selectedItemIndex];
                    var temp = list[selectedItemIndex + 1];
                    list[selectedItemIndex + 1] = movedItem;
                    list[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedDown = true;
            this.reorderedListElement = listElement;
        }
    };
    PickList.prototype.moveBottom = function (listElement, list) {
        if (this.selectedItems && this.selectedItems.length) {
            for (var i = this.selectedItems.length - 1; i >= 0; i--) {
                var selectedItem = this.selectedItems[i];
                var selectedItemIndex = this.findIndexInList(selectedItem, list);
                if (selectedItemIndex != (list.length - 1)) {
                    var movedItem = list.splice(selectedItemIndex, 1)[0];
                    list.push(movedItem);
                }
                else {
                    break;
                }
            }
            listElement.scrollTop = listElement.scrollHeight;
        }
    };
    PickList.prototype.moveRight = function (targetListElement) {
        if (this.selectedItems && this.selectedItems.length) {
            for (var i = 0; i < this.selectedItems.length; i++) {
                var selectedItem = this.selectedItems[i];
                if (this.findIndexInList(selectedItem, this.target) == -1) {
                    this.target.push(this.source.splice(this.findIndexInList(selectedItem, this.source), 1)[0]);
                }
            }
            this.onMoveToTarget.emit({
                items: this.selectedItems
            });
            this.selectedItems = [];
        }
    };
    PickList.prototype.moveAllRight = function () {
        if (this.source) {
            for (var i = 0; i < this.source.length; i++) {
                this.target.push(this.source[i]);
            }
            this.onMoveToTarget.emit({
                items: this.source
            });
            this.source.splice(0, this.source.length);
            this.selectedItems = [];
        }
    };
    PickList.prototype.moveLeft = function (sourceListElement) {
        if (this.selectedItems && this.selectedItems.length) {
            for (var i = 0; i < this.selectedItems.length; i++) {
                var selectedItem = this.selectedItems[i];
                if (this.findIndexInList(selectedItem, this.source) == -1) {
                    this.source.push(this.target.splice(this.findIndexInList(selectedItem, this.target), 1)[0]);
                }
            }
            this.onMovetoSource.emit({
                items: this.selectedItems
            });
            this.selectedItems = [];
        }
    };
    PickList.prototype.moveAllLeft = function () {
        if (this.target) {
            for (var i = 0; i < this.target.length; i++) {
                this.source.push(this.target[i]);
            }
            this.onMovetoSource.emit({
                items: this.target
            });
            this.target.splice(0, this.target.length);
            this.selectedItems = [];
        }
    };
    PickList.prototype.isSelected = function (item) {
        return this.findIndexInSelection(item) != -1;
    };
    PickList.prototype.findIndexInSelection = function (item) {
        return this.findIndexInList(item, this.selectedItems);
    };
    PickList.prototype.findIndexInList = function (item, list) {
        var index = -1;
        if (list) {
            for (var i = 0; i < list.length; i++) {
                if (list[i] == item) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    PickList.prototype.ngOnDestroy = function () {
    };
    PickList.decorators = [
        { type: Component, args: [{
                    selector: 'p-pickList',
                    template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"{'ui-picklist ui-widget ui-helper-clearfix': true,'ui-picklist-responsive': responsive}\">\n            <div class=\"ui-picklist-source-controls ui-picklist-buttons\" *ngIf=\"showSourceControls\">\n                <div class=\"ui-picklist-buttons-cell\">\n                    <button type=\"button\" pButton icon=\"fa-angle-up\" (click)=\"moveUp(sourcelist,source)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-double-up\" (click)=\"moveTop(sourcelist,source)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-down\" (click)=\"moveDown(sourcelist,source)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-double-down\" (click)=\"moveBottom(sourcelist,source)\"></button>\n                </div>\n            </div>\n            <div class=\"ui-picklist-listwrapper ui-picklist-source-wrapper\" [ngClass]=\"{'ui-picklist-listwrapper-nocontrols':!showSourceControls}\">\n                <div class=\"ui-picklist-caption ui-widget-header ui-corner-tl ui-corner-tr\" *ngIf=\"sourceHeader\">{{sourceHeader}}</div>\n                <ul #sourcelist class=\"ui-widget-content ui-picklist-list ui-picklist-source ui-corner-bottom\" [ngStyle]=\"sourceStyle\">\n                    <li *ngFor=\"let item of source\" [ngClass]=\"{'ui-picklist-item':true,'ui-state-hover':(hoveredItem==item),'ui-state-highlight':isSelected(item)}\"\n                        (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\" (click)=\"selectItem($event,item)\">\n                        <template [pTemplateWrapper]=\"itemTemplate\" [item]=\"item\"></template>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"ui-picklist-buttons\">\n                <div class=\"ui-picklist-buttons-cell\">\n                    <button type=\"button\" pButton icon=\"fa-angle-right\" (click)=\"moveRight(targetlist)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-double-right\" (click)=\"moveAllRight()\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-left\" (click)=\"moveLeft(sourcelist)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-double-left\" (click)=\"moveAllLeft()\"></button>\n                </div>\n            </div>\n            <div class=\"ui-picklist-listwrapper ui-picklist-target-wrapper\" [ngClass]=\"{'ui-picklist-listwrapper-nocontrols':!showSourceControls}\">\n                <div class=\"ui-picklist-caption ui-widget-header ui-corner-tl ui-corner-tr\" *ngIf=\"targetHeader\">{{targetHeader}}</div>\n                <ul #targetlist class=\"ui-widget-content ui-picklist-list ui-picklist-target ui-corner-bottom\" [ngStyle]=\"targetStyle\">\n                    <li *ngFor=\"let item of target\" [ngClass]=\"{'ui-picklist-item':true,'ui-state-hover':(hoveredItem==item),'ui-state-highlight':isSelected(item)}\"\n                        (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\" (click)=\"selectItem($event,item)\">\n                        <template [pTemplateWrapper]=\"itemTemplate\" [item]=\"item\"></template>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"ui-picklist-target-controls ui-picklist-buttons\" *ngIf=\"showTargetControls\">\n                <div class=\"ui-picklist-buttons-cell\">\n                    <button type=\"button\" pButton icon=\"fa-angle-up\" (click)=\"moveUp(targetlist,target)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-double-up\" (click)=\"moveTop(targetlist,target)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-down\" (click)=\"moveDown(targetlist,target)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-double-down\" (click)=\"moveBottom(targetlist,target)\"></button>\n                </div>\n            </div>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    PickList.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    PickList.propDecorators = {
        'source': [{ type: Input },],
        'target': [{ type: Input },],
        'sourceHeader': [{ type: Input },],
        'targetHeader': [{ type: Input },],
        'responsive': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'sourceStyle': [{ type: Input },],
        'targetStyle': [{ type: Input },],
        'showSourceControls': [{ type: Input },],
        'showTargetControls': [{ type: Input },],
        'onMovetoSource': [{ type: Output },],
        'onMoveToTarget': [{ type: Output },],
        'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return PickList;
}());
export var PickListModule = (function () {
    function PickListModule() {
    }
    PickListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ButtonModule, SharedModule],
                    exports: [PickList, SharedModule],
                    declarations: [PickList]
                },] },
    ];
    /** @nocollapse */
    PickListModule.ctorParameters = [];
    return PickListModule;
}());
//# sourceMappingURL=picklist.js.map