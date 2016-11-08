/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/terminal/terminal';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/i18n/tokens';
import * as import9 from '@angular/core/src/render/api';
import * as import10 from '@angular/core/src/linker/view';
import * as import11 from '@angular/core/src/linker/element';
import * as import12 from '../../../components/dom/domhandler';
import * as import13 from '@angular/core/src/linker/view_utils';
import * as import14 from '@angular/core/src/linker/view_type';
import * as import15 from '@angular/core/src/change_detection/change_detection';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/core/src/metadata/view';
import * as import18 from '@angular/core/src/linker/component_factory';
import * as import19 from '@angular/common/src/directives/ng_class';
import * as import20 from '@angular/common/src/directives/ng_style';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from '@angular/common/src/directives/ng_for';
import * as import23 from '@angular/forms/src/directives/default_value_accessor';
import * as import24 from '@angular/forms/src/directives/ng_model';
import * as import25 from '@angular/forms/src/directives/ng_control_status';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import27 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/forms/src/directives/control_value_accessor';
import * as import30 from '@angular/forms/src/directives/ng_control';
class TerminalModuleInjector extends import0.NgModuleInjector<import1.TerminalModule> {
  _CommonModule_0:import2.CommonModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _FormsModule_2:import4.FormsModule;
  _TerminalModule_3:import1.TerminalModule;
  __LOCALE_ID_4:any;
  __NgLocalization_5:import5.NgLocaleLocalization;
  __RadioControlRegistry_6:import6.RadioControlRegistry;
  __TRANSLATIONS_FORMAT_7:any;
  constructor(parent:import7.Injector) {
    super(parent,[],[]);
  }
  get _LOCALE_ID_4():any {
    if ((this.__LOCALE_ID_4 == (null as any))) { (this.__LOCALE_ID_4 = (null as any)); }
    return this.__LOCALE_ID_4;
  }
  get _NgLocalization_5():import5.NgLocaleLocalization {
    if ((this.__NgLocalization_5 == (null as any))) { (this.__NgLocalization_5 = new import5.NgLocaleLocalization(this._LOCALE_ID_4)); }
    return this.__NgLocalization_5;
  }
  get _RadioControlRegistry_6():import6.RadioControlRegistry {
    if ((this.__RadioControlRegistry_6 == (null as any))) { (this.__RadioControlRegistry_6 = new import6.RadioControlRegistry()); }
    return this.__RadioControlRegistry_6;
  }
  get _TRANSLATIONS_FORMAT_7():any {
    if ((this.__TRANSLATIONS_FORMAT_7 == (null as any))) { (this.__TRANSLATIONS_FORMAT_7 = (null as any)); }
    return this.__TRANSLATIONS_FORMAT_7;
  }
  createInternal():import1.TerminalModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._FormsModule_2 = new import4.FormsModule();
    this._TerminalModule_3 = new import1.TerminalModule();
    return this._TerminalModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.FormsModule)) { return this._FormsModule_2; }
    if ((token === import1.TerminalModule)) { return this._TerminalModule_3; }
    if ((token === import8.LOCALE_ID)) { return this._LOCALE_ID_4; }
    if ((token === import5.NgLocalization)) { return this._NgLocalization_5; }
    if ((token === import6.RadioControlRegistry)) { return this._RadioControlRegistry_6; }
    if ((token === import8.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_7; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const TerminalModuleNgFactory:import0.NgModuleFactory<import1.TerminalModule> = new import0.NgModuleFactory(TerminalModuleInjector,import1.TerminalModule);
var renderType_Terminal_Host:import9.RenderComponentType = (null as any);
class _View_Terminal_Host0 extends import10.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import11.AppElement;
  _DomHandler_0_4:import12.DomHandler;
  _Terminal_0_5:import1.Terminal;
  constructor(viewUtils:import13.ViewUtils,parentInjector:import7.Injector,declarationEl:import11.AppElement) {
    super(_View_Terminal_Host0,renderType_Terminal_Host,import14.ViewType.HOST,viewUtils,parentInjector,declarationEl,import15.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import11.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-terminal',rootSelector,(null as any));
    this._appEl_0 = new import11.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Terminal0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DomHandler_0_4 = new import12.DomHandler();
    this._Terminal_0_5 = new import1.Terminal(new import16.ElementRef(this._el_0),this._DomHandler_0_4);
    this._appEl_0.initComponent(this._Terminal_0_5,[],compView_0);
    compView_0.create(this._Terminal_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.DomHandler) && (0 === requestNodeIndex))) { return this._DomHandler_0_4; }
    if (((token === import1.Terminal) && (0 === requestNodeIndex))) { return this._Terminal_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Terminal_0_5.ngAfterViewInit(); }
      this._Terminal_0_5.ngAfterViewChecked();
    }
  }
}
function viewFactory_Terminal_Host0(viewUtils:import13.ViewUtils,parentInjector:import7.Injector,declarationEl:import11.AppElement):import10.AppView<any> {
  if ((renderType_Terminal_Host === (null as any))) { (renderType_Terminal_Host = viewUtils.createRenderComponentType('',0,import17.ViewEncapsulation.None,[],{})); }
  return new _View_Terminal_Host0(viewUtils,parentInjector,declarationEl);
}
export const TerminalNgFactory:import18.ComponentFactory<import1.Terminal> = new import18.ComponentFactory<import1.Terminal>('p-terminal',viewFactory_Terminal_Host0,import1.Terminal);
const styles_Terminal:any[] = [];
var renderType_Terminal:import9.RenderComponentType = (null as any);
class _View_Terminal0 extends import10.AppView<import1.Terminal> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import19.NgClass;
  _NgStyle_1_4:import20.NgStyle;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import11.AppElement;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import21.NgIf;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import11.AppElement;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import22.NgFor;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _DefaultValueAccessor_15_3:import23.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_15_4:any[];
  _NgModel_15_5:import24.NgModel;
  _NgControl_15_6:any;
  _NgControlStatus_15_7:import25.NgControlStatus;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  constructor(viewUtils:import13.ViewUtils,parentInjector:import7.Injector,declarationEl:import11.AppElement) {
    super(_View_Terminal0,renderType_Terminal,import14.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import15.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import11.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._NgClass_1_3 = new import19.NgClass(this.parentInjector.get(import26.IterableDiffers),this.parentInjector.get(import27.KeyValueDiffers),new import16.ElementRef(this._el_1),this.renderer);
    this._NgStyle_1_4 = new import20.NgStyle(this.parentInjector.get(import27.KeyValueDiffers),new import16.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import11.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import28.TemplateRef_(this._appEl_3,viewFactory_Terminal1);
    this._NgIf_3_6 = new import21.NgIf(this._appEl_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','ui-terminal-content');
    this._text_6 = this.renderer.createText(this._el_5,'\n                ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._appEl_7 = new import11.AppElement(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import28.TemplateRef_(this._appEl_7,viewFactory_Terminal2);
    this._NgFor_7_6 = new import22.NgFor(this._appEl_7.vcRef,this._TemplateRef_7_5,this.parentInjector.get(import26.IterableDiffers),this.ref);
    this._text_8 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._text_9 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_10 = this.renderer.createElement(this._el_1,'div',(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n                ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_10,'span',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','ui-terminal-content-prompt');
    this._text_13 = this.renderer.createText(this._el_12,'',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n                ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_10,'input',(null as any));
    this.renderer.setElementAttribute(this._el_15,'autocomplete','off');
    this.renderer.setElementAttribute(this._el_15,'autofocus','');
    this.renderer.setElementAttribute(this._el_15,'class','ui-terminal-input');
    this.renderer.setElementAttribute(this._el_15,'type','text');
    this._DefaultValueAccessor_15_3 = new import23.DefaultValueAccessor(this.renderer,new import16.ElementRef(this._el_15));
    this._NG_VALUE_ACCESSOR_15_4 = [this._DefaultValueAccessor_15_3];
    this._NgModel_15_5 = new import24.NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_15_4);
    this._NgControl_15_6 = this._NgModel_15_5;
    this._NgControlStatus_15_7 = new import25.NgControlStatus(this._NgControl_15_6);
    this._text_16 = this.renderer.createText(this._el_10,'\n            ',(null as any));
    this._text_17 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._expr_1 = import15.UNINITIALIZED;
    this._expr_2 = import15.UNINITIALIZED;
    this._expr_3 = import15.UNINITIALIZED;
    this._expr_4 = import15.UNINITIALIZED;
    this._expr_5 = import15.UNINITIALIZED;
    this._expr_6 = import15.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_15,'ngModelChange',this.eventHandler(this._handle_ngModelChange_15_0.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_15,'keydown',this.eventHandler(this._handle_keydown_15_1.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_15,'input',this.eventHandler(this._handle_input_15_2.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_15,'blur',this.eventHandler(this._handle_blur_15_3.bind(this)));
    this._expr_11 = import15.UNINITIALIZED;
    const subscription_0:any = this._NgModel_15_5.update.subscribe(this.eventHandler(this._handle_ngModelChange_15_0.bind(this)));
    this._expr_12 = import15.UNINITIALIZED;
    this._expr_13 = import15.UNINITIALIZED;
    this._expr_14 = import15.UNINITIALIZED;
    this._expr_15 = import15.UNINITIALIZED;
    this._expr_16 = import15.UNINITIALIZED;
    this._expr_17 = import15.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import28.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import21.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6; }
    if (((token === import28.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import22.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6; }
    if (((token === import23.DefaultValueAccessor) && (15 === requestNodeIndex))) { return this._DefaultValueAccessor_15_3; }
    if (((token === import29.NG_VALUE_ACCESSOR) && (15 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_15_4; }
    if (((token === import24.NgModel) && (15 === requestNodeIndex))) { return this._NgModel_15_5; }
    if (((token === import30.NgControl) && (15 === requestNodeIndex))) { return this._NgControl_15_6; }
    if (((token === import25.NgControlStatus) && (15 === requestNodeIndex))) { return this._NgControlStatus_15_7; }
    if (((token === import19.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._NgClass_1_3; }
    if (((token === import20.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._NgStyle_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import15.SimpleChange} = (null as any);
    const currVal_1:any = this.context.styleClass;
    if (import13.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_1_3.klass = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = 'ui-terminal ui-widget ui-widget-content ui-corner-all';
    if (import13.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgClass_1_3.ngClass = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgClass_1_3.ngDoCheck(); }
    const currVal_3:any = this.context.style;
    if (import13.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgStyle_1_4.ngStyle = currVal_3;
      this._expr_3 = currVal_3;
    }
    if (!throwOnChange) { this._NgStyle_1_4.ngDoCheck(); }
    const currVal_4:any = this.context.welcomeMessage;
    if (import13.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_3_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    changes = (null as any);
    const currVal_5:any = this.context.commands;
    if (import13.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgFor_7_6.ngForOf = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import15.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    if ((changes !== (null as any))) { this._NgFor_7_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_7_6.ngDoCheck(); }
    changes = (null as any);
    const currVal_11:any = this.context.command;
    if (import13.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._NgModel_15_5.model = currVal_11;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import15.SimpleChange(this._expr_11,currVal_11);
      this._expr_11 = currVal_11;
    }
    if ((changes !== (null as any))) { this._NgModel_15_5.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_6:any = import13.interpolate(1,'',this.context.prompt,'');
    if (import13.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_13,currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_12:any = this._NgControlStatus_15_7.ngClassUntouched;
    if (import13.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_15,'ng-untouched',currVal_12);
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this._NgControlStatus_15_7.ngClassTouched;
    if (import13.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementClass(this._el_15,'ng-touched',currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this._NgControlStatus_15_7.ngClassPristine;
    if (import13.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementClass(this._el_15,'ng-pristine',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = this._NgControlStatus_15_7.ngClassDirty;
    if (import13.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setElementClass(this._el_15,'ng-dirty',currVal_15);
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this._NgControlStatus_15_7.ngClassValid;
    if (import13.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementClass(this._el_15,'ng-valid',currVal_16);
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = this._NgControlStatus_15_7.ngClassInvalid;
    if (import13.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_15,'ng-invalid',currVal_17);
      this._expr_17 = currVal_17;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_15_5.ngOnDestroy();
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.focus(this._el_15)) !== false);
    return (true && pd_0);
  }
  private _handle_ngModelChange_15_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.command = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_keydown_15_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.handleCommand($event)) !== false);
    return (true && pd_0);
  }
  private _handle_input_15_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_15_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_15_3($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_15_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Terminal0(viewUtils:import13.ViewUtils,parentInjector:import7.Injector,declarationEl:import11.AppElement):import10.AppView<import1.Terminal> {
  if ((renderType_Terminal === (null as any))) { (renderType_Terminal = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/terminal/terminal.ts class Terminal - inline template',0,import17.ViewEncapsulation.None,styles_Terminal,{})); }
  return new _View_Terminal0(viewUtils,parentInjector,declarationEl);
}
class _View_Terminal1 extends import10.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import13.ViewUtils,parentInjector:import7.Injector,declarationEl:import11.AppElement) {
    super(_View_Terminal1,renderType_Terminal,import14.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import15.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import11.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._expr_0 = import15.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import13.interpolate(1,'',this.parent.context.welcomeMessage,'');
    if (import13.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_1,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Terminal1(viewUtils:import13.ViewUtils,parentInjector:import7.Injector,declarationEl:import11.AppElement):import10.AppView<any> {
  return new _View_Terminal1(viewUtils,parentInjector,declarationEl);
}
class _View_Terminal2 extends import10.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import13.ViewUtils,parentInjector:import7.Injector,declarationEl:import11.AppElement) {
    super(_View_Terminal2,renderType_Terminal,import14.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import15.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import11.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'span',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'span',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','ui-terminal-command');
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_0,'div',(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._expr_0 = import15.UNINITIALIZED;
    this._expr_1 = import15.UNINITIALIZED;
    this._expr_2 = import15.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import13.interpolate(1,'',this.parent.context.prompt,'');
    if (import13.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import13.interpolate(1,'',this.context.$implicit.text,'');
    if (import13.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_6,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import13.interpolate(1,'',this.context.$implicit.response,'');
    if (import13.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_9,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Terminal2(viewUtils:import13.ViewUtils,parentInjector:import7.Injector,declarationEl:import11.AppElement):import10.AppView<any> {
  return new _View_Terminal2(viewUtils,parentInjector,declarationEl);
}