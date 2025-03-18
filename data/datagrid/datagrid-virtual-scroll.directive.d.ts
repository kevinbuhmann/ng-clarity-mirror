import { Directionality } from '@angular/cdk/bidi';
import { ListRange } from '@angular/cdk/collections';
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualForOfContext, ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectorRef, DoCheck, EnvironmentInjector, EventEmitter, IterableDiffers, NgZone, OnDestroy, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { ClrDatagrid } from './datagrid';
import { ColumnsService } from './providers/columns.service';
import { Items } from './providers/items';
import * as i0 from "@angular/core";
declare type CdkVirtualForInputKey = 'cdkVirtualForOf' | 'cdkVirtualForTrackBy' | 'cdkVirtualForTemplate' | 'cdkVirtualForTemplateCacheSize';
declare type CdkVirtualForInputs<T> = Partial<Pick<CdkVirtualForOf<T>, CdkVirtualForInputKey>>;
declare type CdkFixedSizeVirtualScrollInputs = Pick<CdkFixedSizeVirtualScroll, 'itemSize' | 'minBufferPx' | 'maxBufferPx'>;
export declare class ClrDatagridVirtualScrollDirective<T> implements AfterViewInit, DoCheck, OnDestroy {
    private readonly changeDetectorRef;
    private iterableDiffers;
    private items;
    private readonly ngZone;
    private readonly renderer2;
    private readonly templateRef;
    private readonly viewContainerRef;
    private readonly directionality;
    private readonly scrollDispatcher;
    private readonly viewportRuler;
    private readonly datagrid;
    private columnsService;
    private readonly injector;
    renderedRangeChange: EventEmitter<ListRange>;
    private _cdkFixedSizeVirtualScrollInputs;
    private readonly datagridElementRef;
    private gridRoleElement;
    private readonly virtualScrollStrategy;
    private virtualScrollViewport;
    private cdkVirtualFor;
    private subscriptions;
    private topIndex;
    private mutationChanges;
    private viewRepeater;
    private cdkVirtualForInputs;
    constructor(changeDetectorRef: ChangeDetectorRef, iterableDiffers: IterableDiffers, items: Items<T>, ngZone: NgZone, renderer2: Renderer2, templateRef: TemplateRef<CdkVirtualForOfContext<T>>, viewContainerRef: ViewContainerRef, directionality: Directionality, scrollDispatcher: ScrollDispatcher, viewportRuler: ViewportRuler, datagrid: ClrDatagrid, columnsService: ColumnsService, injector: EnvironmentInjector);
    get cdkVirtualForOf(): CdkVirtualForInputs<T>['cdkVirtualForOf'];
    set cdkVirtualForOf(value: CdkVirtualForInputs<T>['cdkVirtualForOf']);
    get cdkVirtualForTrackBy(): CdkVirtualForInputs<T>['cdkVirtualForTrackBy'];
    set cdkVirtualForTrackBy(value: CdkVirtualForInputs<T>['cdkVirtualForTrackBy']);
    get cdkVirtualForTemplate(): CdkVirtualForInputs<T>['cdkVirtualForTemplate'];
    set cdkVirtualForTemplate(value: CdkVirtualForInputs<T>['cdkVirtualForTemplate']);
    get cdkVirtualForTemplateCacheSize(): CdkVirtualForInputs<T>['cdkVirtualForTemplateCacheSize'];
    set cdkVirtualForTemplateCacheSize(value: CdkVirtualForInputs<T>['cdkVirtualForTemplateCacheSize']);
    get itemSize(): CdkFixedSizeVirtualScrollInputs['itemSize'];
    set itemSize(value: CdkFixedSizeVirtualScrollInputs['itemSize']);
    get minBufferPx(): CdkFixedSizeVirtualScrollInputs['minBufferPx'];
    set minBufferPx(value: CdkFixedSizeVirtualScrollInputs['minBufferPx']);
    get maxBufferPx(): CdkFixedSizeVirtualScrollInputs['maxBufferPx'];
    set maxBufferPx(value: CdkFixedSizeVirtualScrollInputs['maxBufferPx']);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    scrollUp(offset: number, behavior?: ScrollBehavior): void;
    scrollDown(offset: number, behavior?: ScrollBehavior): void;
    scrollToIndex(index: number, behavior?: ScrollBehavior): void;
    private updateCdkVirtualForInputs;
    private updateFixedSizeVirtualScrollInputs;
    private updateAriaRowCount;
    private updateAriaRowIndexes;
    private createVirtualScrollViewportForDatagrid;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClrDatagridVirtualScrollDirective<any>, [null, null, { skipSelf: true; }, null, null, null, null, null, null, null, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ClrDatagridVirtualScrollDirective<any>, "[clrVirtualScroll],[ClrVirtualScroll]", never, { "cdkVirtualForOf": "clrVirtualRowsOf"; "cdkVirtualForTrackBy": "clrVirtualRowsTrackBy"; "cdkVirtualForTemplate": "clrVirtualRowsTemplate"; "cdkVirtualForTemplateCacheSize": "clrVirtualRowsTemplateCacheSize"; "itemSize": "clrVirtualRowsItemSize"; "minBufferPx": "clrVirtualRowsMinBufferPx"; "maxBufferPx": "clrVirtualRowsMaxBufferPx"; }, { "renderedRangeChange": "renderedRangeChange"; }, never, never, false, never>;
}
export {};
