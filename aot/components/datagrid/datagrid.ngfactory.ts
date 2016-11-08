/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/datagrid/datagrid';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '../../../components/paginator/paginator';
import * as import4 from '@angular/common/src/localization';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/i18n/tokens';
import * as import7 from '@angular/core/src/render/api';
import * as import8 from '@angular/core/src/linker/view';
import * as import9 from '@angular/core/src/linker/element';
import * as import10 from '@angular/core/src/linker/query_list';
import * as import11 from '@angular/core/src/linker/view_utils';
import * as import12 from '@angular/core/src/linker/view_type';
import * as import13 from '@angular/core/src/change_detection/change_detection';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/core/src/metadata/view';
import * as import17 from '@angular/core/src/linker/component_factory';
import * as import18 from '@angular/common/src/directives/ng_class';
import * as import19 from '@angular/common/src/directives/ng_style';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '@angular/common/src/directives/ng_for';
import * as import22 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '../paginator/paginator.ngfactory';
class DataGridModuleInjector extends import0.NgModuleInjector<import1.DataGridModule> {
  _CommonModule_0:import2.CommonModule;
  _PaginatorModule_1:import3.PaginatorModule;
  _DataGridModule_2:import1.DataGridModule;
  __LOCALE_ID_3:any;
  __NgLocalization_4:import4.NgLocaleLocalization;
  __TRANSLATIONS_FORMAT_5:any;
  constructor(parent:import5.Injector) {
    super(parent,[],[]);
  }
  get _LOCALE_ID_3():any {
    if ((this.__LOCALE_ID_3 == (null as any))) { (this.__LOCALE_ID_3 = (null as any)); }
    return this.__LOCALE_ID_3;
  }
  get _NgLocalization_4():import4.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == (null as any))) { (this.__NgLocalization_4 = new import4.NgLocaleLocalization(this._LOCALE_ID_3)); }
    return this.__NgLocalization_4;
  }
  get _TRANSLATIONS_FORMAT_5():any {
    if ((this.__TRANSLATIONS_FORMAT_5 == (null as any))) { (this.__TRANSLATIONS_FORMAT_5 = (null as any)); }
    return this.__TRANSLATIONS_FORMAT_5;
  }
  createInternal():import1.DataGridModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._PaginatorModule_1 = new import3.PaginatorModule();
    this._DataGridModule_2 = new import1.DataGridModule();
    return this._DataGridModule_2;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.PaginatorModule)) { return this._PaginatorModule_1; }
    if ((token === import1.DataGridModule)) { return this._DataGridModule_2; }
    if ((token === import6.LOCALE_ID)) { return this._LOCALE_ID_3; }
    if ((token === import4.NgLocalization)) { return this._NgLocalization_4; }
    if ((token === import6.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_5; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const DataGridModuleNgFactory:import0.NgModuleFactory<import1.DataGridModule> = new import0.NgModuleFactory(DataGridModuleInjector,import1.DataGridModule);
var renderType_DataGrid_Host:import7.RenderComponentType = (null as any);
class _View_DataGrid_Host0 extends import8.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import9.AppElement;
  _DataGrid_0_4:import1.DataGrid;
  _query_Header_0_0:import10.QueryList<any>;
  _query_Footer_0_1:import10.QueryList<any>;
  _query_TemplateRef_0_2:import10.QueryList<any>;
  constructor(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement) {
    super(_View_DataGrid_Host0,renderType_DataGrid_Host,import12.ViewType.HOST,viewUtils,parentInjector,declarationEl,import13.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-dataGrid',rootSelector,(null as any));
    this._appEl_0 = new import9.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DataGrid0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DataGrid_0_4 = new import1.DataGrid(new import14.ElementRef(this._el_0),this.parentInjector.get(import15.IterableDiffers));
    this._query_Header_0_0 = new import10.QueryList<any>();
    this._query_Footer_0_1 = new import10.QueryList<any>();
    this._query_TemplateRef_0_2 = new import10.QueryList<any>();
    this._appEl_0.initComponent(this._DataGrid_0_4,[],compView_0);
    this._query_Header_0_0.reset([]);
    this._DataGrid_0_4.header = this._query_Header_0_0.first;
    this._query_Footer_0_1.reset([]);
    this._DataGrid_0_4.footer = this._query_Footer_0_1.first;
    this._query_TemplateRef_0_2.reset([]);
    this._DataGrid_0_4.itemTemplate = this._query_TemplateRef_0_2.first;
    compView_0.create(this._DataGrid_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.DataGrid) && (0 === requestNodeIndex))) { return this._DataGrid_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (!throwOnChange) { this._DataGrid_0_4.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._DataGrid_0_4.ngAfterViewInit(); } }
  }
}
function viewFactory_DataGrid_Host0(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement):import8.AppView<any> {
  if ((renderType_DataGrid_Host === (null as any))) { (renderType_DataGrid_Host = viewUtils.createRenderComponentType('',0,import16.ViewEncapsulation.None,[],{})); }
  return new _View_DataGrid_Host0(viewUtils,parentInjector,declarationEl);
}
export const DataGridNgFactory:import17.ComponentFactory<import1.DataGrid> = new import17.ComponentFactory<import1.DataGrid>('p-dataGrid',viewFactory_DataGrid_Host0,import1.DataGrid);
const styles_DataGrid:any[] = [];
var renderType_DataGrid:import7.RenderComponentType = (null as any);
class _View_DataGrid0 extends import8.AppView<import1.DataGrid> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import18.NgClass;
  _NgStyle_1_4:import19.NgStyle;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import9.AppElement;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import20.NgIf;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import9.AppElement;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import20.NgIf;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _appEl_11:import9.AppElement;
  _TemplateRef_11_5:any;
  _NgFor_11_6:import21.NgFor;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _appEl_15:import9.AppElement;
  _TemplateRef_15_5:any;
  _NgIf_15_6:import20.NgIf;
  _text_16:any;
  _anchor_17:any;
  /*private*/ _appEl_17:import9.AppElement;
  _TemplateRef_17_5:any;
  _NgIf_17_6:import20.NgIf;
  _text_18:any;
  _text_19:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement) {
    super(_View_DataGrid0,renderType_DataGrid,import12.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import13.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._NgClass_1_3 = new import18.NgClass(this.parentInjector.get(import15.IterableDiffers),this.parentInjector.get(import22.KeyValueDiffers),new import14.ElementRef(this._el_1),this.renderer);
    this._NgStyle_1_4 = new import19.NgStyle(this.parentInjector.get(import22.KeyValueDiffers),new import14.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_3 = new import9.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import23.TemplateRef_(this._appEl_3,viewFactory_DataGrid1);
    this._NgIf_3_6 = new import20.NgIf(this._appEl_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_5 = new import9.AppElement(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import23.TemplateRef_(this._appEl_5,viewFactory_DataGrid2);
    this._NgIf_5_6 = new import20.NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','ui-datagrid-content ui-widget-content');
    this._text_8 = this.renderer.createText(this._el_7,'\n                ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'div',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','ui-g');
    this._text_10 = this.renderer.createText(this._el_9,'\n                    ',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_9,(null as any));
    this._appEl_11 = new import9.AppElement(11,9,this,this._anchor_11);
    this._TemplateRef_11_5 = new import23.TemplateRef_(this._appEl_11,viewFactory_DataGrid3);
    this._NgFor_11_6 = new import21.NgFor(this._appEl_11.vcRef,this._TemplateRef_11_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_12 = this.renderer.createText(this._el_9,'\n                ',(null as any));
    this._text_13 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._text_14 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_15 = new import9.AppElement(15,1,this,this._anchor_15);
    this._TemplateRef_15_5 = new import23.TemplateRef_(this._appEl_15,viewFactory_DataGrid4);
    this._NgIf_15_6 = new import20.NgIf(this._appEl_15.vcRef,this._TemplateRef_15_5);
    this._text_16 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_17 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._appEl_17 = new import9.AppElement(17,1,this,this._anchor_17);
    this._TemplateRef_17_5 = new import23.TemplateRef_(this._appEl_17,viewFactory_DataGrid5);
    this._NgIf_17_6 = new import20.NgIf(this._appEl_17.vcRef,this._TemplateRef_17_5);
    this._text_18 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._expr_0 = import13.UNINITIALIZED;
    this._expr_1 = import13.UNINITIALIZED;
    this._expr_2 = import13.UNINITIALIZED;
    this._expr_3 = import13.UNINITIALIZED;
    this._expr_4 = import13.UNINITIALIZED;
    this._expr_5 = import13.UNINITIALIZED;
    this._expr_6 = import13.UNINITIALIZED;
    this._expr_7 = import13.UNINITIALIZED;
    this._expr_8 = import13.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._anchor_15,
      this._text_16,
      this._anchor_17,
      this._text_18,
      this._text_19
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import20.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6; }
    if (((token === import23.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import20.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6; }
    if (((token === import23.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import21.NgFor) && (11 === requestNodeIndex))) { return this._NgFor_11_6; }
    if (((token === import23.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import20.NgIf) && (15 === requestNodeIndex))) { return this._NgIf_15_6; }
    if (((token === import23.TemplateRef) && (17 === requestNodeIndex))) { return this._TemplateRef_17_5; }
    if (((token === import20.NgIf) && (17 === requestNodeIndex))) { return this._NgIf_17_6; }
    if (((token === import18.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._NgClass_1_3; }
    if (((token === import19.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._NgStyle_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import13.SimpleChange} = (null as any);
    const currVal_0:any = this.context.styleClass;
    if (import11.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_1_3.klass = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = 'ui-datagrid ui-widget';
    if (import11.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_1_3.ngClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgClass_1_3.ngDoCheck(); }
    const currVal_2:any = this.context.style;
    if (import11.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgStyle_1_4.ngStyle = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (!throwOnChange) { this._NgStyle_1_4.ngDoCheck(); }
    const currVal_3:any = this.context.header;
    if (import11.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_3_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = ((this.context.paginator && (this.context.paginatorPosition != 'bottom')) || (this.context.paginatorPosition == 'both'));
    if (import11.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_5_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    changes = (null as any);
    const currVal_5:any = this.context.dataToRender;
    if (import11.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgFor_11_6.ngForOf = currVal_5;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import13.SimpleChange(this._expr_5,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.itemTemplate;
    if (import11.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgFor_11_6.ngForTemplate = currVal_6;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForTemplate'] = new import13.SimpleChange(this._expr_6,currVal_6);
      this._expr_6 = currVal_6;
    }
    if ((changes !== (null as any))) { this._NgFor_11_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_11_6.ngDoCheck(); }
    const currVal_7:any = ((this.context.paginator && (this.context.paginatorPosition != 'top')) || (this.context.paginatorPosition == 'both'));
    if (import11.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._NgIf_15_6.ngIf = currVal_7;
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.footer;
    if (import11.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._NgIf_17_6.ngIf = currVal_8;
      this._expr_8 = currVal_8;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_DataGrid0(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement):import8.AppView<import1.DataGrid> {
  if ((renderType_DataGrid === (null as any))) { (renderType_DataGrid = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/datagrid/datagrid.ts class DataGrid - inline template',2,import16.ViewEncapsulation.None,styles_DataGrid,{})); }
  return new _View_DataGrid0(viewUtils,parentInjector,declarationEl);
}
class _View_DataGrid1 extends import8.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement) {
    super(_View_DataGrid1,renderType_DataGrid,import12.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import13.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-datagrid-header ui-widget-header ui-corner-top');
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this.renderer.projectNodes(this._el_0,import11.flattenNestedViewRenderNodes(this.projectableNodes[0]));
    this._text_2 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_DataGrid1(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement):import8.AppView<any> {
  return new _View_DataGrid1(viewUtils,parentInjector,declarationEl);
}
class _View_DataGrid2 extends import8.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import9.AppElement;
  _Paginator_0_4:import3.Paginator;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement) {
    super(_View_DataGrid2,renderType_DataGrid,import12.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import13.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'p-paginator',(null as any));
    this.renderer.setElementAttribute(this._el_0,'styleClass','ui-paginator-bottom');
    this._appEl_0 = new import9.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import24.viewFactory_Paginator0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Paginator_0_4 = new import3.Paginator();
    this._appEl_0.initComponent(this._Paginator_0_4,[],compView_0);
    compView_0.create(this._Paginator_0_4,[],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'onPageChange',this.eventHandler(this._handle_onPageChange_0_0.bind(this)));
    this._expr_1 = import13.UNINITIALIZED;
    this._expr_2 = import13.UNINITIALIZED;
    this._expr_3 = import13.UNINITIALIZED;
    this._expr_4 = import13.UNINITIALIZED;
    this._expr_5 = import13.UNINITIALIZED;
    this._expr_6 = import13.UNINITIALIZED;
    const subscription_0:any = this._Paginator_0_4.onPageChange.subscribe(this.eventHandler(this._handle_onPageChange_0_0.bind(this)));
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Paginator) && (0 === requestNodeIndex))) { return this._Paginator_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.parent.context.rows;
    if (import11.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._Paginator_0_4.rows = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.parent.context.pageLinks;
    if (import11.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._Paginator_0_4.pageLinkSize = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = 'ui-paginator-bottom';
    if (import11.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._Paginator_0_4.styleClass = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.parent.context.rowsPerPageOptions;
    if (import11.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._Paginator_0_4.rowsPerPageOptions = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.parent.context.totalRecords;
    if (import11.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._Paginator_0_4.totalRecords = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.parent.context.first;
    if (import11.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._Paginator_0_4.first = currVal_6;
      this._expr_6 = currVal_6;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_onPageChange_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.paginate($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_DataGrid2(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement):import8.AppView<any> {
  return new _View_DataGrid2(viewUtils,parentInjector,declarationEl);
}
class _View_DataGrid3 extends import8.AppView<any> {
  constructor(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement) {
    super(_View_DataGrid3,renderType_DataGrid,import12.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import13.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.AppElement {
    this.init([],[],[],[]);
    return (null as any);
  }
}
function viewFactory_DataGrid3(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement):import8.AppView<any> {
  return new _View_DataGrid3(viewUtils,parentInjector,declarationEl);
}
class _View_DataGrid4 extends import8.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import9.AppElement;
  _Paginator_0_4:import3.Paginator;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement) {
    super(_View_DataGrid4,renderType_DataGrid,import12.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import13.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'p-paginator',(null as any));
    this.renderer.setElementAttribute(this._el_0,'styleClass','ui-paginator-bottom');
    this._appEl_0 = new import9.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import24.viewFactory_Paginator0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Paginator_0_4 = new import3.Paginator();
    this._appEl_0.initComponent(this._Paginator_0_4,[],compView_0);
    compView_0.create(this._Paginator_0_4,[],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'onPageChange',this.eventHandler(this._handle_onPageChange_0_0.bind(this)));
    this._expr_1 = import13.UNINITIALIZED;
    this._expr_2 = import13.UNINITIALIZED;
    this._expr_3 = import13.UNINITIALIZED;
    this._expr_4 = import13.UNINITIALIZED;
    this._expr_5 = import13.UNINITIALIZED;
    this._expr_6 = import13.UNINITIALIZED;
    const subscription_0:any = this._Paginator_0_4.onPageChange.subscribe(this.eventHandler(this._handle_onPageChange_0_0.bind(this)));
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Paginator) && (0 === requestNodeIndex))) { return this._Paginator_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.parent.context.rows;
    if (import11.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._Paginator_0_4.rows = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.parent.context.pageLinks;
    if (import11.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._Paginator_0_4.pageLinkSize = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = 'ui-paginator-bottom';
    if (import11.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._Paginator_0_4.styleClass = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.parent.context.rowsPerPageOptions;
    if (import11.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._Paginator_0_4.rowsPerPageOptions = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.parent.context.totalRecords;
    if (import11.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._Paginator_0_4.totalRecords = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.parent.context.first;
    if (import11.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._Paginator_0_4.first = currVal_6;
      this._expr_6 = currVal_6;
    }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_onPageChange_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.paginate($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_DataGrid4(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement):import8.AppView<any> {
  return new _View_DataGrid4(viewUtils,parentInjector,declarationEl);
}
class _View_DataGrid5 extends import8.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement) {
    super(_View_DataGrid5,renderType_DataGrid,import12.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import13.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','ui-datagrid-footer ui-widget-header ui-corner-top');
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this.renderer.projectNodes(this._el_0,import11.flattenNestedViewRenderNodes(this.projectableNodes[1]));
    this._text_2 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ,[],[]);
    return (null as any);
  }
}
function viewFactory_DataGrid5(viewUtils:import11.ViewUtils,parentInjector:import5.Injector,declarationEl:import9.AppElement):import8.AppView<any> {
  return new _View_DataGrid5(viewUtils,parentInjector,declarationEl);
}