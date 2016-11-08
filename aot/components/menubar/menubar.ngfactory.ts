/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/menubar/menubar';
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
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/core/src/metadata/view';
import * as import15 from '@angular/core/src/linker/component_factory';
import * as import16 from '@angular/common/src/directives/ng_class';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@angular/common/src/directives/ng_if';
import * as import23 from '@angular/core/src/security';
import * as import24 from '@angular/common/src/directives/ng_style';
class MenubarModuleInjector extends import0.NgModuleInjector<import1.MenubarModule> {
  _CommonModule_0:import2.CommonModule;
  _MenubarModule_1:import1.MenubarModule;
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
  createInternal():import1.MenubarModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._MenubarModule_1 = new import1.MenubarModule();
    return this._MenubarModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.MenubarModule)) { return this._MenubarModule_1; }
    if ((token === import5.LOCALE_ID)) { return this._LOCALE_ID_2; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import5.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const MenubarModuleNgFactory:import0.NgModuleFactory<import1.MenubarModule> = new import0.NgModuleFactory(MenubarModuleInjector,import1.MenubarModule);
var renderType_MenubarSub_Host:import6.RenderComponentType = (null as any);
class _View_MenubarSub_Host0 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _DomHandler_0_4:import9.DomHandler;
  _MenubarSub_0_5:import1.MenubarSub;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_MenubarSub_Host0,renderType_MenubarSub_Host,import11.ViewType.HOST,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-menubarSub',rootSelector,(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MenubarSub0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DomHandler_0_4 = new import9.DomHandler();
    this._MenubarSub_0_5 = new import1.MenubarSub(this._DomHandler_0_4,this.parentInjector.get(import13.Router));
    this._appEl_0.initComponent(this._MenubarSub_0_5,[],compView_0);
    compView_0.create(this._MenubarSub_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.DomHandler) && (0 === requestNodeIndex))) { return this._DomHandler_0_4; }
    if (((token === import1.MenubarSub) && (0 === requestNodeIndex))) { return this._MenubarSub_0_5; }
    return notFoundResult;
  }
}
function viewFactory_MenubarSub_Host0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  if ((renderType_MenubarSub_Host === (null as any))) { (renderType_MenubarSub_Host = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,[],{})); }
  return new _View_MenubarSub_Host0(viewUtils,parentInjector,declarationEl);
}
export const MenubarSubNgFactory:import15.ComponentFactory<import1.MenubarSub> = new import15.ComponentFactory<import1.MenubarSub>('p-menubarSub',viewFactory_MenubarSub_Host0,import1.MenubarSub);
const styles_MenubarSub:any[] = [];
var renderType_MenubarSub:import6.RenderComponentType = (null as any);
class _View_MenubarSub0 extends import7.AppView<import1.MenubarSub> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import16.NgClass;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import8.AppElement;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import17.NgFor;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_1:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_MenubarSub0,renderType_MenubarSub,import11.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','ui-menu-list');
    this._NgClass_1_3 = new import16.NgClass(this.parentInjector.get(import18.IterableDiffers),this.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import8.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import21.TemplateRef_(this._appEl_3,viewFactory_MenubarSub1);
    this._NgFor_3_6 = new import17.NgFor(this._appEl_3.vcRef,this._TemplateRef_3_5,this.parentInjector.get(import18.IterableDiffers),this.ref);
    this._text_4 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._expr_1 = import12.UNINITIALIZED;
    this._map_0 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'ui-helper-reset': p0,
        'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow': p1
      }
      ;
    });
    this._expr_2 = import12.UNINITIALIZED;
    this._expr_3 = import12.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._text_5
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import17.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6; }
    if (((token === import16.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_1_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import12.SimpleChange} = (null as any);
    const currVal_1:any = 'ui-menu-list';
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_1_3.klass = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._map_0(this.context.root,!this.context.root);
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgClass_1_3.ngClass = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgClass_1_3.ngDoCheck(); }
    changes = (null as any);
    const currVal_3:any = (this.context.root? this.context.item: this.context.item.items);
    if (import10.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgFor_3_6.ngForOf = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import12.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._NgFor_3_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_3_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.listClick($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_MenubarSub0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<import1.MenubarSub> {
  if ((renderType_MenubarSub === (null as any))) { (renderType_MenubarSub = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/menubar/menubar.ts class MenubarSub - inline template',0,import14.ViewEncapsulation.None,styles_MenubarSub,{})); }
  return new _View_MenubarSub0(viewUtils,parentInjector,declarationEl);
}
class _View_MenubarSub1 extends import7.AppView<any> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import16.NgClass;
  _text_2:any;
  _el_3:any;
  _NgClass_3_3:import16.NgClass;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import8.AppElement;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import22.NgIf;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import8.AppElement;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import22.NgIf;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _anchor_13:any;
  /*private*/ _appEl_13:import8.AppElement;
  _TemplateRef_13_5:any;
  _NgIf_13_6:import22.NgIf;
  _text_14:any;
  _text_15:any;
  _map_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  _map_1:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_MenubarSub1,renderType_MenubarSub,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._text_0 = this.renderer.createText((null as any),'\n                ',(null as any));
    this._el_1 = this.renderer.createElement((null as any),'li',(null as any));
    this._NgClass_1_3 = new import16.NgClass(this.parent.parentInjector.get(import18.IterableDiffers),this.parent.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n                    ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'a',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','ui-menuitem-link ui-corner-all');
    this._NgClass_3_3 = new import16.NgClass(this.parent.parentInjector.get(import18.IterableDiffers),this.parent.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_3),this.renderer);
    this._text_4 = this.renderer.createText(this._el_3,'\n                        ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_5 = new import8.AppElement(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import21.TemplateRef_(this._appEl_5,viewFactory_MenubarSub2);
    this._NgIf_5_6 = new import22.NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_3,'\n                        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_7 = new import8.AppElement(7,3,this,this._anchor_7);
    this._TemplateRef_7_5 = new import21.TemplateRef_(this._appEl_7,viewFactory_MenubarSub3);
    this._NgIf_7_6 = new import22.NgIf(this._appEl_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_3,'\n                        ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_3,'span',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','ui-menuitem-text');
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this._text_11 = this.renderer.createText(this._el_3,'\n                    ',(null as any));
    this._text_12 = this.renderer.createText(this._el_1,'\n                    ',(null as any));
    this._anchor_13 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_13 = new import8.AppElement(13,1,this,this._anchor_13);
    this._TemplateRef_13_5 = new import21.TemplateRef_(this._appEl_13,viewFactory_MenubarSub4);
    this._NgIf_13_6 = new import22.NgIf(this._appEl_13.vcRef,this._TemplateRef_13_5);
    this._text_14 = this.renderer.createText(this._el_1,'\n                ',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n            ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'mouseenter',this.eventHandler(this._handle_mouseenter_1_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_1,'mouseleave',this.eventHandler(this._handle_mouseleave_1_1.bind(this)));
    this._map_0 = import10.pureProxy3((p0:any,p1:any,p2:any):{[key: string]:any} => {
      return {
        'ui-menuitem ui-widget ui-corner-all': p0,
        'ui-menu-parent': p1,
        'ui-menuitem-active': p2
      }
      ;
    });
    this._expr_2 = import12.UNINITIALIZED;
    this._expr_4 = import12.UNINITIALIZED;
    var disposable_2:Function = this.renderer.listen(this._el_3,'click',this.eventHandler(this._handle_click_3_0.bind(this)));
    this._expr_5 = import12.UNINITIALIZED;
    this._map_1 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'ui-state-hover': p0,
        'ui-state-disabled': p1
      }
      ;
    });
    this._expr_6 = import12.UNINITIALIZED;
    this._expr_7 = import12.UNINITIALIZED;
    this._expr_8 = import12.UNINITIALIZED;
    this._expr_9 = import12.UNINITIALIZED;
    this._expr_10 = import12.UNINITIALIZED;
    this.init([].concat([
      this._text_0,
      this._el_1,
      this._text_15
    ]
    ),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._anchor_13,
      this._text_14,
      this._text_15
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
    if (((token === import21.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import22.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6; }
    if (((token === import21.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import22.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6; }
    if (((token === import16.NgClass) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._NgClass_3_3; }
    if (((token === import21.TemplateRef) && (13 === requestNodeIndex))) { return this._TemplateRef_13_5; }
    if (((token === import22.NgIf) && (13 === requestNodeIndex))) { return this._NgIf_13_6; }
    if (((token === import16.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._NgClass_1_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this._map_0(true,this.context.$implicit.items,(this._el_1 == this.parent.context.activeItem));
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgClass_1_3.ngClass = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgClass_1_3.ngDoCheck(); }
    const currVal_5:any = 'ui-menuitem-link ui-corner-all';
    if (import10.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgClass_3_3.klass = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._map_1(((this._el_3 == this.parent.context.activeLink) && !this.context.$implicit.disabled),this.context.$implicit.disabled);
    if (import10.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgClass_3_3.ngClass = currVal_6;
      this._expr_6 = currVal_6;
    }
    if (!throwOnChange) { this._NgClass_3_3.ngDoCheck(); }
    const currVal_7:any = this.context.$implicit.items;
    if (import10.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._NgIf_5_6.ngIf = currVal_7;
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.$implicit.icon;
    if (import10.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._NgIf_7_6.ngIf = currVal_8;
      this._expr_8 = currVal_8;
    }
    const currVal_10:any = this.context.$implicit.items;
    if (import10.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._NgIf_13_6.ngIf = currVal_10;
      this._expr_10 = currVal_10;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_4:any = (this.context.$implicit.url || '#');
    if (import10.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_3,'href',this.viewUtils.sanitizer.sanitize(import23.SecurityContext.URL,currVal_4));
      this._expr_4 = currVal_4;
    }
    const currVal_9:any = import10.interpolate(1,'',this.context.$implicit.label,'');
    if (import10.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_10,currVal_9);
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_mouseenter_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onItemMouseEnter($event,this._el_1,this.context.$implicit)) !== false);
    return (true && pd_0);
  }
  private _handle_mouseleave_1_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onItemMouseLeave($event,this._el_1)) !== false);
    return (true && pd_0);
  }
  private _handle_click_3_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.itemClick($event,this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_MenubarSub1(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_MenubarSub1(viewUtils,parentInjector,declarationEl);
}
class _View_MenubarSub2 extends import7.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import16.NgClass;
  /*private*/ _expr_0:any;
  _map_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_MenubarSub2,renderType_MenubarSub,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-submenu-icon fa fa-fw');
    this._NgClass_0_3 = new import16.NgClass(this.parent.parent.parentInjector.get(import18.IterableDiffers),this.parent.parent.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_0),this.renderer);
    this._expr_0 = import12.UNINITIALIZED;
    this._map_0 = import10.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        'fa-caret-down': p0,
        'fa-caret-right': p1
      }
      ;
    });
    this._expr_1 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.NgClass) && (0 === requestNodeIndex))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = 'ui-submenu-icon fa fa-fw';
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_0_3.klass = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._map_0(this.parent.parent.context.root,!this.parent.parent.context.root);
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_0_3.ngClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MenubarSub2(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_MenubarSub2(viewUtils,parentInjector,declarationEl);
}
class _View_MenubarSub3 extends import7.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import16.NgClass;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_MenubarSub3,renderType_MenubarSub,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-menuitem-icon fa fa-fw');
    this._NgClass_0_3 = new import16.NgClass(this.parent.parent.parentInjector.get(import18.IterableDiffers),this.parent.parent.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_0),this.renderer);
    this._expr_0 = import12.UNINITIALIZED;
    this._expr_1 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.NgClass) && (0 === requestNodeIndex))) { return this._NgClass_0_3; }
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
function viewFactory_MenubarSub3(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_MenubarSub3(viewUtils,parentInjector,declarationEl);
}
class _View_MenubarSub4 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _DomHandler_0_4:import9.DomHandler;
  _MenubarSub_0_5:import1.MenubarSub;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_MenubarSub4,renderType_MenubarSub,import11.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'p-menubarSub',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-submenu');
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MenubarSub0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DomHandler_0_4 = new import9.DomHandler();
    this._MenubarSub_0_5 = new import1.MenubarSub(this._DomHandler_0_4,this.parent.parent.parentInjector.get(import13.Router));
    this._appEl_0.initComponent(this._MenubarSub_0_5,[],compView_0);
    compView_0.create(this._MenubarSub_0_5,[],(null as any));
    this._expr_0 = import12.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.DomHandler) && (0 === requestNodeIndex))) { return this._DomHandler_0_4; }
    if (((token === import1.MenubarSub) && (0 === requestNodeIndex))) { return this._MenubarSub_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.parent.context.$implicit;
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._MenubarSub_0_5.item = currVal_0;
      this._expr_0 = currVal_0;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MenubarSub4(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  return new _View_MenubarSub4(viewUtils,parentInjector,declarationEl);
}
var renderType_Menubar_Host:import6.RenderComponentType = (null as any);
class _View_Menubar_Host0 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _DomHandler_0_4:import9.DomHandler;
  _Menubar_0_5:import1.Menubar;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menubar_Host0,renderType_Menubar_Host,import11.ViewType.HOST,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-menubar',rootSelector,(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Menubar0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DomHandler_0_4 = new import9.DomHandler();
    this._Menubar_0_5 = new import1.Menubar(new import20.ElementRef(this._el_0),this._DomHandler_0_4,this.renderer);
    this._appEl_0.initComponent(this._Menubar_0_5,[],compView_0);
    compView_0.create(this._Menubar_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.DomHandler) && (0 === requestNodeIndex))) { return this._DomHandler_0_4; }
    if (((token === import1.Menubar) && (0 === requestNodeIndex))) { return this._Menubar_0_5; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._Menubar_0_5.ngOnDestroy();
  }
}
function viewFactory_Menubar_Host0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  if ((renderType_Menubar_Host === (null as any))) { (renderType_Menubar_Host = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,[],{})); }
  return new _View_Menubar_Host0(viewUtils,parentInjector,declarationEl);
}
export const MenubarNgFactory:import15.ComponentFactory<import1.Menubar> = new import15.ComponentFactory<import1.Menubar>('p-menubar',viewFactory_Menubar_Host0,import1.Menubar);
const styles_Menubar:any[] = [];
var renderType_Menubar:import6.RenderComponentType = (null as any);
class _View_Menubar0 extends import7.AppView<import1.Menubar> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import16.NgClass;
  _NgStyle_1_4:import24.NgStyle;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import8.AppElement;
  _DomHandler_3_4:import9.DomHandler;
  _MenubarSub_3_5:import1.MenubarSub;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_0:any;
  _map_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_Menubar0,renderType_Menubar,import11.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._NgClass_1_3 = new import16.NgClass(this.parentInjector.get(import18.IterableDiffers),this.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_1),this.renderer);
    this._NgStyle_1_4 = new import24.NgStyle(this.parentInjector.get(import19.KeyValueDiffers),new import20.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'p-menubarSub',(null as any));
    this.renderer.setElementAttribute(this._el_3,'root','root');
    this._appEl_3 = new import8.AppElement(3,1,this,this._el_3);
    var compView_3:any = viewFactory_MenubarSub0(this.viewUtils,this.injector(3),this._appEl_3);
    this._DomHandler_3_4 = new import9.DomHandler();
    this._MenubarSub_3_5 = new import1.MenubarSub(this._DomHandler_3_4,this.parentInjector.get(import13.Router));
    this._appEl_3.initComponent(this._MenubarSub_3_5,[],compView_3);
    compView_3.create(this._MenubarSub_3_5,[],(null as any));
    this._text_4 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._expr_0 = import12.UNINITIALIZED;
    this._map_0 = import10.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-menubar ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix': p0};
    });
    this._expr_1 = import12.UNINITIALIZED;
    this._expr_2 = import12.UNINITIALIZED;
    this._expr_3 = import12.UNINITIALIZED;
    this._expr_4 = import12.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.DomHandler) && (3 === requestNodeIndex))) { return this._DomHandler_3_4; }
    if (((token === import1.MenubarSub) && (3 === requestNodeIndex))) { return this._MenubarSub_3_5; }
    if (((token === import16.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_1_3; }
    if (((token === import24.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgStyle_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.styleClass;
    if (import10.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_1_3.klass = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._map_0(true);
    if (import10.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_1_3.ngClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgClass_1_3.ngDoCheck(); }
    const currVal_2:any = this.context.style;
    if (import10.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgStyle_1_4.ngStyle = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgStyle_1_4.ngDoCheck(); }
    const currVal_3:any = this.context.model;
    if (import10.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._MenubarSub_3_5.item = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = 'root';
    if (import10.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._MenubarSub_3_5.root = currVal_4;
      this._expr_4 = currVal_4;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_Menubar0(viewUtils:import10.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<import1.Menubar> {
  if ((renderType_Menubar === (null as any))) { (renderType_Menubar = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/menubar/menubar.ts class Menubar - inline template',0,import14.ViewEncapsulation.None,styles_Menubar,{})); }
  return new _View_Menubar0(viewUtils,parentInjector,declarationEl);
}