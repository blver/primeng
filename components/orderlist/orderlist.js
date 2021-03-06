import { NgModule, Component, ElementRef, Input, Output, ContentChild, TemplateRef, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button';
import { SharedModule } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
export var OrderList = (function () {
    function OrderList(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onReorder = new EventEmitter();
    }
    OrderList.prototype.ngAfterViewInit = function () {
        this.listContainer = this.domHandler.findSingle(this.el.nativeElement, 'ul.ui-orderlist-list');
    };
    OrderList.prototype.ngAfterViewChecked = function () {
        if (this.movedUp || this.movedDown) {
            var listItems = this.domHandler.find(this.listContainer, 'li.ui-state-highlight');
            var listItem = void 0;
            if (this.movedUp)
                listItem = listItems[0];
            else
                listItem = listItems[listItems.length - 1];
            this.domHandler.scrollInView(this.listContainer, listItem);
            this.movedUp = false;
            this.movedDown = false;
        }
    };
    OrderList.prototype.onItemClick = function (event, item) {
        var metaKey = (event.metaKey || event.ctrlKey);
        var index = this.findIndexInList(item, this.selectedItems);
        var selected = (index != -1);
        if (selected && metaKey) {
            this.selectedItems.splice(index, 1);
        }
        else {
            this.selectedItems = (metaKey) ? this.selectedItems || [] : [];
            this.selectedItems.push(item);
        }
    };
    OrderList.prototype.isSelected = function (item) {
        return this.findIndexInList(item, this.selectedItems) != -1;
    };
    OrderList.prototype.findIndexInList = function (item, list) {
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
    OrderList.prototype.moveUp = function (event, listElement) {
        if (this.selectedItems) {
            for (var i = 0; i < this.selectedItems.length; i++) {
                var selectedItem = this.selectedItems[i];
                var selectedItemIndex = this.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    var movedItem = this.value[selectedItemIndex];
                    var temp = this.value[selectedItemIndex - 1];
                    this.value[selectedItemIndex - 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedUp = true;
            this.onReorder.emit(event);
        }
    };
    OrderList.prototype.moveTop = function (event, listElement) {
        if (this.selectedItems) {
            for (var i = 0; i < this.selectedItems.length; i++) {
                var selectedItem = this.selectedItems[i];
                var selectedItemIndex = this.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != 0) {
                    var movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.unshift(movedItem);
                    listElement.scrollTop = 0;
                }
                else {
                    break;
                }
            }
            this.onReorder.emit(event);
            listElement.scrollTop = 0;
        }
    };
    OrderList.prototype.moveDown = function (event, listElement) {
        if (this.selectedItems) {
            for (var i = this.selectedItems.length - 1; i >= 0; i--) {
                var selectedItem = this.selectedItems[i];
                var selectedItemIndex = this.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    var movedItem = this.value[selectedItemIndex];
                    var temp = this.value[selectedItemIndex + 1];
                    this.value[selectedItemIndex + 1] = movedItem;
                    this.value[selectedItemIndex] = temp;
                }
                else {
                    break;
                }
            }
            this.movedDown = true;
            this.onReorder.emit(event);
        }
    };
    OrderList.prototype.moveBottom = function (event, listElement) {
        if (this.selectedItems) {
            for (var i = this.selectedItems.length - 1; i >= 0; i--) {
                var selectedItem = this.selectedItems[i];
                var selectedItemIndex = this.findIndexInList(selectedItem, this.value);
                if (selectedItemIndex != (this.value.length - 1)) {
                    var movedItem = this.value.splice(selectedItemIndex, 1)[0];
                    this.value.push(movedItem);
                }
                else {
                    break;
                }
            }
            this.onReorder.emit(event);
            listElement.scrollTop = listElement.scrollHeight;
        }
    };
    OrderList.decorators = [
        { type: Component, args: [{
                    selector: 'p-orderList',
                    template: "\n        <div [ngClass]=\"{'ui-orderlist ui-grid ui-widget':true,'ui-grid-responsive':responsive}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-grid-row\">\n                <div class=\"ui-orderlist-controls ui-grid-col-2\">\n                    <button type=\"button\" pButton icon=\"fa-angle-up\" (click)=\"moveUp($event,listelement)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-double-up\" (click)=\"moveTop($event,listelement)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-down\" (click)=\"moveDown($event,listelement)\"></button>\n                    <button type=\"button\" pButton icon=\"fa-angle-double-down\" (click)=\"moveBottom($event,listelement)\"></button>\n                </div>\n                <div class=\"ui-grid-col-10\">\n                    <div class=\"ui-orderlist-caption ui-widget-header ui-corner-top\" *ngIf=\"header\">{{header}}</div>\n                    <ul #listelement class=\"ui-widget-content ui-orderlist-list ui-corner-bottom\" [ngStyle]=\"listStyle\">\n                        <li *ngFor=\"let item of value\" \n                            [ngClass]=\"{'ui-orderlist-item':true,'ui-state-hover':(hoveredItem==item),'ui-state-highlight':isSelected(item)}\"\n                            (mouseenter)=\"hoveredItem=item\" (mouseleave)=\"hoveredItem=null\" (click)=\"onItemClick($event,item)\">\n                            <template [pTemplateWrapper]=\"itemTemplate\" [item]=\"item\"></template>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    OrderList.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    OrderList.propDecorators = {
        'value': [{ type: Input },],
        'header': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'listStyle': [{ type: Input },],
        'responsive': [{ type: Input },],
        'onReorder': [{ type: Output },],
        'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return OrderList;
}());
export var OrderListModule = (function () {
    function OrderListModule() {
    }
    OrderListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ButtonModule, SharedModule],
                    exports: [OrderList, SharedModule],
                    declarations: [OrderList]
                },] },
    ];
    /** @nocollapse */
    OrderListModule.ctorParameters = [];
    return OrderListModule;
}());
//# sourceMappingURL=orderlist.js.map