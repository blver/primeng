/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../components/chart/chart';
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
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/core/src/metadata/view';
import * as import15 from '@angular/core/src/linker/component_factory';
class ChartModuleInjector extends import0.NgModuleInjector<import1.ChartModule> {
  _CommonModule_0:import2.CommonModule;
  _ChartModule_1:import1.ChartModule;
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
  createInternal():import1.ChartModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ChartModule_1 = new import1.ChartModule();
    return this._ChartModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.ChartModule)) { return this._ChartModule_1; }
    if ((token === import5.LOCALE_ID)) { return this._LOCALE_ID_2; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_3; }
    if ((token === import5.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ChartModuleNgFactory:import0.NgModuleFactory<import1.ChartModule> = new import0.NgModuleFactory(ChartModuleInjector,import1.ChartModule);
var renderType_UIChart_Host:import6.RenderComponentType = (null as any);
class _View_UIChart_Host0 extends import7.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import8.AppElement;
  _UIChart_0_4:import1.UIChart;
  constructor(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_UIChart_Host0,renderType_UIChart_Host,import10.ViewType.HOST,viewUtils,parentInjector,declarationEl,import11.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    this._el_0 = this.selectOrCreateHostElement('p-chart',rootSelector,(null as any));
    this._appEl_0 = new import8.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_UIChart0(this.viewUtils,this.injector(0),this._appEl_0);
    this._UIChart_0_4 = new import1.UIChart(new import12.ElementRef(this._el_0),this.parentInjector.get(import13.IterableDiffers));
    this._appEl_0.initComponent(this._UIChart_0_4,[],compView_0);
    compView_0.create(this._UIChart_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.UIChart) && (0 === requestNodeIndex))) { return this._UIChart_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (!throwOnChange) { this._UIChart_0_4.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._UIChart_0_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._UIChart_0_4.ngOnDestroy();
  }
}
function viewFactory_UIChart_Host0(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<any> {
  if ((renderType_UIChart_Host === (null as any))) { (renderType_UIChart_Host = viewUtils.createRenderComponentType('',0,import14.ViewEncapsulation.None,[],{})); }
  return new _View_UIChart_Host0(viewUtils,parentInjector,declarationEl);
}
export const UIChartNgFactory:import15.ComponentFactory<import1.UIChart> = new import15.ComponentFactory<import1.UIChart>('p-chart',viewFactory_UIChart_Host0,import1.UIChart);
const styles_UIChart:any[] = [];
var renderType_UIChart:import6.RenderComponentType = (null as any);
class _View_UIChart0 extends import7.AppView<import1.UIChart> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement) {
    super(_View_UIChart0,renderType_UIChart,import10.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import11.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'canvas',(null as any));
    this._text_4 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._expr_1 = import11.UNINITIALIZED;
    this._expr_2 = import11.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_3,'click',this.eventHandler(this._handle_click_3_0.bind(this)));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.context.width;
    if (import9.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementAttribute(this._el_3,'width',((currVal_1 == (null as any))? (null as any): currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.height;
    if (import9.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementAttribute(this._el_3,'height',((currVal_2 == (null as any))? (null as any): currVal_2.toString()));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_3_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onCanvasClick($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_UIChart0(viewUtils:import9.ViewUtils,parentInjector:import4.Injector,declarationEl:import8.AppElement):import7.AppView<import1.UIChart> {
  if ((renderType_UIChart === (null as any))) { (renderType_UIChart = viewUtils.createRenderComponentType('c:/Users/eirwn/Documents/primeng-min/components/chart/chart.ts class UIChart - inline template',0,import14.ViewEncapsulation.None,styles_UIChart,{})); }
  return new _View_UIChart0(viewUtils,parentInjector,declarationEl);
}