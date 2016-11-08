/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/togglebutton/togglebutton';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/common/src/localization';
import * as import4 from '@angular/core/src/di/injector';
import * as import5 from '@angular/core/src/i18n/tokens';
import * as import6 from '@angular/core/src/render/api';
import * as import7 from '@angular/core/src/linker/view';
import * as import8 from '@angular/core/src/linker/element';
import * as import9 from '@angular/core/src/linker/view_utils';
import * as import10 from '@angular/core/src/linker/view_type';
import * as import11 from '@angular/core/src/change_detection/change_detection';
import * as import12 from '@angular/forms/src/directives/control_value_accessor';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from '@angular/common/src/directives/ng_class';
import * as import16 from '@angular/common/src/directives/ng_style';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from '@angular/core/src/linker/template_ref';
class ToggleButtonModuleInjector extends import0.NgModuleInjector<import1.ToggleButtonModule> {
  _CommonModule_0:import2.CommonModule;
  _ToggleButtonModule_1:import1.ToggleButtonModule;
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
  createInternal():import1.ToggleButtonModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ToggleButtonModule_1 = new import1.ToggleButtonModule();
    return this._ToggleButtonModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.ToggleButtonModule)) { return this._ToggleButtonModule_1; }
    if ((token === import5.LOCALE_ID)) { return this._LOCALE_ID_2; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import5.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ToggleButtonModuleNgFactory:import0.NgModuleFactory<import1.ToggleButtonModule> = new import0.NgModuleFactory(ToggleButtonModuleInjector,import1.ToggleButtonModule);
var renderType_ToggleButton_Host:import6.RenderComponentType = (null as any);
class _View_ToggleButton_Host0 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _ToggleButton_0_4:import1.ToggleButton;
  __NG_VALUE_ACCESSOR_0_5:any[];
  constructor(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_ToggleButton_Host0,renderType_ToggleButton_Host,import10.ViewType.HOST,viewUtils,parentInjector,declarationEl,import11.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_0_5():any[] {
    if ((this.__NG_VALUE_ACCESSOR_0_5 == (null as any))) { (this.__NG_VALUE_ACCESSOR_0_5 = [this._ToggleButton_0_4]); }
    return this.__NG_VALUE_ACCESSOR_0_5;
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-toggleButton',rootSelector,(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ToggleButton0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ToggleButton_0_4 = new import1.ToggleButton();
    this._appEl_0.initComponent(this._ToggleButton_0_4,[],compView_0);
    compView_0.create(this._ToggleButton_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.ToggleButton) && (0 === requestNodeIndex))) { return this._ToggleButton_0_4; }
    if (((token === import12.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_5; }
    return notFoundResult;
  }
}
function viewFactory_ToggleButton_Host0(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  if ((renderType_ToggleButton_Host === (null as any))) { (renderType_ToggleButton_Host = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,[],{})); }
  return new _View_ToggleButton_Host0(viewUtils,parentInjector,declarationEl);
}
export const ToggleButtonNgFactory:import14.ComponentFactory<import1.ToggleButton> = new import14.ComponentFactory<import1.ToggleButton>('p-toggleButton',viewFactory_ToggleButton_Host0,import1.ToggleButton);
const styles_ToggleButton:any[] = [];
var renderType_ToggleButton:import6.RenderComponentType = (null as any);
class _View_ToggleButton0 extends import7.AppView<import1.ToggleButton> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import15.NgClass;
  _NgStyle_1_4:import16.NgStyle;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import8.AppElement;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import17.NgIf;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  /*private*/ _expr_3:any;
  _map_0:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_ToggleButton0,renderType_ToggleButton,import10.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import11.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._NgClass_1_3 = new import15.NgClass(this.parentInjector.get(import18.IterableDiffers),this.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_1),this.renderer);
    this._NgStyle_1_4 = new import16.NgStyle(this.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import8.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import21.TemplateRef_(this._appEl_3,viewFactory_ToggleButton1);
    this._NgIf_3_6 = new import17.NgIf(this._appEl_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_1,'span',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','ui-button-text ui-unselectable-text');
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_1,'mouseenter',this.eventHandler(this._handle_mouseenter_1_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_1,'mouseleave',this.eventHandler(this._handle_mouseleave_1_2.bind(this)));
    this._expr_3 = import11.UNINITIALIZED;
    this._map_0 = import9.pureProxy6((p0:any,p1:any,p2:any,p3:any,p4:any,p5:any):{[key: string]:any} => {
      return {
        'ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all': p0,
        'ui-button-text-only': p1,
        'ui-button-text-icon-left': p2,
        'ui-state-active': p3,
        'ui-state-hover': p4,
        'ui-state-disabled': p5
      }
      ;
    });
    this._expr_4 = import11.UNINITIALIZED;
    this._expr_5 = import11.UNINITIALIZED;
    this._expr_6 = import11.UNINITIALIZED;
    this._expr_7 = import11.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import17.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6; }
    if (((token === import15.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._NgClass_1_3; }
    if (((token === import16.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._NgStyle_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3:any = this.context.styleClass;
    if (import9.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgClass_1_3.klass = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._map_0(true,(!this.context.onIcon && !this.context.offIcon),(this.context.onIcon && this.context.offIcon),this.context.checked,(this.context.hover && !this.context.disabled),this.context.disabled);
    if (import9.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgClass_1_3.ngClass = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (!throwOnChange) { this._NgClass_1_3.ngDoCheck(); }
    const currVal_5:any = this.context.style;
    if (import9.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgStyle_1_4.ngStyle = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (!throwOnChange) { this._NgStyle_1_4.ngDoCheck(); }
    const currVal_6:any = (this.context.onIcon || this.context.offIcon);
    if (import9.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgIf_3_6.ngIf = currVal_6;
      this._expr_6 = currVal_6;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_7:any = import9.interpolate(1,'',(this.context.checked? this.context.onLabel: this.context.offLabel),'');
    if (import9.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_6,currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.toggle($event)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseenter_1_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.hover = true)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseleave_1_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.hover = false)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ToggleButton0(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<import1.ToggleButton> {
  if ((renderType_ToggleButton === (null as any))) { (renderType_ToggleButton = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/togglebutton/togglebutton.ts class ToggleButton - inline template',0,import13.ViewEncapsulation.None,styles_ToggleButton,{})); }
  return new _View_ToggleButton0(viewUtils,parentInjector,declarationEl);
}
class _View_ToggleButton1 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_ToggleButton1,renderType_ToggleButton,import10.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import11.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this._expr_0 = import11.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.parent.context.getIconClass();
    if (import9.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ToggleButton1(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_ToggleButton1(viewUtils,parentInjector,declarationEl);
}