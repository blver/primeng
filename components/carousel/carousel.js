import { NgModule, Component, ElementRef, Input, IterableDiffers, TemplateRef, ContentChild, Renderer } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { SharedModule } from '../common/shared';
import { CommonModule } from '@angular/common';
export var Carousel = (function () {
    function Carousel(el, domHandler, differs, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.numVisible = 3;
        this.firstVisible = 0;
        this.circular = false;
        this.breakpoint = 560;
        this.responsive = true;
        this.autoplayInterval = 0;
        this.effectDuration = '1s';
        this.easing = 'ease-out';
        this.pageLinks = 3;
        this.left = 0;
        this.differ = differs.find([]).create(null);
    }
    Carousel.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.value);
        if (changes) {
            if (this.value && this.value.length) {
                if (this.value.length && this.firstVisible >= this.value.length) {
                    this.setPage(this.totalPages - 1);
                }
            }
            else {
                this.setPage(0);
            }
            this.valuesChanged = true;
            if (this.autoplayInterval) {
                this.stopAutoplay();
            }
            this.updateMobileDropdown();
            this.updateLinks();
            this.updateDropdown();
        }
    };
    Carousel.prototype.ngAfterViewChecked = function () {
        if (this.valuesChanged) {
            this.render();
            this.valuesChanged = false;
        }
    };
    Carousel.prototype.ngOnInit = function () {
        if (window.innerWidth <= this.breakpoint) {
            this.shrinked = true;
            this.columns = 1;
        }
        else {
            this.shrinked = false;
            this.columns = this.numVisible;
        }
        this.page = Math.floor(this.firstVisible / this.columns);
    };
    Carousel.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.el.nativeElement.children[0];
        this.viewport = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-carousel-viewport');
        this.itemsContainer = this.domHandler.findSingle(this.el.nativeElement, 'ul.ui-carousel-items');
        if (this.responsive) {
            this.documentResponsiveListener = this.renderer.listenGlobal('window', 'resize', function (event) {
                _this.updateState();
            });
        }
        if (this.value && this.value.length) {
            this.render();
        }
    };
    Carousel.prototype.updateLinks = function () {
        this.anchorPageLinks = [];
        for (var i = 0; i < this.totalPages; i++) {
            this.anchorPageLinks.push(i);
        }
    };
    Carousel.prototype.updateDropdown = function () {
        this.selectDropdownOptions = [];
        for (var i = 0; i < this.totalPages; i++) {
            this.selectDropdownOptions.push(i);
        }
    };
    Carousel.prototype.updateMobileDropdown = function () {
        this.mobileDropdownOptions = [];
        for (var i = 0; i < this.value.length; i++) {
            this.mobileDropdownOptions.push(i);
        }
    };
    Carousel.prototype.render = function () {
        this.items = this.domHandler.find(this.itemsContainer, 'li');
        this.calculateItemWidths();
        if (!this.responsive) {
            this.container.style.width = (this.domHandler.width(this.container)) + 'px';
        }
        if (this.autoplayInterval) {
            this.circular = true;
            this.startAutoplay();
        }
    };
    Carousel.prototype.calculateItemWidths = function () {
        var firstItem = (this.items && this.items.length) ? this.items[0] : null;
        if (firstItem) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].style.width = ((this.domHandler.innerWidth(this.viewport) - (this.domHandler.getHorizontalMargin(firstItem) * this.columns)) / this.columns) + 'px';
            }
        }
    };
    Carousel.prototype.onNextNav = function () {
        var lastPage = (this.page === (this.totalPages - 1));
        if (!lastPage)
            this.setPage(this.page + 1);
        else if (this.circular)
            this.setPage(0);
    };
    Carousel.prototype.onPrevNav = function () {
        if (this.page !== 0)
            this.setPage(this.page - 1);
        else if (this.circular)
            this.setPage(this.totalPages - 1);
    };
    Carousel.prototype.setPageWithLink = function (event, p) {
        this.setPage(p);
        event.preventDefault();
    };
    Carousel.prototype.setPage = function (p, enforce) {
        if (p !== this.page || enforce) {
            this.page = p;
            this.left = (-1 * (this.domHandler.innerWidth(this.viewport) * this.page));
            this.firstVisible = this.page * this.columns;
        }
    };
    Carousel.prototype.onDropdownChange = function (val) {
        this.setPage(parseInt(val));
    };
    Object.defineProperty(Carousel.prototype, "displayPageLinks", {
        get: function () {
            return (this.totalPages <= this.pageLinks && !this.shrinked);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "displayPageDropdown", {
        get: function () {
            return (this.totalPages > this.pageLinks && !this.shrinked);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carousel.prototype, "totalPages", {
        get: function () {
            return (this.value && this.value.length) ? Math.ceil(this.value.length / this.columns) : 0;
        },
        enumerable: true,
        configurable: true
    });
    Carousel.prototype.routerDisplay = function () {
        var win = window;
        if (win.innerWidth <= this.breakpoint)
            return true;
        else
            return false;
    };
    Carousel.prototype.updateState = function () {
        var win = window;
        if (win.innerWidth <= this.breakpoint) {
            this.shrinked = true;
            this.columns = 1;
        }
        else if (this.shrinked) {
            this.shrinked = false;
            this.columns = this.numVisible;
            this.updateLinks();
            this.updateDropdown();
        }
        this.calculateItemWidths();
        this.setPage(Math.floor(this.firstVisible / this.columns), true);
    };
    Carousel.prototype.startAutoplay = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.page === (_this.totalPages - 1))
                _this.setPage(0);
            else
                _this.setPage(_this.page + 1);
        }, this.autoplayInterval);
    };
    Carousel.prototype.stopAutoplay = function () {
        clearInterval(this.interval);
    };
    Carousel.prototype.ngOnDestroy = function () {
        if (this.responsive) {
            this.documentResponsiveListener();
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
        }
    };
    Carousel.decorators = [
        { type: Component, args: [{
                    selector: 'p-carousel',
                    template: "\n        <div [ngClass]=\"{'ui-carousel ui-widget ui-widget-content ui-corner-all':true}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-carousel-header ui-widget-header\">\n                <div class=\"ui-carousel-header-title\">{{headerText}}</div>\n                <span class=\"ui-carousel-button ui-carousel-next-button fa fa-arrow-circle-right\" (click)=\"onNextNav()\" \n                        [ngClass]=\"{'ui-state-disabled':(page === (totalPages-1)) && !circular}\"></span>\n                <span class=\"ui-carousel-button ui-carousel-prev-button fa fa-arrow-circle-left\" (click)=\"onPrevNav()\" \n                        [ngClass]=\"{'ui-state-disabled':(page === 0 && !circular)}\"></span>\n                <div *ngIf=\"displayPageLinks\" class=\"ui-carousel-page-links\">\n                    <a href=\"#\" (click)=\"setPageWithLink($event,i)\" class=\"ui-carousel-page-link fa fa-circle-o\" *ngFor=\"let links of anchorPageLinks;let i=index\" [ngClass]=\"{'fa-dot-circle-o':page===i}\"></a>\n                </div>\n                <select *ngIf=\"displayPageDropdown\" class=\"ui-carousel-dropdown ui-widget ui-state-default ui-corner-left\" [value]=\"page\" (change)=\"onDropdownChange($event.target.value)\">\n                    <option *ngFor=\"let option of selectDropdownOptions\" [value]=\"option\" [selected]=\"value == option\">{{option+1}}</option>\n                </select>\n                <select *ngIf=\"responsive\" class=\"ui-carousel-mobiledropdown ui-widget ui-state-default ui-corner-left\" [value]=\"page\" (change)=\"onDropdownChange($event.target.value)\"\n                    [style.display]=\"shrinked ? 'block' : 'none'\">\n                    <option *ngFor=\"let option of mobileDropdownOptions\" [value]=\"option\" [selected]=\"value == option\">{{option+1}}</option>\n                </select>\n            </div>\n            <div class=\"ui-carousel-viewport\">\n                <ul class=\"ui-carousel-items\" [style.left.px]=\"left\" [style.transitionProperty]=\"'left'\" \n                            [style.transitionDuration]=\"effectDuration\" [style.transitionTimingFunction]=\"easing\">\n                    <li *ngFor=\"let item of value\" class=\"ui-carousel-item ui-widget-content ui-corner-all\">\n                        <template [pTemplateWrapper]=\"itemTemplate\" [item]=\"item\"></template>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    ",
                    providers: [DomHandler]
                },] },
    ];
    /** @nocollapse */
    Carousel.ctorParameters = [
        { type: ElementRef, },
        { type: DomHandler, },
        { type: IterableDiffers, },
        { type: Renderer, },
    ];
    Carousel.propDecorators = {
        'value': [{ type: Input },],
        'numVisible': [{ type: Input },],
        'firstVisible': [{ type: Input },],
        'headerText': [{ type: Input },],
        'circular': [{ type: Input },],
        'breakpoint': [{ type: Input },],
        'responsive': [{ type: Input },],
        'autoplayInterval': [{ type: Input },],
        'effectDuration': [{ type: Input },],
        'easing': [{ type: Input },],
        'pageLinks': [{ type: Input },],
        'style': [{ type: Input },],
        'styleClass': [{ type: Input },],
        'itemTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
    };
    return Carousel;
}());
export var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, SharedModule],
                    exports: [Carousel, SharedModule],
                    declarations: [Carousel]
                },] },
    ];
    /** @nocollapse */
    CarouselModule.ctorParameters = [];
    return CarouselModule;
}());
//# sourceMappingURL=carousel.js.map