import { NgModule, Component, ElementRef, Input, Output, EventEmitter, IterableDiffers } from '@angular/core';
import { CommonModule } from '@angular/common';
export var UIChart = (function () {
    function UIChart(el, differs) {
        this.el = el;
        this.onDataSelect = new EventEmitter();
        this.differ = differs.find([]).create(null);
    }
    UIChart.prototype.ngAfterViewInit = function () {
        this.initChart();
        this.initialized = true;
    };
    UIChart.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.data.datasets);
        if (changes && this.initialized) {
            if (this.chart) {
                this.chart.destroy();
            }
            this.initChart();
        }
    };
    UIChart.prototype.onCanvasClick = function (event) {
        if (this.chart) {
            var element = this.chart.getElementAtEvent(event);
            var dataset = this.chart.getDatasetAtEvent(event);
            if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
            }
        }
    };
    UIChart.prototype.initChart = function () {
        this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
            type: this.type,
            data: this.data,
            options: this.options
        });
    };
    UIChart.prototype.getCanvas = function () {
        return this.el.nativeElement.children[0].children[0];
    };
    UIChart.prototype.getBase64Image = function () {
        return this.chart.toBase64Image();
    };
    UIChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    };
    UIChart.decorators = [
        { type: Component, args: [{
                    selector: 'p-chart',
                    template: "\n        <div>\n            <canvas [attr.width]=\"width\" [attr.height]=\"height\" (click)=\"onCanvasClick($event)\"></canvas>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    UIChart.ctorParameters = [
        { type: ElementRef, },
        { type: IterableDiffers, },
    ];
    UIChart.propDecorators = {
        'type': [{ type: Input },],
        'data': [{ type: Input },],
        'options': [{ type: Input },],
        'width': [{ type: Input },],
        'height': [{ type: Input },],
        'onDataSelect': [{ type: Output },],
    };
    return UIChart;
}());
export var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [UIChart],
                    declarations: [UIChart]
                },] },
    ];
    /** @nocollapse */
    ChartModule.ctorParameters = [];
    return ChartModule;
}());
//# sourceMappingURL=chart.js.map