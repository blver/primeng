/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/slider/slider';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/common/src/localization';
import * as import4 from '@angular/core/src/di/injector';
import * as import5 from '@angular/core/src/i18n/tokens';
import * as import6 from '@angular/core/src/render/api';
import * as import7 from '@angular/core/src/linker/view';
import * as import8 from '@angular/core/src/linker/element';
import * as import9 from '../../../components/dom/domhandler';
import * as import10 from '@angular/core/src/linker/view_utils';
import * as import11 from '@angular/core/src/linker/view_type';
import * as import12 from '@angular/core/src/change_detection/change_detection';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/forms/src/directives/control_value_accessor';
import * as import15 from '@angular/core/src/metadata/view';
import * as import16 from '@angular/core/src/linker/component_factory';
import * as import17 from '@angular/common/src/directives/ng_class';
import * as import18 from '@angular/common/src/directives/ng_style';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/core/src/security';
class SliderModuleInjector extends import0.NgModuleInjector<import1.SliderModule> {
  _CommonModule_0:import2.CommonModule;
  _SliderModule_1:import1.SliderModule;
  __LOCALE_ID_2:any;
  __NgLocalization_3:import3.NgLocaleLocalization;
  __TRANSLATIONS_FORMAT_4:any;
  constructor(parent:import4.Injector) {
    super(parent,[],[]);
  }
  get _LOCALE_ID_2():any {
    if ((this.__LOCALE_ID_2 == (null as any))) { (this.__LOCALE_ID_2 = (null as any)); }
    return this.__LOCALE_ID_2;
  }
  get _NgLocalization_3():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_3 == (null as any))) { (this.__NgLocalization_3 = new import3.NgLocaleLocalization(this._LOCALE_ID_2)); }
    return this.__NgLocalization_3;
  }
  get _TRANSLATIONS_FORMAT_4():any {
    if ((this.__TRANSLATIONS_FORMAT_4 == (null as any))) { (this.__TRANSLATIONS_FORMAT_4 = (null as any)); }
    return this.__TRANSLATIONS_FORMAT_4;
  }
  createInternal():import1.SliderModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._SliderModule_1 = new import1.SliderModule();
    return this._SliderModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.SliderModule)) { return this._SliderModule_1; }
    if ((token === import5.LOCALE_ID)) { return this._LOCALE_ID_2; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import5.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SliderModuleNgFactory:import0.NgModuleFactory<import1.SliderModule> = new import0.NgModuleFactory(SliderModuleInjector,import1.SliderModule);
var renderType_Slider_Host:import6.RenderComponentType = (null as any);
class _View_Slider_Host0 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _DomHandler_0_4:import9.DomHandler;
  _Slider_0_5:import1.Slider;
  __NG_VALUE_ACCESSOR_0_6:any[];
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Slider_Host0,renderType_Slider_Host,import11.ViewType.HOST,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_0_6():any[] {
    if ((this.__NG_VALUE_ACCESSOR_0_6 == (null as any))) { (this.__NG_VALUE_ACCESSOR_0_6 = [this._Slider_0_5]); }
    return this.__NG_VALUE_ACCESSOR_0_6;
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-slider',rootSelector,(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Slider0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DomHandler_0_4 = new import9.DomHandler();
    this._Slider_0_5 = new import1.Slider(new import13.ElementRef(this._el_0),this._DomHandler_0_4,this.renderer);
    this._appEl_0.initComponent(this._Slider_0_5,[],compView_0);
    compView_0.create(this._Slider_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.DomHandler) && (0 === requestNodeIndex))) { return this._DomHandler_0_4; }
    if (((token === import1.Slider) && (0 === requestNodeIndex))) { return this._Slider_0_5; }
    if (((token === import14.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Slider_0_5.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Slider_0_5.ngOnDestroy();
  }
}
function viewFactory_Slider_Host0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  if ((renderType_Slider_Host === (null as any))) { (renderType_Slider_Host = viewUtils.createRenderComponentType('',0,import15.ViewEncapsulation.None,[],{})); }
  return new _View_Slider_Host0(viewUtils,parentInjector,declarationEl);
}
export const SliderNgFactory:import16.ComponentFactory<import1.Slider> = new import16.ComponentFactory<import1.Slider>('p-slider',viewFactory_Slider_Host0,import1.Slider);
const styles_Slider:any[] = [];
var renderType_Slider:import6.RenderComponentType = (null as any);
class _View_Slider0 extends import7.AppView<import1.Slider> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import17.NgClass;
  _NgStyle_1_4:import18.NgStyle;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import8.AppElement;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import19.NgIf;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import8.AppElement;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import19.NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import8.AppElement;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import19.NgIf;
  _text_8:any;
  _anchor_9:any;
  /*private*/ _appEl_9:import8.AppElement;
  _TemplateRef_9_5:any;
  _NgIf_9_6:import19.NgIf;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _appEl_11:import8.AppElement;
  _TemplateRef_11_5:any;
  _NgIf_11_6:import19.NgIf;
  _text_12:any;
  _text_13:any;
  /*private*/ _expr_1:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Slider0,renderType_Slider,import11.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._NgClass_1_3 = new import17.NgClass(this.parentInjector.get(import20.IterableDiffers),this.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_1),this.renderer);
    this._NgStyle_1_4 = new import18.NgStyle(this.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import8.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import22.TemplateRef_(this._appEl_3,viewFactory_Slider1);
    this._NgIf_3_6 = new import19.NgIf(this._appEl_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_5 = new import8.AppElement(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import22.TemplateRef_(this._appEl_5,viewFactory_Slider2);
    this._NgIf_5_6 = new import19.NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_7 = new import8.AppElement(7,1,this,this._anchor_7);
    this._TemplateRef_7_5 = new import22.TemplateRef_(this._appEl_7,viewFactory_Slider3);
    this._NgIf_7_6 = new import19.NgIf(this._appEl_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_9 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_9 = new import8.AppElement(9,1,this,this._anchor_9);
    this._TemplateRef_9_5 = new import22.TemplateRef_(this._appEl_9,viewFactory_Slider4);
    this._NgIf_9_6 = new import19.NgIf(this._appEl_9.vcRef,this._TemplateRef_9_5);
    this._text_10 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_11 = new import8.AppElement(11,1,this,this._anchor_11);
    this._TemplateRef_11_5 = new import22.TemplateRef_(this._appEl_11,viewFactory_Slider5);
    this._NgIf_11_6 = new import19.NgIf(this._appEl_11.vcRef,this._TemplateRef_11_5);
    this._text_12 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._expr_1 = import12.UNINITIALIZED;
    this._map_0 = import10.pureProxy5((p0:any,p1:any,p2:any,p3:any,p4:any):{[key: string]:any} => {
      return {
        'ui-slider ui-widget ui-widget-content ui-corner-all': p0,
        'ui-state-disabled': p1,
        'ui-slider-horizontal': p2,
        'ui-slider-vertical': p3,
        'ui-slider-animate': p4
      }
      ;
    });
    this._expr_2 = import12.UNINITIALIZED;
    this._expr_3 = import12.UNINITIALIZED;
    this._expr_4 = import12.UNINITIALIZED;
    this._expr_5 = import12.UNINITIALIZED;
    this._expr_6 = import12.UNINITIALIZED;
    this._expr_7 = import12.UNINITIALIZED;
    this._expr_8 = import12.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._anchor_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._text_13
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import19.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6; }
    if (((token === import22.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import19.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6; }
    if (((token === import22.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import19.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6; }
    if (((token === import22.TemplateRef) && (9 === requestNodeIndex))) { return this._TemplateRef_9_5; }
    if (((token === import19.NgIf) && (9 === requestNodeIndex))) { return this._NgIf_9_6; }
    if (((token === import22.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import19.NgIf) && (11 === requestNodeIndex))) { return this._NgIf_11_6; }
    if (((token === import17.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._NgClass_1_3; }
    if (((token === import18.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._NgStyle_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.context.styleClass;
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_1_3.klass = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._map_0(true,this.context.disabled,(this.context.orientation == 'horizontal'),(this.context.orientation == 'vertical'),this.context.animate);
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgClass_1_3.ngClass = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgClass_1_3.ngDoCheck(); }
    const currVal_3:any = this.context.style;
    if (import10.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgStyle_1_4.ngStyle = currVal_3;
      this._expr_3 = currVal_3;
    }
    if (!throwOnChange) { this._NgStyle_1_4.ngDoCheck(); }
    const currVal_4:boolean = !this.context.range;
    if (import10.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_3_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.range;
    if (import10.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_5_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = (this.context.orientation == 'vertical');
    if (import10.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgIf_7_6.ngIf = currVal_6;
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.range;
    if (import10.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._NgIf_9_6.ngIf = currVal_7;
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.range;
    if (import10.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._NgIf_11_6.ngIf = currVal_8;
      this._expr_8 = currVal_8;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onBarClick($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Slider0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<import1.Slider> {
  if ((renderType_Slider === (null as any))) { (renderType_Slider = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/slider/slider.ts class Slider - inline template',0,import15.ViewEncapsulation.None,styles_Slider,{})); }
  return new _View_Slider0(viewUtils,parentInjector,declarationEl);
}
class _View_Slider1 extends import7.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import18.NgStyle;
  /*private*/ _expr_1:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Slider1,renderType_Slider,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-slider-handle ui-state-default ui-corner-all');
    this._NgStyle_0_3 = new import18.NgStyle(this.parent.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._expr_1 = import12.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'mousedown',this.eventHandler(this._handle_mousedown_0_0.bind(this)));
    this._map_0 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        left: p0,
        bottom: p1
      }
      ;
    });
    this._expr_2 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgStyle) && (0 === requestNodeIndex))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this._map_0(((this.parent.context.orientation == 'horizontal')? (this.parent.context.handleValue + '%'): (null as any)),((this.parent.context.orientation == 'vertical')? (this.parent.context.handleValue + '%'): (null as any)));
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgStyle_0_3.ngStyle = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = (this.parent.context.dragging? 'none': (null as any));
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementStyle(this._el_0,'transition',((this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_1) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mousedown_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onMouseDown($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Slider1(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Slider1(viewUtils,parentInjector,declarationEl);
}
class _View_Slider2 extends import7.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import18.NgStyle;
  _map_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Slider2,renderType_Slider,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-slider-range ui-widget-header ui-corner-all');
    this._NgStyle_0_3 = new import18.NgStyle(this.parent.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._map_0 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        left: p0,
        width: p1
      }
      ;
    });
    this._expr_0 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgStyle) && (0 === requestNodeIndex))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this._map_0((this.parent.context.handleValues[0] + '%'),((this.parent.context.handleValues[1] - this.parent.context.handleValues[0]) + '%'));
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgStyle_0_3.ngStyle = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Slider2(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Slider2(viewUtils,parentInjector,declarationEl);
}
class _View_Slider3 extends import7.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import18.NgStyle;
  _map_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Slider3,renderType_Slider,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-slider-range ui-slider-range-min ui-widget-header ui-corner-all');
    this._NgStyle_0_3 = new import18.NgStyle(this.parent.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._map_0 = import10.pureProxy1((p0:any):{[key: string]:any} => {
      return {height: p0};
    });
    this._expr_0 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgStyle) && (0 === requestNodeIndex))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this._map_0((this.parent.context.handleValue + '%'));
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgStyle_0_3.ngStyle = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Slider3(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Slider3(viewUtils,parentInjector,declarationEl);
}
class _View_Slider4 extends import7.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import18.NgStyle;
  /*private*/ _expr_1:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Slider4,renderType_Slider,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-slider-handle ui-state-default ui-corner-all');
    this._NgStyle_0_3 = new import18.NgStyle(this.parent.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._expr_1 = import12.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'mousedown',this.eventHandler(this._handle_mousedown_0_0.bind(this)));
    this._map_0 = import10.pureProxy1((p0:any):{[key: string]:any} => {
      return {left: p0};
    });
    this._expr_2 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgStyle) && (0 === requestNodeIndex))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this._map_0((this.parent.context.handleValues[0] + '%'));
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgStyle_0_3.ngStyle = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = (this.parent.context.dragging? 'none': (null as any));
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementStyle(this._el_0,'transition',((this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_1) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mousedown_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onMouseDown($event,0)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Slider4(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Slider4(viewUtils,parentInjector,declarationEl);
}
class _View_Slider5 extends import7.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import18.NgStyle;
  /*private*/ _expr_1:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Slider5,renderType_Slider,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-slider-handle ui-state-default ui-corner-all');
    this._NgStyle_0_3 = new import18.NgStyle(this.parent.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._expr_1 = import12.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'mousedown',this.eventHandler(this._handle_mousedown_0_0.bind(this)));
    this._map_0 = import10.pureProxy1((p0:any):{[key: string]:any} => {
      return {left: p0};
    });
    this._expr_2 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.NgStyle) && (0 === requestNodeIndex))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this._map_0((this.parent.context.handleValues[1] + '%'));
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgStyle_0_3.ngStyle = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = (this.parent.context.dragging? 'none': (null as any));
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementStyle(this._el_0,'transition',((this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_1) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import23.SecurityContext.STYLE,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mousedown_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onMouseDown($event,1)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Slider5(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Slider5(viewUtils,parentInjector,declarationEl);
}