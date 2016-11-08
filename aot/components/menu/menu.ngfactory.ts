/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/menu/menu';
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
import * as import14 from '@angular/router/src/router';
import * as import15 from '@angular/core/src/metadata/view';
import * as import16 from '@angular/core/src/linker/component_factory';
import * as import17 from '@angular/common/src/directives/ng_class';
import * as import18 from '@angular/common/src/directives/ng_style';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/common/src/directives/ng_for';
import * as import24 from '@angular/core/src/security';
class MenuModuleInjector extends import0.NgModuleInjector<import1.MenuModule> {
  _CommonModule_0:import2.CommonModule;
  _MenuModule_1:import1.MenuModule;
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
  createInternal():import1.MenuModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._MenuModule_1 = new import1.MenuModule();
    return this._MenuModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.MenuModule)) { return this._MenuModule_1; }
    if ((token === import5.LOCALE_ID)) { return this._LOCALE_ID_2; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import5.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const MenuModuleNgFactory:import0.NgModuleFactory<import1.MenuModule> = new import0.NgModuleFactory(MenuModuleInjector,import1.MenuModule);
var renderType_Menu_Host:import6.RenderComponentType = (null as any);
class _View_Menu_Host0 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _DomHandler_0_4:import9.DomHandler;
  _Menu_0_5:import1.Menu;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menu_Host0,renderType_Menu_Host,import11.ViewType.HOST,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-menu',rootSelector,(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Menu0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DomHandler_0_4 = new import9.DomHandler();
    this._Menu_0_5 = new import1.Menu(new import13.ElementRef(this._el_0),this._DomHandler_0_4,this.renderer,this.parentInjector.get(import14.Router));
    this._appEl_0.initComponent(this._Menu_0_5,[],compView_0);
    compView_0.create(this._Menu_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.DomHandler) && (0 === requestNodeIndex))) { return this._DomHandler_0_4; }
    if (((token === import1.Menu) && (0 === requestNodeIndex))) { return this._Menu_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Menu_0_5.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Menu_0_5.ngOnDestroy();
  }
}
function viewFactory_Menu_Host0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  if ((renderType_Menu_Host === (null as any))) { (renderType_Menu_Host = viewUtils.createRenderComponentType('',0,import15.ViewEncapsulation.None,[],{})); }
  return new _View_Menu_Host0(viewUtils,parentInjector,declarationEl);
}
export const MenuNgFactory:import16.ComponentFactory<import1.Menu> = new import16.ComponentFactory<import1.Menu>('p-menu',viewFactory_Menu_Host0,import1.Menu);
const styles_Menu:any[] = [];
var renderType_Menu:import6.RenderComponentType = (null as any);
class _View_Menu0 extends import7.AppView<import1.Menu> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import17.NgClass;
  _NgStyle_1_4:import18.NgStyle;
  _text_2:any;
  _el_3:any;
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
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_1:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menu0,renderType_Menu,import11.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._NgClass_1_3 = new import17.NgClass(this.parentInjector.get(import20.IterableDiffers),this.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_1),this.renderer);
    this._NgStyle_1_4 = new import18.NgStyle(this.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','ui-menu-list ui-helper-reset');
    this._text_4 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_5 = new import8.AppElement(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import22.TemplateRef_(this._appEl_5,viewFactory_Menu1);
    this._NgIf_5_6 = new import19.NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_7 = new import8.AppElement(7,3,this,this._anchor_7);
    this._TemplateRef_7_5 = new import22.TemplateRef_(this._appEl_7,viewFactory_Menu5);
    this._NgIf_7_6 = new import19.NgIf(this._appEl_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_3,'\n            ',(null as any));
    this._text_9 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._expr_1 = import12.UNINITIALIZED;
    this._map_0 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix': p0,
        'ui-menu-dynamic ui-shadow': p1
      }
      ;
    });
    this._expr_2 = import12.UNINITIALIZED;
    this._expr_3 = import12.UNINITIALIZED;
    this._expr_4 = import12.UNINITIALIZED;
    this._expr_5 = import12.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9,
      this._text_10
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import19.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6; }
    if (((token === import22.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import19.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6; }
    if (((token === import17.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgClass_1_3; }
    if (((token === import18.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgStyle_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.context.styleClass;
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_1_3.klass = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._map_0(true,this.context.popup);
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
    const currVal_4:any = this.context.hasSubMenu();
    if (import10.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_5_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:boolean = !this.context.hasSubMenu();
    if (import10.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_7_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.context.preventDocumentDefault = true)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Menu0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<import1.Menu> {
  if ((renderType_Menu === (null as any))) { (renderType_Menu = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/menu/menu.ts class Menu - inline template',0,import15.ViewEncapsulation.None,styles_Menu,{})); }
  return new _View_Menu0(viewUtils,parentInjector,declarationEl);
}
class _View_Menu1 extends import7.AppView<any> {
  _anchor_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _TemplateRef_0_5:any;
  _NgFor_0_6:import23.NgFor;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menu1,renderType_Menu,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._anchor_0 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import22.TemplateRef_(this._appEl_0,viewFactory_Menu2);
    this._NgFor_0_6 = new import23.NgFor(this._appEl_0.vcRef,this._TemplateRef_0_5,this.parent.parentInjector.get(import20.IterableDiffers),this.parent.ref);
    this._expr_0 = import12.UNINITIALIZED;
    this.init([].concat([this._appEl_0]),[this._anchor_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import23.NgFor) && (0 === requestNodeIndex))) { return this._NgFor_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import12.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.parent.context.model;
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_0_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import12.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_0_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_0_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Menu1(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Menu1(viewUtils,parentInjector,declarationEl);
}
class _View_Menu2 extends import7.AppView<any> {
  _text_0:any;
  _el_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import8.AppElement;
  _TemplateRef_5_5:any;
  _NgFor_5_6:import23.NgFor;
  _text_6:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menu2,renderType_Menu,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._el_1 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','ui-widget-header ui-corner-all');
    this._el_2 = this.renderer.createElement(this._el_1,'h3',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_5 = new import8.AppElement(5,(null as any),this,this._anchor_5);
    this._TemplateRef_5_5 = new import22.TemplateRef_(this._appEl_5,viewFactory_Menu3);
    this._NgFor_5_6 = new import23.NgFor(this._appEl_5.vcRef,this._TemplateRef_5_5,this.parent.parent.parentInjector.get(import20.IterableDiffers),this.parent.parent.ref);
    this._text_6 = this.renderer.createText((null as any),'\n                ',(null as any));
    this._expr_0 = import12.UNINITIALIZED;
    this._expr_1 = import12.UNINITIALIZED;
    this.init([].concat([
      this._text_0,
      this._el_1,
      this._text_4,
      this._appEl_5,
      this._text_6
    ]
    ),[
      this._text_0,
      this._el_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._anchor_5,
      this._text_6
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import23.NgFor) && (5 === requestNodeIndex))) { return this._NgFor_5_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import12.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this.context.$implicit.items;
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgFor_5_6.ngForOf = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import12.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._NgFor_5_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_5_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import10.interpolate(1,'',this.context.$implicit.label,'');
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Menu2(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Menu2(viewUtils,parentInjector,declarationEl);
}
class _View_Menu3 extends import7.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _NgClass_2_3:import17.NgClass;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import8.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import19.NgIf;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  _map_0:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menu3,renderType_Menu,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-menuitem ui-widget ui-corner-all');
    this._text_1 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','ui-menuitem-link ui-corner-all');
    this._NgClass_2_3 = new import17.NgClass(this.parent.parent.parent.parentInjector.get(import20.IterableDiffers),this.parent.parent.parent.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText(this._el_2,'\n                            ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_4 = new import8.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import22.TemplateRef_(this._appEl_4,viewFactory_Menu4);
    this._NgIf_4_6 = new import19.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_2,'\n                            ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_2,'span',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','ui-menuitem-text');
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n                        ',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._expr_3 = import12.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'mouseenter',this.eventHandler(this._handle_mouseenter_2_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_2,'mouseleave',this.eventHandler(this._handle_mouseleave_2_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_2.bind(this)));
    this._expr_4 = import12.UNINITIALIZED;
    this._map_0 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'ui-state-hover': p0,
        'ui-state-disabled': p1
      }
      ;
    });
    this._expr_5 = import12.UNINITIALIZED;
    this._expr_6 = import12.UNINITIALIZED;
    this._expr_7 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9
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
    if (((token === import22.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import19.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    if (((token === import17.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._NgClass_2_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = 'ui-menuitem-link ui-corner-all';
    if (import10.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgClass_2_3.klass = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._map_0(((this._el_2 == this.parent.parent.parent.context.hoveredItem) && !this.context.$implicit.disabled),this.context.$implicit.disabled);
    if (import10.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgClass_2_3.ngClass = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (!throwOnChange) { this._NgClass_2_3.ngDoCheck(); }
    const currVal_6:any = this.context.$implicit.icon;
    if (import10.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgIf_4_6.ngIf = currVal_6;
      this._expr_6 = currVal_6;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = (this.context.$implicit.url || '#');
    if (import10.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import24.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    const currVal_7:any = import10.interpolate(1,'',this.context.$implicit.label,'');
    if (import10.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_7,currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mouseenter_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.parent.parent.context.hoveredItem = $event.target)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseleave_2_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.parent.parent.context.hoveredItem = (null as any))) !== false);
    return (true && pd_0);
  }
  private _handle_click_2_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.parent.context.itemClick($event,this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Menu3(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Menu3(viewUtils,parentInjector,declarationEl);
}
class _View_Menu4 extends import7.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import17.NgClass;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menu4,renderType_Menu,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-menuitem-icon fa fa-fw');
    this._NgClass_0_3 = new import17.NgClass(this.parent.parent.parent.parent.parentInjector.get(import20.IterableDiffers),this.parent.parent.parent.parent.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._expr_0 = import12.UNINITIALIZED;
    this._expr_1 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.NgClass) && (0 === requestNodeIndex))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = 'ui-menuitem-icon fa fa-fw';
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_0_3.klass = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.parent.context.$implicit.icon;
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_0_3.ngClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Menu4(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Menu4(viewUtils,parentInjector,declarationEl);
}
class _View_Menu5 extends import7.AppView<any> {
  _anchor_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _TemplateRef_0_5:any;
  _NgFor_0_6:import23.NgFor;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menu5,renderType_Menu,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._anchor_0 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import22.TemplateRef_(this._appEl_0,viewFactory_Menu6);
    this._NgFor_0_6 = new import23.NgFor(this._appEl_0.vcRef,this._TemplateRef_0_5,this.parent.parentInjector.get(import20.IterableDiffers),this.parent.ref);
    this._expr_0 = import12.UNINITIALIZED;
    this.init([].concat([this._appEl_0]),[this._anchor_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import23.NgFor) && (0 === requestNodeIndex))) { return this._NgFor_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import12.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.parent.context.model;
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_0_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import12.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_0_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_0_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Menu5(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Menu5(viewUtils,parentInjector,declarationEl);
}
class _View_Menu6 extends import7.AppView<any> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _NgClass_3_3:import17.NgClass;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import8.AppElement;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import19.NgIf;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  _map_0:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menu6,renderType_Menu,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n                    ',(null as any));
    this._el_1 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','ui-menuitem ui-widget ui-corner-all');
    this._text_2 = this.renderer.createText(this._el_1,'\n                        ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'a',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','ui-menuitem-link ui-corner-all');
    this._NgClass_3_3 = new import17.NgClass(this.parent.parent.parentInjector.get(import20.IterableDiffers),this.parent.parent.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_3),this.renderer);
    this._text_4 = this.renderer.createText(this._el_3,'\n                            ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_5 = new import8.AppElement(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import22.TemplateRef_(this._appEl_5,viewFactory_Menu7);
    this._NgIf_5_6 = new import19.NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_3,'\n                            ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_3,'span',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','ui-menuitem-text');
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n                        ',(null as any));
    this._text_10 = this.renderer.createText(this._el_1,'\n                    ',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n                ',(null as any));
    this._expr_3 = import12.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_3,'mouseenter',this.eventHandler(this._handle_mouseenter_3_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_3,'mouseleave',this.eventHandler(this._handle_mouseleave_3_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_3,'click',this.eventHandler(this._handle_click_3_2.bind(this)));
    this._expr_4 = import12.UNINITIALIZED;
    this._map_0 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'ui-state-hover': p0,
        'ui-state-disabled': p1
      }
      ;
    });
    this._expr_5 = import12.UNINITIALIZED;
    this._expr_6 = import12.UNINITIALIZED;
    this._expr_7 = import12.UNINITIALIZED;
    this.init([].concat([
      this._text_0,
      this._el_1,
      this._text_11
    ]
    ),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._text_11
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
    if (((token === import22.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import19.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6; }
    if (((token === import17.NgClass) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgClass_3_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = 'ui-menuitem-link ui-corner-all';
    if (import10.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgClass_3_3.klass = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._map_0(((this._el_3 == this.parent.parent.context.hoveredItem) && !this.context.$implicit.disabled),this.context.$implicit.disabled);
    if (import10.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgClass_3_3.ngClass = currVal_5;
      this._expr_5 = currVal_5;
    }
    if (!throwOnChange) { this._NgClass_3_3.ngDoCheck(); }
    const currVal_6:any = this.context.$implicit.icon;
    if (import10.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgIf_5_6.ngIf = currVal_6;
      this._expr_6 = currVal_6;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = (this.context.$implicit.url || '#');
    if (import10.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_3,'href',this.viewUtils.sanitizer.sanitize(import24.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    const currVal_7:any = import10.interpolate(1,'',this.context.$implicit.label,'');
    if (import10.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_8,currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mouseenter_3_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.parent.context.hoveredItem = $event.target)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseleave_3_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.parent.context.hoveredItem = (null as any))) !== false);
    return (true && pd_0);
  }
  private _handle_click_3_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.itemClick($event,this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Menu6(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Menu6(viewUtils,parentInjector,declarationEl);
}
class _View_Menu7 extends import7.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import17.NgClass;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menu7,renderType_Menu,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-menuitem-icon fa fa-fw');
    this._NgClass_0_3 = new import17.NgClass(this.parent.parent.parent.parentInjector.get(import20.IterableDiffers),this.parent.parent.parent.parentInjector.get(import21.KeyValueDiffers),new import13.ElementRef(this._el_0),this.renderer);
    this._expr_0 = import12.UNINITIALIZED;
    this._expr_1 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.NgClass) && (0 === requestNodeIndex))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = 'ui-menuitem-icon fa fa-fw';
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_0_3.klass = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.parent.context.$implicit.icon;
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_0_3.ngClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Menu7(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_Menu7(viewUtils,parentInjector,declarationEl);
}