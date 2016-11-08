import { NgModule, Component, ElementRef, Input, Output, EventEmitter, IterableDiffers } from '@angular/core';
import { CommonModule } from '@angular/common';
export var Schedule = (function () {
    function Schedule(el, differs) {
        this.el = el;
        this.aspectRatio = 1.35;
        this.defaultView = 'month';
        this.allDaySlot = true;
        this.allDayText = 'all-day';
        this.slotDuration = '00:30:00';
        this.scrollTime = '06:00:00';
        this.minTime = '00:00:00';
        this.maxTime = '24:00:00';
        this.slotEventOverlap = true;
        this.dragRevertDuration = 500;
        this.dragOpacity = .75;
        this.dragScroll = true;
        this.onDayClick = new EventEmitter();
        this.onEventClick = new EventEmitter();
        this.onEventMouseover = new EventEmitter();
        this.onEventMouseout = new EventEmitter();
        this.onEventDragStart = new EventEmitter();
        this.onEventDragStop = new EventEmitter();
        this.onEventDrop = new EventEmitter();
        this.onEventResizeStart = new EventEmitter();
        this.onEventResizeStop = new EventEmitter();
        this.onEventResize = new EventEmitter();
        this.viewRender = new EventEmitter();
        this.differ = differs.find([]).create(null);
        this.initialized = false;
    }
    Schedule.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.schedule = jQuery(this.el.nativeElement.children[0]);
        var options = {
            theme: true,
            header: this.header,
            isRTL: this.rtl,
            weekends: this.weekends,
            hiddenDays: this.hiddenDays,
            fixedWeekCount: this.fixedWeekCount,
            weekNumbers: this.weekNumbers,
            businessHours: this.businessHours,
            height: this.height,
            contentHeight: this.contentHeight,
            aspectRatio: this.aspectRatio,
            eventLimit: this.eventLimit,
            defaultDate: this.defaultDate,
            editable: this.editable,
            eventStartEditable: this.eventStartEditable,
            eventDurationEditable: this.eventDurationEditable,
            defaultView: this.defaultView,
            allDaySlot: this.allDaySlot,
            allDayText: this.allDayText,
            slotDuration: this.slotDuration,
            slotLabelInterval: this.slotLabelInterval,
            snapDuration: this.snapDuration,
            scrollTime: this.scrollTime,
            minTime: this.minTime,
            maxTime: this.maxTime,
            slotEventOverlap: this.slotEventOverlap,
            nowIndicator: this.nowIndicator,
            dragRevertDuration: this.dragRevertDuration,
            dragOpacity: this.dragOpacity,
            dragScroll: this.dragScroll,
            eventOverlap: this.eventOverlap,
            eventConstraint: this.eventConstraint,
            eventRender: this.eventRender,
            dayRender: this.dayRender,
            events: function (start, end, timezone, callback) {
                callback(_this.events);
            },
            dayClick: function (date, jsEvent, view) {
                _this.onDayClick.emit({
                    'date': date,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventClick: function (calEvent, jsEvent, view) {
                _this.onEventClick.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseover: function (calEvent, jsEvent, view) {
                _this.onEventMouseover.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventMouseout: function (calEvent, jsEvent, view) {
                _this.onEventMouseout.emit({
                    'calEvent': calEvent,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStart: function (event, jsEvent, ui, view) {
                _this.onEventDragStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDragStop: function (event, jsEvent, ui, view) {
                _this.onEventDragStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
                _this.onEventDrop.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStart: function (event, jsEvent, ui, view) {
                _this.onEventResizeStart.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResizeStop: function (event, jsEvent, ui, view) {
                _this.onEventResizeStop.emit({
                    'event': event,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
                _this.onEventResize.emit({
                    'event': event,
                    'delta': delta,
                    'revertFunc': revertFunc,
                    'jsEvent': jsEvent,
                    'view': view
                });
            },
            viewRender: function (view, element) {
                _this.viewRender.emit({
                    'view': view,
                    'element': element
                });
            }
        };
        if (this.locale) {
            for (var prop in this.locale) {
                options[prop] = this.locale[prop];
            }
        }
        this.schedule.fullCalendar(options);
        this.initialized = true;
    };
    Schedule.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.events);
        if (this.schedule && changes) {
            this.schedule.fullCalendar('refetchEvents');
        }
    };
    Schedule.prototype.ngOnDestroy = function () {
        jQuery(this.el.nativeElement.children[0]).fullCalendar('destroy');
        this.initialized = false;
        this.schedule = null;
    };
    Schedule.prototype.gotoDate = function (date) {
        this.schedule.fullCalendar('gotoDate', date);
    };
    Schedule.prototype.prev = function () {
        this.schedule.fullCalendar('prev');
    };
    Schedule.prototype.next = function () {
        this.schedule.fullCalendar('next');
    };
    Schedule.prototype.prevYear = function () {
        this.schedule.fullCalendar('prevYear');
    };
    Schedule.prototype.nextYear = function () {
        this.schedule.fullCalendar('nextYear');
    };
    Schedule.prototype.today = function () {
        this.schedule.fullCalendar('today');
    };
    Schedule.prototype.incrementDate = function (duration) {
        this.schedule.fullCalendar('incrementDate', duration);
    };
    Schedule.prototype.getDate = function () {
        return this.schedule.fullCalendar('getDate');
    };
    Schedule.decorators = [
        { type: Component, args: [{
                    selector: 'p-schedule',
                    template: "\n        <div [ngStyle]=\"style\" [class]=\"styleClass\"></div>\n    "
                },] },
    ];
    /** @nocollapse */
    Schedule.ctorParameters = [
        { type: ElementRef, },
        { type: IterableDiffers, },
    ];
    Schedule.propDecorators = {
        'events': [{ type: Input },],
        'header': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'rtl': [{ type: Input },],
        'weekends': [{ type: Input },],
        'hiddenDays': [{ type: Input },],
        'fixedWeekCount': [{ type: Input },],
        'weekNumbers': [{ type: Input },],
        'businessHours': [{ type: Input },],
        'height': [{ type: Input },],
        'contentHeight': [{ type: Input },],
        'aspectRatio': [{ type: Input },],
        'eventLimit': [{ type: Input },],
        'defaultDate': [{ type: Input },],
        'editable': [{ type: Input },],
        'eventStartEditable': [{ type: Input },],
        'eventDurationEditable': [{ type: Input },],
        'defaultView': [{ type: Input },],
        'allDaySlot': [{ type: Input },],
        'allDayText': [{ type: Input },],
        'slotDuration': [{ type: Input },],
        'slotLabelInterval': [{ type: Input },],
        'snapDuration': [{ type: Input },],
        'scrollTime': [{ type: Input },],
        'minTime': [{ type: Input },],
        'maxTime': [{ type: Input },],
        'slotEventOverlap': [{ type: Input },],
        'nowIndicator': [{ type: Input },],
        'dragRevertDuration': [{ type: Input },],
        'dragOpacity': [{ type: Input },],
        'dragScroll': [{ type: Input },],
        'eventOverlap': [{ type: Input },],
        'eventConstraint': [{ type: Input },],
        'locale': [{ type: Input },],
        'eventRender': [{ type: Input },],
        'dayRender': [{ type: Input },],
        'onDayClick': [{ type: Output },],
        'onEventClick': [{ type: Output },],
        'onEventMouseover': [{ type: Output },],
        'onEventMouseout': [{ type: Output },],
        'onEventDragStart': [{ type: Output },],
        'onEventDragStop': [{ type: Output },],
        'onEventDrop': [{ type: Output },],
        'onEventResizeStart': [{ type: Output },],
        'onEventResizeStop': [{ type: Output },],
        'onEventResize': [{ type: Output },],
        'viewRender': [{ type: Output },],
    };
    return Schedule;
}());
export var ScheduleModule = (function () {
    function ScheduleModule() {
    }
    ScheduleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Schedule],
                    declarations: [Schedule]
                },] },
    ];
    /** @nocollapse */
    ScheduleModule.ctorParameters = [];
    return ScheduleModule;
}());
//# sourceMappingURL=schedule.js.map