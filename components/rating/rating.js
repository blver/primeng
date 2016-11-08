import { NgModule, Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var RATING_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Rating; }),
    multi: true
};
export var Rating = (function () {
    function Rating() {
        this.stars = 5;
        this.cancel = true;
        this.onRate = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Rating.prototype.ngOnInit = function () {
        this.starsArray = [];
        for (var i = 0; i < this.stars; i++) {
            this.starsArray[i] = i;
        }
    };
    Rating.prototype.rate = function (event, i) {
        if (!this.readonly && !this.disabled) {
            this.value = (i + 1);
            this.onModelChange(this.value);
            this.onModelTouched();
            this.onRate.emit({
                originalEvent: event,
                value: (i + 1)
            });
        }
    };
    Rating.prototype.clear = function (event) {
        if (!this.readonly && !this.disabled) {
            this.value = null;
            this.onModelChange(this.value);
            this.onModelTouched();
            this.onCancel.emit(event);
        }
    };
    Rating.prototype.writeValue = function (value) {
        this.value = value;
    };
    Rating.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Rating.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Rating.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Rating.decorators = [
        { type: Component, args: [{
                    selector: 'p-rating',
                    template: "\n        <div class=\"ui-rating\" [ngClass]=\"{'ui-state-disabled': disabled}\">\n            <div class=\"ui-rating-cancel\" *ngIf=\"cancel\" (click)=\"clear($event)\" [ngClass]=\"{'ui-rating-cancel-hover':hoverCancel}\"\n             (mouseenter)=\"hoverCancel=true\" (mouseleave)=\"hoverCancel=false\"><a></a></div>\n            <div class=\"ui-rating-star\" *ngFor=\"let star of starsArray;let i=index\" (click)=\"rate($event,i)\"\n             [ngClass]=\"{'ui-rating-star-on':(i < value)}\"><a></a></div>\n        </div>\n    ",
                    providers: [RATING_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Rating.ctorParameters = [];
    Rating.propDecorators = {
        'disabled': [{ type: Input },],
        'readonly': [{ type: Input },],
        'stars': [{ type: Input },],
        'cancel': [{ type: Input },],
        'onRate': [{ type: Output },],
        'onCancel': [{ type: Output },],
    };
    return Rating;
}());
export var RatingModule = (function () {
    function RatingModule() {
    }
    RatingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Rating],
                    declarations: [Rating]
                },] },
    ];
    /** @nocollapse */
    RatingModule.ctorParameters = [];
    return RatingModule;
}());
//# sourceMappingURL=rating.js.map