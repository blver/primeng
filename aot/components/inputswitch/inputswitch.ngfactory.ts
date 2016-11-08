/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/inputswitch/inputswitch';
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
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '@angular/core/src/change_detection/differs/keyvalue_differs';
class InputSwitchModuleInjector extends import0.NgModuleInjector<import1.InputSwitchModule> {
  _CommonModule_0:import2.CommonModule;
  _InputSwitchModule_1:import1.InputSwitchModule;
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
  createInternal():import1.InputSwitchModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InputSwitchModule_1 = new import1.InputSwitchModule();
    return this._InputSwitchModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.InputSwitchModule)) { return this._InputSwitchModule_1; }
    if ((token === import5.LOCALE_ID)) { return this._LOCALE_ID_2; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import5.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const InputSwitchModuleNgFactory:import0.NgModuleFactory<import1.InputSwitchModule> = new import0.NgModuleFactory(InputSwitchModuleInjector,import1.InputSwitchModule);
var renderType_InputSwitch_Host:import6.RenderComponentType = (null as any);
class _View_InputSwitch_Host0 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _DomHandler_0_4:import9.DomHandler;
  _InputSwitch_0_5:import1.InputSwitch;
  __NG_VALUE_ACCESSOR_0_6:any[];
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_InputSwitch_Host0,renderType_InputSwitch_Host,import11.ViewType.HOST,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_0_6():any[] {
    if ((this.__NG_VALUE_ACCESSOR_0_6 == (null as any))) { (this.__NG_VALUE_ACCESSOR_0_6 = [this._InputSwitch_0_5]); }
    return this.__NG_VALUE_ACCESSOR_0_6;
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-inputSwitch',rootSelector,(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_InputSwitch0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DomHandler_0_4 = new import9.DomHandler();
    this._InputSwitch_0_5 = new import1.InputSwitch(new import13.ElementRef(this._el_0),this._DomHandler_0_4);
    this._appEl_0.initComponent(this._InputSwitch_0_5,[],compView_0);
    compView_0.create(this._InputSwitch_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.DomHandler) && (0 === requestNodeIndex))) { return this._DomHandler_0_4; }
    if (((token === import1.InputSwitch) && (0 === requestNodeIndex))) { return this._InputSwitch_0_5; }
    if (((token === import14.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._InputSwitch_0_5.ngAfterViewInit(); }
      this._InputSwitch_0_5.ngAfterViewChecked();
    }
  }
}
function viewFactory_InputSwitch_Host0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  if ((renderType_InputSwitch_Host === (null as any))) { (renderType_InputSwitch_Host = viewUtils.createRenderComponentType('',0,import15.ViewEncapsulation.None,[],{})); }
  return new _View_InputSwitch_Host0(viewUtils,parentInjector,declarationEl);
}
export const InputSwitchNgFactory:import16.ComponentFactory<import1.InputSwitch> = new import16.ComponentFactory<import1.InputSwitch>('p-inputSwitch',viewFactory_InputSwitch_Host0,import1.InputSwitch);
const styles_InputSwitch:any[] = [];
var renderType_InputSwitch:import6.RenderComponentType = (null as any);
class _View_InputSwitch0 extends import7.AppView<import1.InputSwitch> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import17.NgClass;
  _NgStyle_1_4:import18.NgStyle;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _NgClass_15_3:import17.NgClass;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  /*private*/ _expr_1:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  _map_1:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_InputSwitch0,renderType_InputSwitch,import11.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._NgClass_1_3 = new import17.NgClass(this.parentInjector.get(import19.IterableDiffers),this.parentInjector.get(import20.KeyValueDiffers),new import13.ElementRef(this._el_1),this.renderer);
    this._NgStyle_1_4 = new import18.NgStyle(this.parentInjector.get(import20.KeyValueDiffers),new import13.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','ui-inputswitch-off');
    this._text_4 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'span',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','ui-inputswitch-offlabel');
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_3,'\n            ',(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','ui-inputswitch-on');
    this._text_10 = this.renderer.createText(this._el_9,'\n                ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_9,'span',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','ui-inputswitch-onlabel');
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n            ',(null as any));
    this._text_14 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_1,'div',(null as any));
    this._NgClass_15_3 = new import17.NgClass(this.parentInjector.get(import19.IterableDiffers),this.parentInjector.get(import20.KeyValueDiffers),new import13.ElementRef(this._el_15),this.renderer);
    this._text_16 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','ui-helper-hidden-accessible');
    this._text_18 = this.renderer.createText(this._el_17,'\n                ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_17,'input',(null as any));
    this.renderer.setElementAttribute(this._el_19,'readonly','readonly');
    this.renderer.setElementAttribute(this._el_19,'type','checkbox');
    this._text_20 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._text_21 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_22 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._expr_1 = import12.UNINITIALIZED;
    this._map_0 = import10.pureProxy3((p0:any,p1:any,p2:any):{[key: string]:any} => {
      return {
        'ui-inputswitch ui-widget ui-widget-content ui-corner-all': p0,
        'ui-state-disabled': p1,
        'ui-inputswitch-checked': p2
      }
      ;
    });
    this._expr_2 = import12.UNINITIALIZED;
    this._expr_3 = import12.UNINITIALIZED;
    this._expr_4 = import12.UNINITIALIZED;
    this._expr_5 = import12.UNINITIALIZED;
    this._map_1 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'ui-inputswitch-handle ui-state-default': p0,
        'ui-state-focus': p1
      }
      ;
    });
    this._expr_6 = import12.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_19,'focus',this.eventHandler(this._handle_focus_19_0.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_19,'blur',this.eventHandler(this._handle_blur_19_1.bind(this)));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22
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
    if (((token === import17.NgClass) && (15 === requestNodeIndex))) { return this._NgClass_15_3; }
    if (((token === import17.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._NgClass_1_3; }
    if (((token === import18.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._NgStyle_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.context.styleClass;
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_1_3.klass = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._map_0(true,this.context.disabled,this.context.checked);
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
    const currVal_6:any = this._map_1(true,this.context.focused);
    if (import10.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgClass_15_3.ngClass = currVal_6;
      this._expr_6 = currVal_6;
    }
    if (!throwOnChange) { this._NgClass_15_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = import10.interpolate(1,'',this.context.offLabel,'');
    if (import10.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_6,currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = import10.interpolate(1,'',this.context.onLabel,'');
    if (import10.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_12,currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.toggle($event,this._el_19)) !== false);
    return (true && pd_0);
  }
  private _handle_focus_19_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onFocus($event)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_19_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onBlur($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_InputSwitch0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<import1.InputSwitch> {
  if ((renderType_InputSwitch === (null as any))) { (renderType_InputSwitch = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/inputswitch/inputswitch.ts class InputSwitch - inline template',0,import15.ViewEncapsulation.None,styles_InputSwitch,{})); }
  return new _View_InputSwitch0(viewUtils,parentInjector,declarationEl);
}