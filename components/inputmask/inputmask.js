import { NgModule, Component, ElementRef, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { InputTextModule } from '../inputtext/inputtext';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var INPUTMASK_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return InputMask; }),
    multi: true
};
export var InputMask = (function () {
    function InputMask(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
        this.slotChar = '_';
        this.autoClear = true;
        this.onComplete = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    InputMask.prototype.ngAfterViewInit = function () {
        this.input = this.el.nativeElement.children[0];
        this.tests = [];
        this.partialPosition = this.mask.length;
        this.len = this.mask.length;
        this.firstNonMaskPos = null;
        this.defs = {
            '9': '[0-9]',
            'a': '[A-Za-z]',
            '*': '[A-Za-z0-9]'
        };
        var ua = this.domHandler.getUserAgent();
        this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);
        var maskTokens = this.mask.split('');
        for (var i = 0; i < maskTokens.length; i++) {
            var c = maskTokens[i];
            if (c == '?') {
                this.len--;
                this.partialPosition = i;
            }
            else if (this.defs[c]) {
                this.tests.push(new RegExp(this.defs[c]));
                if (this.firstNonMaskPos === null) {
                    this.firstNonMaskPos = this.tests.length - 1;
                }
                if (i < this.partialPosition) {
                    this.lastRequiredNonMaskPos = this.tests.length - 1;
                }
            }
            else {
                this.tests.push(null);
            }
        }
        this.buffer = [];
        for (var i = 0; i < maskTokens.length; i++) {
            var c = maskTokens[i];
            if (c != '?') {
                if (this.defs[c])
                    this.buffer.push(this.getPlaceholder(i));
                else
                    this.buffer.push(c);
            }
        }
        this.defaultBuffer = this.buffer.join('');
        this.focusText = this.input.value;
        this.checkVal(); //Perform initial check for existing values
    };
    InputMask.prototype.writeValue = function (value) {
        this.value = value;
        if (this.input) {
            if (this.value == undefined || this.value == null) {
                this.input.value = '';
            }
            this.checkVal();
        }
    };
    InputMask.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    InputMask.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    InputMask.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    InputMask.prototype.caret = function (first, last) {
        var range, begin, end;
        if (!this.input.offsetParent || this.input !== document.activeElement) {
            return;
        }
        if (typeof first == 'number') {
            begin = first;
            end = (typeof last === 'number') ? last : begin;
            if (this.input.setSelectionRange) {
                this.input.setSelectionRange(begin, end);
            }
            else if (this.input['createTextRange']) {
                range = this.input['createTextRange']();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        }
        else {
            if (this.input.setSelectionRange) {
                begin = this.input.selectionStart;
                end = this.input.selectionEnd;
            }
            else if (document['selection'] && document['selection'].createRange) {
                range = document['selection'].createRange();
                begin = 0 - range.duplicate().moveStart('character', -100000);
                end = begin + range.text.length;
            }
            return { begin: begin, end: end };
        }
    };
    InputMask.prototype.isCompleted = function () {
        var completed;
        for (var i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
            if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
                return false;
            }
        }
        return true;
    };
    InputMask.prototype.getPlaceholder = function (i) {
        if (i < this.slotChar.length) {
            return this.slotChar.charAt(i);
        }
        return this.slotChar.charAt(0);
    };
    InputMask.prototype.seekNext = function (pos) {
        while (++pos < this.len && !this.tests[pos])
            ;
        return pos;
    };
    InputMask.prototype.seekPrev = function (pos) {
        while (--pos >= 0 && !this.tests[pos])
            ;
        return pos;
    };
    InputMask.prototype.shiftL = function (begin, end) {
        var i, j;
        if (begin < 0) {
            return;
        }
        for (i = begin, j = this.seekNext(end); i < this.len; i++) {
            if (this.tests[i]) {
                if (j < this.len && this.tests[i].test(this.buffer[j])) {
                    this.buffer[i] = this.buffer[j];
                    this.buffer[j] = this.getPlaceholder(j);
                }
                else {
                    break;
                }
                j = this.seekNext(j);
            }
        }
        this.writeBuffer();
        this.caret(Math.max(this.firstNonMaskPos, begin));
    };
    InputMask.prototype.shiftR = function (pos) {
        var i, c, j, t;
        for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
            if (this.tests[i]) {
                j = this.seekNext(i);
                t = this.buffer[i];
                this.buffer[i] = c;
                if (j < this.len && this.tests[j].test(t)) {
                    c = t;
                }
                else {
                    break;
                }
            }
        }
    };
    InputMask.prototype.handleAndroidInput = function (e) {
        var curVal = this.input.value;
        var pos = this.caret();
        if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
            // a deletion or backspace happened
            this.checkVal(true);
            while (pos.begin > 0 && !this.tests[pos.begin - 1])
                pos.begin--;
            if (pos.begin === 0) {
                while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin])
                    pos.begin++;
            }
            this.caret(pos.begin, pos.begin);
        }
        else {
            var pos2 = this.checkVal(true);
            while (pos.begin < this.len && !this.tests[pos.begin])
                pos.begin++;
            this.caret(pos.begin, pos.begin);
        }
        if (this.isCompleted()) {
            this.onComplete.emit();
        }
    };
    InputMask.prototype.onBlur = function (e) {
        this.focus = false;
        this.onModelTouched();
        this.checkVal();
        this.updateModel(e);
        if (this.input.value != this.focusText) {
            var event_1 = document.createEvent('HTMLEvents');
            event_1.initEvent('change', true, false);
            this.input.dispatchEvent(event_1);
        }
    };
    InputMask.prototype.onKeyDown = function (e) {
        if (this.readonly) {
            return;
        }
        var k = e.which || e.keyCode, pos, begin, end;
        var iPhone = /iphone/i.test(this.domHandler.getUserAgent());
        this.oldVal = this.input.value;
        //backspace, delete, and escape get special treatment
        if (k === 8 || k === 46 || (iPhone && k === 127)) {
            pos = this.caret();
            begin = pos.begin;
            end = pos.end;
            if (end - begin === 0) {
                begin = k !== 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1));
                end = k === 46 ? this.seekNext(end) : end;
            }
            this.clearBuffer(begin, end);
            this.shiftL(begin, end - 1);
            this.updateModel(e);
            e.preventDefault();
        }
        else if (k === 13) {
            this.onBlur(e);
            this.updateModel(e);
        }
        else if (k === 27) {
            this.input.value = this.focusText;
            this.caret(0, this.checkVal());
            this.updateModel(e);
            e.preventDefault();
        }
    };
    InputMask.prototype.onKeyPress = function (e) {
        if (this.readonly) {
            return;
        }
        var k = e.which || e.keyCode, pos = this.caret(), p, c, next, completed;
        if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
            return;
        }
        else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
                this.clearBuffer(pos.begin, pos.end);
                this.shiftL(pos.begin, pos.end - 1);
            }
            p = this.seekNext(pos.begin - 1);
            if (p < this.len) {
                c = String.fromCharCode(k);
                if (this.tests[p].test(c)) {
                    this.shiftR(p);
                    this.buffer[p] = c;
                    this.writeBuffer();
                    next = this.seekNext(p);
                    if (/android/i.test(this.domHandler.getUserAgent())) {
                        //Path for CSP Violation on FireFox OS 1.1
                        var proxy = function () {
                            this.caret.bind(this, next)();
                        };
                        setTimeout(proxy, 0);
                    }
                    else {
                        this.caret(next);
                    }
                    if (pos.begin <= this.lastRequiredNonMaskPos) {
                        completed = this.isCompleted();
                    }
                }
            }
            e.preventDefault();
        }
        this.updateModel(e);
        if (completed) {
            this.onComplete.emit();
        }
    };
    InputMask.prototype.clearBuffer = function (start, end) {
        var i;
        for (i = start; i < end && i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
            }
        }
    };
    InputMask.prototype.writeBuffer = function () {
        this.input.value = this.buffer.join('');
    };
    InputMask.prototype.checkVal = function (allow) {
        //try to place characters where they belong
        var test = this.input.value, lastMatch = -1, i, c, pos;
        for (i = 0, pos = 0; i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
                while (pos++ < test.length) {
                    c = test.charAt(pos - 1);
                    if (this.tests[i].test(c)) {
                        this.buffer[i] = c;
                        lastMatch = i;
                        break;
                    }
                }
                if (pos > test.length) {
                    this.clearBuffer(i + 1, this.len);
                    break;
                }
            }
            else {
                if (this.buffer[i] === test.charAt(pos)) {
                    pos++;
                }
                if (i < this.partialPosition) {
                    lastMatch = i;
                }
            }
        }
        if (allow) {
            this.writeBuffer();
        }
        else if (lastMatch + 1 < this.partialPosition) {
            if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
                // Invalid value. Remove it and replace it with the
                // mask, which is the default behavior.
                if (this.input.value)
                    this.input.value = '';
                this.clearBuffer(0, this.len);
            }
            else {
                // Invalid value, but we opt to show the value to the
                // user and allow them to correct their mistake.
                this.writeBuffer();
            }
        }
        else {
            this.writeBuffer();
            this.input.value = this.input.value.substring(0, lastMatch + 1);
        }
        return (this.partialPosition ? i : this.firstNonMaskPos);
    };
    InputMask.prototype.onFocus = function (event) {
        var _this = this;
        if (this.readonly) {
            return;
        }
        this.focus = true;
        clearTimeout(this.caretTimeoutId);
        var pos;
        this.focusText = this.input.value;
        pos = this.checkVal();
        this.caretTimeoutId = setTimeout(function () {
            if (_this.input !== document.activeElement) {
                return;
            }
            _this.writeBuffer();
            if (pos == _this.mask.replace("?", "").length) {
                _this.caret(0, pos);
            }
            else {
                _this.caret(pos);
            }
        }, 10);
    };
    InputMask.prototype.onInput = function (event) {
        if (this.androidChrome)
            this.handleAndroidInput(event);
        else
            this.handleInputChange(event);
    };
    InputMask.prototype.handleInputChange = function (event) {
        var _this = this;
        if (this.readonly) {
            return;
        }
        setTimeout(function () {
            var pos = _this.checkVal(true);
            _this.caret(pos);
            _this.updateModel(event);
            if (_this.isCompleted()) {
                _this.onComplete.emit();
            }
        }, 0);
    };
    InputMask.prototype.getUnmaskedValue = function () {
        var unmaskedBuffer = [];
        for (var i = 0; i < this.buffer.length; i++) {
            var c = this.buffer[i];
            if (this.tests[i] && c != this.getPlaceholder(i)) {
                unmaskedBuffer.push(c);
            }
        }
        return unmaskedBuffer.join('');
    };
    Object.defineProperty(InputMask.prototype, "filled", {
        get: function () {
            return this.input && this.input.value != '';
        },
        enumerable: true,
        configurable: true
    });
    InputMask.prototype.updateModel = function (e) {
        this.onModelChange(this.unmask ? this.getUnmaskedValue() : e.target.value);
    };
    InputMask.prototype.ngOnDestroy = function () {
    };
    InputMask.decorators = [
        { type: Component, args: [{
                    selector: 'p-inputMask',
                    template: "<input pInputText type=\"text\" [name]=\"name\" [value]=\"value||''\" [ngStyle]=\"style\" [ngClass]=\"styleClass\" [placeholder]=\"placeholder\"\n        [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [disabled]=\"disabled\" [readonly]=\"readonly\"\n        (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" (keydown)=\"onKeyDown($event)\" (keypress)=\"onKeyPress($event)\"\n        (input)=\"onInput($event)\" (paste)=\"handleInputChange($event)\">",
                    host: {
                        '[class.ui-inputwrapper-filled]': 'filled',
                        '[class.ui-inputwrapper-focus]': 'focus'
                    },
                    providers: [INPUTMASK_VALUE_ACCESSOR, DomHandler]
                },] },
    ];
    /** @nocollapse */
    InputMask.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
    ];
    InputMask.propDecorators = {
        'mask': [{ type: Input },],
        'slotChar': [{ type: Input },],
        'autoClear': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'size': [{ type: Input },],
        'maxlength': [{ type: Input },],
        'tabindex': [{ type: Input },],
        'disabled': [{ type: Input },],
        'readonly': [{ type: Input },],
        'unmask': [{ type: Input },],
        'name': [{ type: Input },],
        'onComplete': [{ type: Output },],
    };
    return InputMask;
}());
export var InputMaskModule = (function () {
    function InputMaskModule() {
    }
    InputMaskModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, InputTextModule],
                    exports: [InputMask],
                    declarations: [InputMask]
                },] },
    ];
    /** @nocollapse */
    InputMaskModule.ctorParameters = [];
    return InputMaskModule;
}());
//# sourceMappingURL=inputmask.js.map