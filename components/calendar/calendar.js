import { NgModule, Component, ElementRef, Input, Output, EventEmitter, forwardRef, Renderer, trigger, state, style, transition, animate } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button';
import { InputTextModule } from '../inputtext/inputtext';
import { DomHandler } from '../dom/domhandler';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CALENDAR_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Calendar; }),
    multi: true
};
export var Calendar = (function () {
    function Calendar(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.dateFormat = 'mm/dd/yy';
        this.inline = false;
        this.showOtherMonths = true;
        this.icon = 'fa-calendar';
        this.shortYearCutoff = '+10';
        this.hourFormat = '24';
        this.onBlur = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.locale = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        };
        this.weekDays = [];
        this.closeOverlay = true;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Calendar.prototype.ngOnInit = function () {
        var _this = this;
        var today = new Date();
        var date = this.defaultDate || new Date();
        var dayIndex = this.locale.firstDayOfWeek;
        for (var i = 0; i < 7; i++) {
            this.weekDays.push(this.locale.dayNamesMin[dayIndex]);
            dayIndex = (dayIndex == 6) ? 0 : ++dayIndex;
        }
        this.currentMonth = date.getMonth();
        this.currentYear = date.getFullYear();
        if (this.showTime) {
            this.currentMinute = date.getMinutes();
            this.pm = date.getHours() > 11;
            if (this.hourFormat == '12')
                this.currentHour = date.getHours() == 0 ? 12 : date.getHours() % 12;
            else
                this.currentHour = date.getHours();
        }
        else if (this.timeOnly) {
            this.currentMinute = 0;
            this.currentHour = 0;
        }
        this.createMonth(this.currentMonth, this.currentYear);
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
            if (_this.closeOverlay) {
                _this.overlayVisible = false;
            }
            _this.closeOverlay = true;
            _this.dateClick = false;
        });
        this.ticksTo1970 = (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
            Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000);
        if (this.yearNavigator && this.yearRange) {
            this.yearOptions = [];
            var years = this.yearRange.split(':'), yearStart = parseInt(years[0]), yearEnd = parseInt(years[1]);
            for (var i = yearStart; i <= yearEnd; i++) {
                this.yearOptions.push(i);
            }
        }
    };
    Calendar.prototype.ngAfterViewInit = function () {
        this.overlay = this.domHandler.findSingle(this.el.nativeElement, '.ui-datepicker');
        if (!this.inline) {
            this.inputfield = this.el.nativeElement.children[0].children[0];
        }
        if (!this.inline && this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                this.appendTo.appendChild(this.overlay);
        }
    };
    Calendar.prototype.createMonth = function (month, year) {
        this.dates = [];
        this.currentMonth = month;
        this.currentYear = year;
        this.currentMonthText = this.locale.monthNames[month];
        var firstDay = this.getFirstDayOfMonthIndex(month, year);
        var daysLength = this.getDaysCountInMonth(month, year);
        var prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
        var sundayIndex = this.getSundayIndex();
        var dayNo = 1;
        for (var i = 0; i < 6; i++) {
            var week = [];
            if (i == 0) {
                for (var j = (prevMonthDaysLength - firstDay + 1); j <= prevMonthDaysLength; j++) {
                    var prev = this.getPreviousMonthAndYear(month, year);
                    week.push({ day: j, month: prev.month, year: prev.year, otherMonth: true, selectable: this.isSelectable(j, prev.month, prev.year) });
                }
                var remainingDaysLength = 7 - week.length;
                for (var j = 0; j < remainingDaysLength; j++) {
                    week.push({ day: dayNo, month: month, year: year, selectable: this.isSelectable(dayNo, month, year) });
                    dayNo++;
                }
            }
            else {
                for (var j = 0; j < 7; j++) {
                    if (dayNo > daysLength) {
                        var next = this.getPreviousMonthAndYear(month, year);
                        week.push({ day: dayNo - daysLength, month: next.month, year: next.year, otherMonth: true,
                            selectable: this.isSelectable((dayNo - daysLength), next.month, next.year) });
                    }
                    else {
                        week.push({ day: dayNo, month: month, year: year, selectable: this.isSelectable(dayNo, month, year) });
                    }
                    dayNo++;
                }
            }
            this.dates.push(week);
        }
    };
    Calendar.prototype.prevMonth = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        else {
            this.currentMonth--;
        }
        this.createMonth(this.currentMonth, this.currentYear);
        event.preventDefault();
    };
    Calendar.prototype.nextMonth = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        else {
            this.currentMonth++;
        }
        this.createMonth(this.currentMonth, this.currentYear);
        event.preventDefault();
    };
    Calendar.prototype.onDateSelect = function (event, dateMeta) {
        if (this.disabled || !dateMeta.selectable) {
            event.preventDefault();
            return;
        }
        if (dateMeta.otherMonth) {
            if (this.selectOtherMonths)
                this.selectDate(dateMeta);
        }
        else {
            this.selectDate(dateMeta);
        }
        this.dateClick = true;
        this.updateInputfield();
        event.preventDefault();
    };
    Calendar.prototype.updateInputfield = function () {
        if (this.inputfield) {
            if (this.value) {
                var formattedValue = void 0;
                if (this.timeOnly) {
                    formattedValue = this.formatTime(this.value);
                }
                else {
                    formattedValue = this.formatDate(this.value, this.dateFormat);
                    if (this.showTime) {
                        formattedValue += ' ' + this.formatTime(this.value);
                    }
                }
                this.inputfield.value = formattedValue;
            }
            else {
                this.inputfield.value = '';
            }
        }
    };
    Calendar.prototype.selectDate = function (dateMeta) {
        this.value = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        if (this.showTime) {
            if (this.hourFormat === '12' && this.pm && this.currentHour != 12)
                this.value.setHours(this.currentHour + 12);
            else
                this.value.setHours(this.currentHour);
            this.value.setMinutes(this.currentMinute);
        }
        this.onModelChange(this.value);
        this.onSelect.emit(this.value);
    };
    Calendar.prototype.getFirstDayOfMonthIndex = function (month, year) {
        var day = new Date();
        day.setDate(1);
        day.setMonth(month);
        day.setFullYear(year);
        var dayIndex = day.getDay() + this.getSundayIndex();
        return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    };
    Calendar.prototype.getDaysCountInMonth = function (month, year) {
        return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
    };
    Calendar.prototype.getDaysCountInPrevMonth = function (month, year) {
        var prev = this.getPreviousMonthAndYear(month, year);
        return this.getDaysCountInMonth(prev.month, prev.year);
    };
    Calendar.prototype.getPreviousMonthAndYear = function (month, year) {
        var m, y;
        if (month === 0) {
            m = 11;
            y = year - 1;
        }
        else {
            m = month - 1;
            y = year;
        }
        return { 'month': m, 'year': y };
    };
    Calendar.prototype.getNextMonthAndYear = function (month, year) {
        var m, y;
        if (month === 11) {
            m = 0;
            y = year + 1;
        }
        else {
            m = month + 1;
        }
        return { 'month': m, 'year': y };
    };
    Calendar.prototype.getSundayIndex = function () {
        return this.locale.firstDayOfWeek > 0 ? 7 - this.locale.firstDayOfWeek : 0;
    };
    Calendar.prototype.isSelected = function (dateMeta) {
        if (this.value)
            return this.value.getDate() === dateMeta.day && this.value.getMonth() === dateMeta.month && this.value.getFullYear() === dateMeta.year;
        else
            return false;
    };
    Calendar.prototype.isToday = function (dateMeta) {
        var today = new Date();
        return today.getDate() === dateMeta.day && today.getMonth() === dateMeta.month && today.getFullYear() === dateMeta.year;
    };
    Calendar.prototype.isSelectable = function (day, month, year) {
        var validMin = true;
        var validMax = true;
        if (this.minDate) {
            if (this.minDate.getFullYear() > year) {
                validMin = false;
            }
            else if (this.minDate.getFullYear() === year) {
                if (this.minDate.getMonth() > month) {
                    validMin = false;
                }
                else if (this.minDate.getMonth() === month) {
                    if (this.minDate.getDate() > day) {
                        validMin = false;
                    }
                }
            }
        }
        if (this.maxDate) {
            if (this.maxDate.getFullYear() < year) {
                validMax = false;
            }
            else if (this.maxDate.getFullYear() === year) {
                if (this.maxDate.getMonth() < month) {
                    validMax = false;
                }
                else if (this.maxDate.getMonth() === month) {
                    if (this.maxDate.getDate() < day) {
                        validMax = false;
                    }
                }
            }
        }
        return validMin && validMax;
    };
    Calendar.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.showOverlay(event);
    };
    Calendar.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onBlur.emit(event);
        this.onModelTouched();
    };
    Calendar.prototype.onButtonClick = function (event) {
        this.closeOverlay = false;
        if (!this.overlay.offsetParent) {
            this.inputfield.focus();
        }
        else {
            this.closeOverlay = true;
        }
    };
    Calendar.prototype.onInputKeydown = function (event) {
        if (event.keyCode === 9) {
            this.overlayVisible = false;
        }
    };
    Calendar.prototype.onMonthDropdownChange = function (m) {
        this.currentMonth = parseInt(m);
        this.createMonth(this.currentMonth, this.currentYear);
    };
    Calendar.prototype.onYearDropdownChange = function (y) {
        this.currentYear = parseInt(y);
        this.createMonth(this.currentMonth, this.currentYear);
    };
    Calendar.prototype.incrementHour = function (event) {
        if (this.hourFormat == '24') {
            if (this.currentHour === 23)
                this.currentHour = 0;
            else
                this.currentHour++;
        }
        else if (this.hourFormat == '12') {
            if (this.currentHour === 12)
                this.currentHour = 0;
            else
                this.currentHour++;
        }
        this.updateTime();
        event.preventDefault();
    };
    Calendar.prototype.decrementHour = function (event) {
        if (this.hourFormat == '24') {
            if (this.currentHour === 0)
                this.currentHour = 23;
            else
                this.currentHour--;
        }
        else if (this.hourFormat == '12') {
            if (this.currentHour === 0)
                this.currentHour = 12;
            else
                this.currentHour--;
        }
        this.updateTime();
        event.preventDefault();
    };
    Calendar.prototype.incrementMinute = function (event) {
        if (this.currentMinute === 59)
            this.currentMinute = 0;
        else
            this.currentMinute++;
        this.updateTime();
        event.preventDefault();
    };
    Calendar.prototype.decrementMinute = function (event) {
        if (this.currentMinute === 0)
            this.currentMinute = 59;
        else
            this.currentMinute--;
        this.updateTime();
        event.preventDefault();
    };
    Calendar.prototype.updateTime = function () {
        this.value = this.value || new Date();
        if (this.hourFormat === '12' && this.pm && this.currentHour != 12)
            this.value.setHours(this.currentHour + 12);
        else
            this.value.setHours(this.currentHour);
        this.value.setMinutes(this.currentMinute);
        this.onModelChange(this.value);
        this.updateInputfield();
    };
    Calendar.prototype.toggleAMPM = function (event) {
        this.pm = !this.pm;
        this.updateTime();
        event.preventDefault();
    };
    Calendar.prototype.onInput = function (event) {
        try {
            var rawValue = event.target.value;
            var parsedValue = void 0;
            var parts = rawValue.split(' ');
            if (this.timeOnly) {
                parsedValue = new Date();
                this.populateTime(parsedValue, parts[0], parts[1]);
            }
            else {
                if (this.showTime) {
                    parsedValue = this.parseDate(parts[0], this.dateFormat);
                    this.populateTime(parsedValue, parts[1], parts[2]);
                }
                else {
                    parsedValue = this.parseDate(event.target.value, this.dateFormat);
                }
            }
            this.value = parsedValue;
            this.updateUI();
        }
        catch (err) {
            //invalid date
            this.value = null;
        }
        this.onModelChange(this.value);
    };
    Calendar.prototype.populateTime = function (value, timeString, ampm) {
        var time = this.parseTime(timeString);
        if (this.hourFormat == '12') {
            if (!ampm)
                throw 'Invalid Time';
            else if (ampm.toLowerCase() === 'PM' && time.hour != 12)
                value.setHours(time.hour + 12);
        }
        else {
            value.setHours(time.hour);
        }
        value.setMinutes(time.minute);
    };
    Calendar.prototype.updateUI = function () {
        var val = this.value || this.defaultDate || new Date();
        this.createMonth(val.getMonth(), val.getFullYear());
        if (this.showTime || this.timeOnly) {
            this.currentHour = val.getHours();
            this.currentMinute = val.getMinutes();
        }
    };
    Calendar.prototype.onDatePickerClick = function (event) {
        this.closeOverlay = this.dateClick;
    };
    Calendar.prototype.showOverlay = function (event) {
        if (this.appendTo)
            this.domHandler.absolutePosition(this.overlay, event.target);
        else
            this.domHandler.relativePosition(this.overlay, event.target);
        this.overlayVisible = true;
        this.overlay.style.zIndex = String(++DomHandler.zindex);
    };
    Calendar.prototype.writeValue = function (value) {
        this.value = value;
        this.updateInputfield();
        this.updateUI();
    };
    Calendar.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Calendar.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Calendar.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    // Ported from jquery-ui datepicker formatDate    
    Calendar.prototype.formatDate = function (date, format) {
        if (!date) {
            return "";
        }
        var iFormat, lookAhead = function (match) {
            var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
            if (matches) {
                iFormat++;
            }
            return matches;
        }, formatNumber = function (match, value, len) {
            var num = "" + value;
            if (lookAhead(match)) {
                while (num.length < len) {
                    num = "0" + num;
                }
            }
            return num;
        }, formatName = function (match, value, shortNames, longNames) {
            return (lookAhead(match) ? longNames[value] : shortNames[value]);
        }, output = "", literal = false;
        if (date) {
            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'"))
                        literal = false;
                    else
                        output += format.charAt(iFormat);
                }
                else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                            output += formatNumber("d", date.getDate(), 2);
                            break;
                        case "D":
                            output += formatName("D", date.getDay(), this.locale.dayNamesShort, this.locale.dayNames);
                            break;
                        case "o":
                            output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                            break;
                        case "m":
                            output += formatNumber("m", date.getMonth() + 1, 2);
                            break;
                        case "M":
                            output += formatName("M", date.getMonth(), this.locale.monthNamesShort, this.locale.monthNames);
                            break;
                        case "y":
                            output += (lookAhead("y") ? date.getFullYear() :
                                (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100);
                            break;
                        case "@":
                            output += date.getTime();
                            break;
                        case "!":
                            output += date.getTime() * 10000 + this.ticksTo1970;
                            break;
                        case "'":
                            if (lookAhead("'"))
                                output += "'";
                            else
                                literal = true;
                            break;
                        default:
                            output += format.charAt(iFormat);
                    }
                }
            }
        }
        return output;
    };
    Calendar.prototype.formatTime = function (date) {
        if (!date) {
            return '';
        }
        var output = '';
        var hours = date.getHours();
        var minutes = date.getMinutes();
        if (this.hourFormat == '12' && this.pm && hours != 12) {
            hours -= 12;
        }
        output += (hours < 10) ? '0' + hours : hours;
        output += ':';
        output += (minutes < 10) ? '0' + minutes : minutes;
        if (this.hourFormat == '12') {
            output += this.pm ? ' PM' : ' AM';
        }
        return output;
    };
    Calendar.prototype.parseTime = function (value) {
        var tokens = value.split(':');
        if (tokens.length !== 2) {
            throw "Invalid time";
        }
        var h = parseInt(tokens[0]);
        var m = parseInt(tokens[1]);
        if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || (this.hourFormat == '12' && h > 12)) {
            throw "Invalid time";
        }
        else {
            if (this.hourFormat == '12' && h !== 12) {
                h += 12;
            }
            return { hour: parseInt(tokens[0]), minute: parseInt(tokens[1]) };
        }
    };
    // Ported from jquery-ui datepicker parseDate 
    Calendar.prototype.parseDate = function (value, format) {
        if (format == null || value == null) {
            throw "Invalid arguments";
        }
        value = (typeof value === "object" ? value.toString() : value + "");
        if (value === "") {
            return null;
        }
        var iFormat, dim, extra, iValue = 0, shortYearCutoff = (typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.shortYearCutoff, 10)), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function (match) {
            var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
            if (matches) {
                iFormat++;
            }
            return matches;
        }, getNumber = function (match) {
            var isDoubled = lookAhead(match), size = (match === "@" ? 14 : (match === "!" ? 20 :
                (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))), minSize = (match === "y" ? size : 1), digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
            if (!num) {
                throw "Missing number at position " + iValue;
            }
            iValue += num[0].length;
            return parseInt(num[0], 10);
        }, getName = function (match, shortNames, longNames) {
            var index = -1;
            var arr = lookAhead(match) ? longNames : shortNames;
            var names = [];
            for (var i = 0; i < arr.length; i++) {
                names.push([i, arr[i]]);
            }
            names.sort(function (a, b) {
                return -(a[1].length - b[1].length);
            });
            for (var i = 0; i < names.length; i++) {
                var name_1 = names[i][1];
                if (value.substr(iValue, name_1.length).toLowerCase() === name_1.toLowerCase()) {
                    index = names[i][0];
                    iValue += name_1.length;
                    break;
                }
            }
            if (index !== -1) {
                return index + 1;
            }
            else {
                throw "Unknown name at position " + iValue;
            }
        }, checkLiteral = function () {
            if (value.charAt(iValue) !== format.charAt(iFormat)) {
                throw "Unexpected literal at position " + iValue;
            }
            iValue++;
        };
        for (iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
                if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                    literal = false;
                }
                else {
                    checkLiteral();
                }
            }
            else {
                switch (format.charAt(iFormat)) {
                    case "d":
                        day = getNumber("d");
                        break;
                    case "D":
                        getName("D", this.locale.dayNamesShort, this.locale.dayNames);
                        break;
                    case "o":
                        doy = getNumber("o");
                        break;
                    case "m":
                        month = getNumber("m");
                        break;
                    case "M":
                        month = getName("M", this.locale.monthNamesShort, this.locale.monthNames);
                        break;
                    case "y":
                        year = getNumber("y");
                        break;
                    case "@":
                        date = new Date(getNumber("@"));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "!":
                        date = new Date((getNumber("!") - this.ticksTo1970) / 10000);
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "'":
                        if (lookAhead("'")) {
                            checkLiteral();
                        }
                        else {
                            literal = true;
                        }
                        break;
                    default:
                        checkLiteral();
                }
            }
        }
        if (iValue < value.length) {
            extra = value.substr(iValue);
            if (!/^\s+/.test(extra)) {
                throw "Extra/unparsed characters found in date: " + extra;
            }
        }
        if (year === -1) {
            year = new Date().getFullYear();
        }
        else if (year < 100) {
            year += new Date().getFullYear() - new Date().getFullYear() % 100 +
                (year <= shortYearCutoff ? 0 : -100);
        }
        if (doy > -1) {
            month = 1;
            day = doy;
            do {
                dim = this.getDaysCountInMonth(year, month - 1);
                if (day <= dim) {
                    break;
                }
                month++;
                day -= dim;
            } while (true);
        }
        date = this.daylightSavingAdjust(new Date(year, month - 1, day));
        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
            throw "Invalid date"; // E.g. 31/02/00
        }
        return date;
    };
    Calendar.prototype.daylightSavingAdjust = function (date) {
        if (!date) {
            return null;
        }
        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
        return date;
    };
    Object.defineProperty(Calendar.prototype, "filled", {
        get: function () {
            return this.inputfield != undefined && this.inputfield.value != '';
        },
        enumerable: true,
        configurable: true
    });
    Calendar.prototype.ngOnDestroy = function () {
        if (!this.inline && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    Calendar.decorators = [
        { type: Component, args: [{
                    selector: 'p-calendar',
                    template: "\n        <span [ngClass]=\"{'ui-calendar':true,'ui-calendar-w-btn':showIcon}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <input type=\"text\" pInputText *ngIf=\"!inline\" (focus)=\"onInputFocus($event)\" (keydown)=\"onInputKeydown($event)\" (click)=\"closeOverlay=false\" (blur)=\"onInputBlur($event)\"\n                    [readonly]=\"readonlyInput\" (input)=\"onInput($event)\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" [placeholder]=\"placeholder||''\" [disabled]=\"disabled\"\n                    ><button type=\"button\" [icon]=\"icon\" pButton *ngIf=\"showIcon\" (click)=\"onButtonClick($event)\"\n                    [ngClass]=\"{'ui-datepicker-trigger':true,'ui-state-disabled':disabled}\" [disabled]=\"disabled\"></button>\n            <div class=\"ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\" [ngClass]=\"{'ui-datepicker-inline':inline,'ui-shadow':!inline,'ui-state-disabled':disabled}\" \n                [ngStyle]=\"{'display': inline ? 'inline-block' : (overlayVisible ? 'block' : 'none')}\" (click)=\"onDatePickerClick($event)\" [@overlayState]=\"inline ? 'visible' : (overlayVisible ? 'visible' : 'hidden')\">\n                <div class=\"ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all\" *ngIf=\"!timeOnly\">\n                    <a class=\"ui-datepicker-prev ui-corner-all\" href=\"#\" (click)=\"prevMonth($event)\" (mouseenter)=\"hoverPrev=true\" (mouseleave)=\"hoverPrev=false\"\n                            [ngClass]=\"{'ui-state-hover ui-datepicker-prev-hover':hoverPrev&&!disabled}\">\n                        <span class=\"fa fa-angle-left\"></span>\n                    </a>\n                    <a class=\"ui-datepicker-next ui-corner-all\" href=\"#\" (click)=\"nextMonth($event)\" (mouseenter)=\"hoverNext=true\" (mouseleave)=\"hoverNext=false\"\n                            [ngClass]=\"{'ui-state-hover ui-datepicker-next-hover':hoverNext&&!disabled}\">\n                        <span class=\"fa fa-angle-right\"></span>\n                    </a>\n                    <div class=\"ui-datepicker-title\">\n                        <span class=\"ui-datepicker-month\" *ngIf=\"!monthNavigator\">{{currentMonthText}}</span>\n                        <select class=\"ui-datepicker-month\" *ngIf=\"monthNavigator\" (change)=\"onMonthDropdownChange($event.target.value)\">\n                            <option [value]=\"i\" *ngFor=\"let month of locale.monthNames;let i = index\" [selected]=\"i == currentMonth\">{{month}}</option>\n                        </select>\n                        <select class=\"ui-datepicker-year\" *ngIf=\"yearNavigator\" (change)=\"onYearDropdownChange($event.target.value)\">\n                            <option [value]=\"year\" *ngFor=\"let year of yearOptions\" [selected]=\"year == currentYear\">{{year}}</option>\n                        </select>\n                        <span class=\"ui-datepicker-year\" *ngIf=\"!yearNavigator\">{{currentYear}}</span>\n                    </div>\n                </div>\n                <table class=\"ui-datepicker-calendar\" *ngIf=\"!timeOnly\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\" *ngFor=\"let weekDay of weekDays;let begin = first; let end = last\">\n                                <span>{{weekDay}}</span>\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let week of dates\">\n                            <td *ngFor=\"let date of week\" [ngClass]=\"{'ui-datepicker-other-month ui-state-disabled':date.otherMonth,\n                                'ui-datepicker-current-day':isSelected(date),'ui-datepicker-today':isToday(date)}\">\n                                <a #cell class=\"ui-state-default\" href=\"#\" *ngIf=\"date.otherMonth ? showOtherMonths : true\" \n                                        [ngClass]=\"{'ui-state-active':isSelected(date),'ui-state-hover':(hoverCell == cell && !disabled && date.selectable),\n                                            'ui-state-highlight':isToday(date),'ui-state-disabled':!date.selectable}\"\n                                        (click)=\"onDateSelect($event,date)\" (mouseenter)=\"hoverCell=cell\" (mouseleave)=\"hoverCell=null\">{{date.day}}</a>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"ui-timepicker ui-widget-header\" *ngIf=\"showTime||timeOnly\">\n                    <div class=\"ui-hour-picker\">\n                        <a href=\"#\" (click)=\"incrementHour($event)\">\n                            <span class=\"fa fa-angle-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentHour < 10 ? 'inline': 'none'}\">0</span><span>{{currentHour}}</span>\n                        <a href=\"#\" (click)=\"decrementHour($event)\">\n                            <span class=\"fa fa-angle-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-separator\">\n                        <a href=\"#\">\n                            <span class=\"fa fa-angle-up\"></span>\n                        </a>\n                        <span>:</span>\n                        <a href=\"#\">\n                            <span class=\"fa fa-angle-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-minute-picker\">\n                        <a href=\"#\" (click)=\"incrementMinute($event)\">\n                            <span class=\"fa fa-angle-up\"></span>\n                        </a>\n                        <span [ngStyle]=\"{'display': currentMinute < 10 ? 'inline': 'none'}\">0</span><span>{{currentMinute}}</span>\n                        <a href=\"#\" (click)=\"decrementMinute($event)\">\n                            <span class=\"fa fa-angle-down\"></span>\n                        </a>\n                    </div>\n                    <div class=\"ui-ampm-picker\" *ngIf=\"hourFormat=='12'\">\n                        <a href=\"#\" (click)=\"toggleAMPM($event)\">\n                            <span class=\"fa fa-angle-up\"></span>\n                        </a>\n                        <span>{{pm ? 'PM' : 'AM'}}</span>\n                        <a href=\"#\" (click)=\"toggleAMPM($event)\">\n                            <span class=\"fa fa-angle-down\"></span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </span>\n    ",
                    animations: [
                        trigger('overlayState', [
                            state('hidden', style({
                                opacity: 0
                            })),
                            state('visible', style({
                                opacity: 1
                            })),
                            transition('visible => hidden', animate('400ms ease-in')),
                            transition('hidden => visible', animate('400ms ease-out'))
                        ])
                    ],
                    host: {
                        '[class.ui-inputwrapper-filled]': 'filled',
                        '[class.ui-inputwrapper-focus]': 'focus'
                    },
                    providers: [DomHandler, CALENDAR_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Calendar.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: Renderer, },
    ];
    Calendar.propDecorators = {
        'defaultDate': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'inputStyle': [{ type: Input },],
        'inputStyleClass': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'disabled': [{ type: Input },],
        'dateFormat': [{ type: Input },],
        'inline': [{ type: Input },],
        'showOtherMonths': [{ type: Input },],
        'selectOtherMonths': [{ type: Input },],
        'showIcon': [{ type: Input },],
        'icon': [{ type: Input },],
        'appendTo': [{ type: Input },],
        'readonlyInput': [{ type: Input },],
        'shortYearCutoff': [{ type: Input },],
        'minDate': [{ type: Input },],
        'maxDate': [{ type: Input },],
        'monthNavigator': [{ type: Input },],
        'yearNavigator': [{ type: Input },],
        'yearRange': [{ type: Input },],
        'showTime': [{ type: Input },],
        'hourFormat': [{ type: Input },],
        'timeOnly': [{ type: Input },],
        'onBlur': [{ type: Output },],
        'onSelect': [{ type: Output },],
        'locale': [{ type: Input },],
    };
    return Calendar;
}());
export var CalendarModule = (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ButtonModule, InputTextModule],
                    exports: [Calendar, ButtonModule, InputTextModule],
                    declarations: [Calendar]
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = [];
    return CalendarModule;
}());
//# sourceMappingURL=calendar.js.map