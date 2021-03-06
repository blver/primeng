/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/radiobutton/radiobutton';
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
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/core/src/linker/template_ref';
class RadioButtonModuleInjector extends import0.NgModuleInjector<import1.RadioButtonModule> {
  _CommonModule_0:import2.CommonModule;
  _RadioButtonModule_1:import1.RadioButtonModule;
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
  createInternal():import1.RadioButtonModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RadioButtonModule_1 = new import1.RadioButtonModule();
    return this._RadioButtonModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.RadioButtonModule)) { return this._RadioButtonModule_1; }
    if ((token === import5.LOCALE_ID)) { return this._LOCALE_ID_2; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import5.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const RadioButtonModuleNgFactory:import0.NgModuleFactory<import1.RadioButtonModule> = new import0.NgModuleFactory(RadioButtonModuleInjector,import1.RadioButtonModule);
var renderType_RadioButton_Host:import6.RenderComponentType = (null as any);
class _View_RadioButton_Host0 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _RadioButton_0_4:import1.RadioButton;
  __NG_VALUE_ACCESSOR_0_5:any[];
  constructor(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_RadioButton_Host0,renderType_RadioButton_Host,import10.ViewType.HOST,viewUtils,parentInjector,declarationEl,import11.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_0_5():any[] {
    if ((this.__NG_VALUE_ACCESSOR_0_5 == (null as any))) { (this.__NG_VALUE_ACCESSOR_0_5 = [this._RadioButton_0_4]); }
    return this.__NG_VALUE_ACCESSOR_0_5;
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-radioButton',rootSelector,(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_RadioButton0(this.viewUtils,this.injector(0),this._appEl_0);
    this._RadioButton_0_4 = new import1.RadioButton();
    this._appEl_0.initComponent(this._RadioButton_0_4,[],compView_0);
    compView_0.create(this._RadioButton_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.RadioButton) && (0 === requestNodeIndex))) { return this._RadioButton_0_4; }
    if (((token === import12.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_5; }
    return notFoundResult;
  }
}
function viewFactory_RadioButton_Host0(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  if ((renderType_RadioButton_Host === (null as any))) { (renderType_RadioButton_Host = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,[],{})); }
  return new _View_RadioButton_Host0(viewUtils,parentInjector,declarationEl);
}
export const RadioButtonNgFactory:import14.ComponentFactory<import1.RadioButton> = new import14.ComponentFactory<import1.RadioButton>('p-radioButton',viewFactory_RadioButton_Host0,import1.RadioButton);
const styles_RadioButton:any[] = [];
var renderType_RadioButton:import6.RenderComponentType = (null as any);
class _View_RadioButton0 extends import7.AppView<import1.RadioButton> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _NgClass_8_3:import15.NgClass;
  _text_9:any;
  _el_10:any;
  _NgClass_10_3:import15.NgClass;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _appEl_14:import8.AppElement;
  _TemplateRef_14_5:any;
  _NgIf_14_6:import16.NgIf;
  _text_15:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  _map_0:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  _map_1:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  constructor(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_RadioButton0,renderType_RadioButton,import10.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import11.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','ui-radiobutton ui-widget');
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','ui-helper-hidden-accessible');
    this._text_4 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'input',(null as any));
    this.renderer.setElementAttribute(this._el_5,'type','radio');
    this._text_6 = this.renderer.createText(this._el_3,'\n            ',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_1,'div',(null as any));
    this._NgClass_8_3 = new import15.NgClass(this.parentInjector.get(import17.IterableDiffers),this.parentInjector.get(import18.KeyValueDiffers),new import19.ElementRef(this._el_8),this.renderer);
    this._text_9 = this.renderer.createText(this._el_8,'\n                ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_8,'span',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','ui-radiobutton-icon');
    this._NgClass_10_3 = new import15.NgClass(this.parentInjector.get(import17.IterableDiffers),this.parentInjector.get(import18.KeyValueDiffers),new import19.ElementRef(this._el_10),this.renderer);
    this._text_11 = this.renderer.createText(this._el_8,'\n            ',(null as any));
    this._text_12 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_14 = new import8.AppElement(14,(null as any),this,this._anchor_14);
    this._TemplateRef_14_5 = new import20.TemplateRef_(this._appEl_14,viewFactory_RadioButton1);
    this._NgIf_14_6 = new import16.NgIf(this._appEl_14.vcRef,this._TemplateRef_14_5);
    this._text_15 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._expr_3 = import11.UNINITIALIZED;
    this._expr_4 = import11.UNINITIALIZED;
    this._expr_5 = import11.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_5,'change',this.eventHandler(this._handle_change_5_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_5,'focus',this.eventHandler(this._handle_focus_5_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_5,'blur',this.eventHandler(this._handle_blur_5_2.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_8,'click',this.eventHandler(this._handle_click_8_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_8,'mouseenter',this.eventHandler(this._handle_mouseenter_8_1.bind(this)));
    var disposable_5:Function = this.renderer.listen(this._el_8,'mouseleave',this.eventHandler(this._handle_mouseleave_8_2.bind(this)));
    this._map_0 = import9.pureProxy5((p0:any,p1:any,p2:any,p3:any,p4:any):{[key: string]:any} => {
      return {
        'ui-radiobutton-box ui-widget ui-state-default': p0,
        'ui-state-hover': p1,
        'ui-state-active': p2,
        'ui-state-disabled': p3,
        'ui-state-focus': p4
      }
      ;
    });
    this._expr_9 = import11.UNINITIALIZED;
    this._expr_10 = import11.UNINITIALIZED;
    this._map_1 = import9.pureProxy1((p0:any):{[key: string]:any} => {
      return {'fa fa-fw fa-circle': p0};
    });
    this._expr_11 = import11.UNINITIALIZED;
    this._expr_12 = import11.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._anchor_14,
      this._text_15
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.NgClass) && (10 === requestNodeIndex))) { return this._NgClass_10_3; }
    if (((token === import15.NgClass) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._NgClass_8_3; }
    if (((token === import20.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import16.NgIf) && (14 === requestNodeIndex))) { return this._NgIf_14_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_9:any = this._map_0(true,(this.context.hover && !this.context.disabled),this.context.checked,this.context.disabled,this.context.focused);
    if (import9.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._NgClass_8_3.ngClass = currVal_9;
      this._expr_9 = currVal_9;
    }
    if (!throwOnChange) { this._NgClass_8_3.ngDoCheck(); }
    const currVal_10:any = 'ui-radiobutton-icon';
    if (import9.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._NgClass_10_3.klass = currVal_10;
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this._map_1(this.context.checked);
    if (import9.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._NgClass_10_3.ngClass = currVal_11;
      this._expr_11 = currVal_11;
    }
    if (!throwOnChange) { this._NgClass_10_3.ngDoCheck(); }
    const currVal_12:any = this.context.label;
    if (import9.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._NgIf_14_6.ngIf = currVal_12;
      this._expr_12 = currVal_12;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = this.context.name;
    if (import9.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementAttribute(this._el_5,'name',((currVal_3 == (null as any))? (null as any): currVal_3.toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.value;
    if (import9.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_5,'value',((currVal_4 == (null as any))? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.context.checked;
    if (import9.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_5,'checked',currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_change_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onChange($event)) !== false);
    return (true && pd_0);
  }
  private _handle_focus_5_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onFocus($event)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_5_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onBlur($event)) !== false);
    return (true && pd_0);
  }
  private _handle_click_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.handleClick()) !== false);
    return (true && pd_0);
  }
  private _handle_mouseenter_8_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.hover = true)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseleave_8_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.hover = false)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_RadioButton0(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<import1.RadioButton> {
  if ((renderType_RadioButton === (null as any))) { (renderType_RadioButton = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/radiobutton/radiobutton.ts class RadioButton - inline template',0,import13.ViewEncapsulation.None,styles_RadioButton,{})); }
  return new _View_RadioButton0(viewUtils,parentInjector,declarationEl);
}
class _View_RadioButton1 extends import7.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_RadioButton1,renderType_RadioButton,import10.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import11.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'label',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-radiobutton-label');
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import11.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import9.interpolate(1,'',this.parent.context.label,'');
    if (import9.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.select()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_RadioButton1(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_RadioButton1(viewUtils,parentInjector,declarationEl);
}