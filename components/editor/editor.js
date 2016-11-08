import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChild, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../common/shared';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var EDITOR_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Editor; }),
    multi: true
};
export var Editor = (function () {
    function Editor(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.onTextChange = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Editor.prototype.ngAfterViewInit = function () {
        var _this = this;
        var editorElement = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-editor-content');
        var toolbarElement = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-editor-toolbar');
        this.quill = new Quill(editorElement, {
            modules: {
                toolbar: toolbarElement
            },
            placeholder: this.placeholder,
            readOnly: this.readOnly,
            theme: 'snow',
            formats: this.formats
        });
        if (this.value) {
            this.quill.pasteHTML(this.value);
        }
        this.quill.on('text-change', function (delta, source) {
            var html = editorElement.children[0].innerHTML;
            var text = _this.quill.getText();
            if (html == '<p><br></p>') {
                html = null;
            }
            _this.onTextChange.emit({
                htmlValue: html,
                textValue: text,
                delta: delta,
                source: source
            });
            _this.onModelChange(html);
        });
        this.quill.on('selection-change', function (range, oldRange, source) {
            _this.onSelectionChange.emit({
                range: range,
                oldRange: oldRange,
                source: source
            });
        });
    };
    Editor.prototype.writeValue = function (value) {
        this.value = value;
        if (this.quill) {
            if (value)
                this.quill.pasteHTML(value);
            else
                this.quill.setText('');
        }
    };
    Editor.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Editor.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Editor.decorators = [
        { type: Component, args: [{
                    selector: 'p-editor',
                    template: "\n        <div [ngClass]=\"'ui-widget ui-editor-container ui-corner-all'\" [class]=\"styleClass\">\n            <div class=\"ui-editor-toolbar ui-widget-header ui-corner-top\" *ngIf=\"toolbar\">\n                <ng-content select=\"header\"></ng-content>\n            </div>\n            <div class=\"ui-editor-toolbar ui-widget-header ui-corner-top\" *ngIf=\"!toolbar\">\n                <span class=\"ql-formats\">\n                    <select class=\"ql-header\">\n                      <option value=\"1\">Heading</option>\n                      <option value=\"2\">Subheading</option>\n                      <option selected>Normal</option>\n                    </select>\n                    <select class=\"ql-font\">\n                      <option selected>Sans Serif</option>\n                      <option value=\"serif\">Serif</option>\n                      <option value=\"monospace\">Monospace</option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-bold\"></button>\n                    <button class=\"ql-italic\"></button>\n                    <button class=\"ql-underline\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <select class=\"ql-color\"></select>\n                    <select class=\"ql-background\"></select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-list\" value=\"ordered\"></button>\n                    <button class=\"ql-list\" value=\"bullet\"></button>\n                    <select class=\"ql-align\">\n                        <option selected></option>\n                        <option value=\"center\"></option>\n                        <option value=\"right\"></option>\n                        <option value=\"justify\"></option>\n                    </select>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-link\"></button>\n                    <button class=\"ql-image\"></button>\n                    <button class=\"ql-code-block\"></button>\n                </span>\n                <span class=\"ql-formats\">\n                    <button class=\"ql-clean\"></button>\n                </span>\n            </div>\n            <div class=\"ui-editor-content\" [ngStyle]=\"style\"></div>\n        </div>\n    ",
                    providers: [DomHandler, EDITOR_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Editor.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    Editor.propDecorators = {
        'onTextChange': [{ type: Output },],
        'onSelectionChange': [{ type: Output },],
        'toolbar': [{ type: ContentChild, args: [Header,] },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'readOnly': [{ type: Input },],
        'formats': [{ type: Input },],
    };
    return Editor;
}());
export var EditorModule = (function () {
    function EditorModule() {
    }
    EditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Editor],
                    declarations: [Editor]
                },] },
    ];
    /** @nocollapse */
    EditorModule.ctorParameters = [];
    return EditorModule;
}());
//# sourceMappingURL=editor.js.map