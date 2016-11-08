/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/lightbox/lightbox';
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
import * as import14 from '@angular/core/src/metadata/view';
import * as import15 from '@angular/core/src/linker/component_factory';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '@angular/common/src/directives/ng_class';
import * as import18 from '@angular/core/src/linker/template_ref';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import21 from '@angular/core/src/security';
import * as import22 from '@angular/common/src/directives/ng_style';
import * as import23 from '@angular/common/src/directives/ng_for';
class LightboxModuleInjector extends import0.NgModuleInjector<import1.LightboxModule> {
  _CommonModule_0:import2.CommonModule;
  _LightboxModule_1:import1.LightboxModule;
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
  createInternal():import1.LightboxModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._LightboxModule_1 = new import1.LightboxModule();
    return this._LightboxModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.LightboxModule)) { return this._LightboxModule_1; }
    if ((token === import5.LOCALE_ID)) { return this._LOCALE_ID_2; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import5.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const LightboxModuleNgFactory:import0.NgModuleFactory<import1.LightboxModule> = new import0.NgModuleFactory(LightboxModuleInjector,import1.LightboxModule);
var renderType_Lightbox_Host:import6.RenderComponentType = (null as any);
class _View_Lightbox_Host0 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _DomHandler_0_4:import9.DomHandler;
  _Lightbox_0_5:import1.Lightbox;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Lightbox_Host0,renderType_Lightbox_Host,import11.ViewType.HOST,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-lightbox',rootSelector,(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Lightbox0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DomHandler_0_4 = new import9.DomHandler();
    this._Lightbox_0_5 = new import1.Lightbox(new import13.ElementRef(this._el_0),this._DomHandler_0_4,this.renderer);
    this._appEl_0.initComponent(this._Lightbox_0_5,[],compView_0);
    compView_0.create(this._Lightbox_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.DomHandler) && (0 === requestNodeIndex))) { return this._DomHandler_0_4; }
    if (((token === import1.Lightbox) && (0 === requestNodeIndex))) { return this._Lightbox_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Lightbox_0_5.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Lightbox_0_5.ngOnDestroy();
  }
}
function viewFactory_Lightbox_Host0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  if ((renderType_Lightbox_Host === (null as any))) { (renderType_Lightbox_Host = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,[],{})); }
  return new _View_Lightbox_Host0(viewUtils,parentInjector,declarationEl);
}
export const LightboxNgFactory:import15.ComponentFactory<import1.Lightbox> = new import15.ComponentFactory<import1.Lightbox>('p-lightbox',viewFactory_Lightbox_Host0,import1.Lightbox);
const styles_Lightbox:any[] = [];
var renderType_Lightbox:import6.RenderComponentType = (null as any);
class _View_Lightbox0 extends import7.AppView<import1.Lightbox> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _appEl_1:import8.AppElement;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import16.NgIf;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import8.AppElement;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import16.NgIf;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _NgClass_9_3:import17.NgClass;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _NgClass_12_3:import17.NgClass;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _NgClass_18_3:import17.NgClass;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  _map_0:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  _map_1:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  _map_2:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Lightbox0,renderType_Lightbox,import11.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_1 = new import8.AppElement(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import18.TemplateRef_(this._appEl_1,viewFactory_Lightbox1);
    this._NgIf_1_6 = new import16.NgIf(this._appEl_1.vcRef,this._TemplateRef_1_5);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_3 = new import8.AppElement(3,(null as any),this,this._anchor_3);
    this._TemplateRef_3_5 = new import18.TemplateRef_(this._appEl_3,viewFactory_Lightbox3);
    this._NgIf_3_6 = new import16.NgIf(this._appEl_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_5 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','ui-lightbox ui-widget ui-helper-hidden ui-corner-all ui-shadow');
    this._text_6 = this.renderer.createText(this._el_5,'\n           ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','ui-lightbox-content-wrapper');
    this._text_8 = this.renderer.createText(this._el_7,'\n              ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'a',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','ui-state-default ui-lightbox-nav-left ui-corner-right');
    this._NgClass_9_3 = new import17.NgClass(this.parentInjector.get(import19.IterableDiffers),this.parentInjector.get(import20.KeyValueDiffers),new import13.ElementRef(this._el_9),this.renderer);
    this._el_10 = this.renderer.createElement(this._el_9,'span',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','fa fa-fw fa-caret-left');
    this._text_11 = this.renderer.createText(this._el_7,'\n              ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_7,'div',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','ui-lightbox-content ui-corner-all');
    this._NgClass_12_3 = new import17.NgClass(this.parentInjector.get(import19.IterableDiffers),this.parentInjector.get(import20.KeyValueDiffers),new import13.ElementRef(this._el_12),this.renderer);
    this._text_13 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'img',(null as any));
    this.renderer.setElementAttribute(this._el_14,'style','display:none');
    this._text_15 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this.renderer.projectNodes(this._el_12,import10.flattenNestedViewRenderNodes(this.projectableNodes[1]));
    this._text_16 = this.renderer.createText(this._el_12,'\n              ',(null as any));
    this._text_17 = this.renderer.createText(this._el_7,'\n              ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_7,'a',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','ui-state-default ui-lightbox-nav-right ui-corner-left ui-helper-hidden');
    this._NgClass_18_3 = new import17.NgClass(this.parentInjector.get(import19.IterableDiffers),this.parentInjector.get(import20.KeyValueDiffers),new import13.ElementRef(this._el_18),this.renderer);
    this._el_19 = this.renderer.createElement(this._el_18,'span',(null as any));
    this.renderer.setElementAttribute(this._el_19,'class','fa fa-fw fa-caret-right');
    this._text_20 = this.renderer.createText(this._el_7,'\n           ',(null as any));
    this._text_21 = this.renderer.createText(this._el_5,'\n           ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_5,'div',(null as any));
    this.renderer.setElementAttribute(this._el_22,'class','ui-lightbox-caption ui-widget-header');
    this._text_23 = this.renderer.createText(this._el_22,'\n              ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_22,'span',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','ui-lightbox-caption-text');
    this._text_25 = this.renderer.createText(this._el_24,'',(null as any));
    this._el_26 = this.renderer.createElement(this._el_22,'a',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','ui-lightbox-close ui-corner-all');
    this.renderer.setElementAttribute(this._el_26,'href','#');
    this._el_27 = this.renderer.createElement(this._el_26,'span',(null as any));
    this.renderer.setElementAttribute(this._el_27,'class','fa fa-fw fa-close');
    this._text_28 = this.renderer.createText(this._el_22,'\n              ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_22,'div',(null as any));
    this.renderer.setElementAttribute(this._el_29,'style','clear:both');
    this._text_30 = this.renderer.createText(this._el_22,'\n           ',(null as any));
    this._text_31 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_32 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._expr_0 = import12.UNINITIALIZED;
    this._expr_1 = import12.UNINITIALIZED;
    this._expr_3 = import12.UNINITIALIZED;
    this._expr_4 = import12.UNINITIALIZED;
    this._expr_5 = import12.UNINITIALIZED;
    this._expr_6 = import12.UNINITIALIZED;
    this._expr_7 = import12.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    this._expr_9 = import12.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._expr_10 = import12.UNINITIALIZED;
    this._map_0 = import10.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-helper-hidden': p0};
    });
    this._expr_11 = import12.UNINITIALIZED;
    this._expr_12 = import12.UNINITIALIZED;
    this._expr_13 = import12.UNINITIALIZED;
    this._expr_14 = import12.UNINITIALIZED;
    this._expr_15 = import12.UNINITIALIZED;
    this._map_1 = import10.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-lightbox-loading': p0};
    });
    this._expr_16 = import12.UNINITIALIZED;
    this._expr_18 = import12.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_14,'load',this.eventHandler(this._handle_load_14_0.bind(this)));
    this._expr_20 = import12.UNINITIALIZED;
    var disposable_3:Function = this.renderer.listen(this._el_18,'click',this.eventHandler(this._handle_click_18_0.bind(this)));
    this._expr_21 = import12.UNINITIALIZED;
    this._map_2 = import10.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-helper-hidden': p0};
    });
    this._expr_22 = import12.UNINITIALIZED;
    this._expr_23 = import12.UNINITIALIZED;
    this._expr_24 = import12.UNINITIALIZED;
    var disposable_4:Function = this.renderer.listen(this._el_26,'click',this.eventHandler(this._handle_click_26_0.bind(this)));
    this.init([],[
      this._text_0,
      this._anchor_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._text_32
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import16.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6; }
    if (((token === import18.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import16.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6; }
    if (((token === import17.NgClass) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._NgClass_9_3; }
    if (((token === import17.NgClass) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._NgClass_12_3; }
    if (((token === import17.NgClass) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._NgClass_18_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = (this.context.type == 'image');
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_1_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = (this.context.type == 'content');
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_3_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_10:any = 'ui-state-default ui-lightbox-nav-left ui-corner-right';
    if (import10.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._NgClass_9_3.klass = currVal_10;
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this._map_0(!this.context.leftVisible);
    if (import10.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._NgClass_9_3.ngClass = currVal_11;
      this._expr_11 = currVal_11;
    }
    if (!throwOnChange) { this._NgClass_9_3.ngDoCheck(); }
    const currVal_15:any = 'ui-lightbox-content ui-corner-all';
    if (import10.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this._NgClass_12_3.klass = currVal_15;
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._map_1(this.context.loading);
    if (import10.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._NgClass_12_3.ngClass = currVal_16;
      this._expr_16 = currVal_16;
    }
    if (!throwOnChange) { this._NgClass_12_3.ngDoCheck(); }
    const currVal_21:any = 'ui-state-default ui-lightbox-nav-right ui-corner-left ui-helper-hidden';
    if (import10.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this._NgClass_18_3.klass = currVal_21;
      this._expr_21 = currVal_21;
    }
    const currVal_22:any = this._map_2(!this.context.rightVisible);
    if (import10.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this._NgClass_18_3.ngClass = currVal_22;
      this._expr_22 = currVal_22;
    }
    if (!throwOnChange) { this._NgClass_18_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = (this.context.visible? 'block': 'none');
    if (import10.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementStyle(this._el_5,'display',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_3) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_3).toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.zindex;
    if (import10.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementStyle(this._el_5,'zIndex',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_4) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_4).toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = 'all';
    if (import10.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementStyle(this._el_5,'transitionProperty',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_5) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_5).toString()));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.effectDuration;
    if (import10.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementStyle(this._el_5,'transitionDuration',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_6) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_6).toString()));
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.easing;
    if (import10.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementStyle(this._el_5,'transitionTimingFunction',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_7) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_7).toString()));
      this._expr_7 = currVal_7;
    }
    const currVal_9:any = (this.context.zindex + 1);
    if (import10.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementStyle(this._el_9,'zIndex',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_9) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_9).toString()));
      this._expr_9 = currVal_9;
    }
    const currVal_12:any = 'width,height';
    if (import10.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementStyle(this._el_12,'transitionProperty',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_12) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_12).toString()));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this.context.effectDuration;
    if (import10.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementStyle(this._el_12,'transitionDuration',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_13) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_13).toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this.context.easing;
    if (import10.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementStyle(this._el_12,'transitionTimingFunction',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_14) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_14).toString()));
      this._expr_14 = currVal_14;
    }
    const currVal_18:any = (this.context.currentImage? (this.context.currentImage.source || ''): '');
    if (import10.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementProperty(this._el_14,'src',this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL,currVal_18));
      this._expr_18 = currVal_18;
    }
    const currVal_20:any = (this.context.zindex + 1);
    if (import10.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementStyle(this._el_18,'zIndex',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_20) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_20).toString()));
      this._expr_20 = currVal_20;
    }
    const currVal_23:any = (this.context.captionText? 'block': 'none');
    if (import10.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementStyle(this._el_22,'display',((this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_23) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import21.SecurityContext.STYLE,currVal_23).toString()));
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = import10.interpolate(1,'',this.context.captionText,'');
    if (import10.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setText(this._text_25,currVal_24);
      this._expr_24 = currVal_24;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.preventDocumentClickListener = true)) !== false);
    return (true && pd_0);
  }
  private _handle_click_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.prev(this._el_14)) !== false);
    return (true && pd_0);
  }
  private _handle_load_14_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onImageLoad($event,this._el_12)) !== false);
    return (true && pd_0);
  }
  private _handle_click_18_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.next(this._el_14)) !== false);
    return (true && pd_0);
  }
  private _handle_click_26_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.hide($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Lightbox0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<import1.Lightbox> {
  if ((renderType_Lightbox === (null as any))) { (renderType_Lightbox = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/lightbox/lightbox.ts class Lightbox - inline template',2,import14.ViewEncapsulation.None,styles_Lightbox,{})); }
  return new _View_Lightbox0(viewUtils,parentInjector,declarationEl);
}
class _View_Lightbox1 extends import7.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import22.NgStyle;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import8.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import23.NgFor;
  _text_3:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Lightbox1,renderType_Lightbox,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._NgStyle_0_3 = new import22.NgStyle(this.parentInjector.get(import20.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import8.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import18.TemplateRef_(this._appEl_2,viewFactory_Lightbox2);
    this._NgFor_2_6 = new import23.NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parentInjector.get(import19.IterableDiffers),this.parent.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import12.UNINITIALIZED;
    this._expr_1 = import12.UNINITIALIZED;
    this._expr_2 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import23.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6; }
    if (((token === import22.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import12.SimpleChange} = (null as any);
    const currVal_1:any = this.parent.context.style;
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgStyle_0_3.ngStyle = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    changes = (null as any);
    const currVal_2:any = this.parent.context.images;
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgFor_2_6.ngForOf = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import12.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._NgFor_2_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_2_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.parent.context.styleClass;
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Lightbox1(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Lightbox1(viewUtils,parentInjector,declarationEl);
}
class _View_Lightbox2 extends import7.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Lightbox2,renderType_Lightbox,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'a',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'img',(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._expr_1 = import12.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_2 = import12.UNINITIALIZED;
    this._expr_3 = import12.UNINITIALIZED;
    this._expr_4 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.context.$implicit.source;
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'href',this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL,currVal_1));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.$implicit.thumbnail;
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_2,'src',this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.context.$implicit.title;
    if (import10.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_2,'title',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.$implicit.alt;
    if (import10.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_2,'alt',currVal_4);
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.onImageClick($event,this.context.$implicit,this.context.index,(<_View_Lightbox0>this.parent.parent)._el_12)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Lightbox2(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Lightbox2(viewUtils,parentInjector,declarationEl);
}
class _View_Lightbox3 extends import7.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import22.NgStyle;
  _text_1:any;
  _text_2:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Lightbox3,renderType_Lightbox,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this._NgStyle_0_3 = new import22.NgStyle(this.parentInjector.get(import20.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this.renderer.projectNodes(this._el_0,import10.flattenNestedViewRenderNodes(this.projectableNodes[0]));
    this._text_2 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_1 = import12.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_2 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.parent.context.style;
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgStyle_0_3.ngStyle = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.parent.context.styleClass;
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onLinkClick($event,(<_View_Lightbox0>this.parent)._el_12)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Lightbox3(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Lightbox3(viewUtils,parentInjector,declarationEl);
}