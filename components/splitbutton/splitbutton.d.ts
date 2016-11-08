import { ElementRef, OnInit, OnDestroy, EventEmitter, Renderer } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { MenuItem } from '../common/api';
import { Router } from '@angular/router';
export declare class SplitButton implements OnInit, OnDestroy {
    protected el: ElementRef;
    protected domHandler: DomHandler;
    protected renderer: Renderer;
    protected router: Router;
    model: MenuItem[];
    icon: string;
    iconPos: string;
    label: string;
    onClick: EventEmitter<any>;
    style: any;
    styleClass: string;
    menuStyle: any;
    menuStyleClass: string;
    disabled: boolean;
    hoverDefaultBtn: boolean;
    focusDefaultBtn: boolean;
    activeDefaultBtn: boolean;
    hoverDropdown: boolean;
    focusDropdown: boolean;
    activeDropdown: boolean;
    protected hoveredItem: any;
    menuVisible: boolean;
    protected documentClickListener: any;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer, router: Router);
    ngOnInit(): void;
    onDefaultButtonClick(event: any): void;
    itemClick(event: any, item: MenuItem): void;
    onDropdownClick(event: any, menu: any, container: any): void;
    ngOnDestroy(): void;
}
export declare class SplitButtonModule {
}
