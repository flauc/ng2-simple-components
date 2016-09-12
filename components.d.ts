import { OnInit, ViewContainerRef, Compiler, EventEmitter, ElementRef, TemplateRef } from '@angular/core';

export declare class StyleOverrideDirective {
    scOverride: string;
    className: string;
}

export declare class AccordComponent {
    private accordionComp;
    title: string;
    locked: boolean;
    active: boolean;
    act: boolean;
    inner: string;
    hasOverflow: boolean;
    trigger(): void;
    constructor(accordionComp: AccordionComponent);
}

export declare class AccordionComponent {
    singleActive: boolean;
    accords: AccordComponent[];
    trigger(accord: AccordComponent): void;
    addAccord(accord: AccordComponent): void;
}

export declare class AccordionModule {
}


export declare class BlockSliderComponent implements OnInit {
    blockCount: number;
    startingPosition: number;
    blocks: BlockComponent[];
    position: number;
    positionStyle: string;
    private _segments;
    private _lastSegment;
    ngOnInit(): void;
    blockWidth(): number;
    addBlock(block: BlockComponent): void;
    moveLeft(): void;
    moveRight(): void;
}

export declare class BlockSliderModule {
}

export declare class BlockComponent implements OnInit {
    private _blocksSliderComp;
    w: string;
    l: string;
    width: number;
    index: number;
    constructor(_blocksSliderComp: BlockSliderComponent);
    ngOnInit(): void;
}


export declare class ModalComponent {
    private _comp;
    wrapperRef: ViewContainerRef;
    doClose: EventEmitter<boolean>;
    settings: ModalSettings;
    state: string;
    toSet: any;
    constructor(_comp: Compiler);
    createWithComp(modal: any, comp: string): void;
    overlayClose(): void;
    close(): void;
}

export declare class ModalModule {
}


export declare class ModalService {
    private _comp;
    private _vc;
    private _vcToUse;
    private _openModal;
    private _settings;
    constructor(_comp: Compiler);
    vc(vc: ViewContainerRef): void;
    settings(set?: ModalSettings): ModalSettings;
    createWithModal(modal: any, comp: any, toSet?: any, settings?: ModalSettings, vcRef?: ViewContainerRef): void;
    close(): void;
    private _create(modal, comp, settings, vcRef, toSet?);
}

export interface ModalSettings {
    overlay: boolean;
    overlayClickToClose: boolean;
    defaultFooter: boolean;
    showCloseButton: boolean;
}

export declare class SingleModule {
}

export declare class SelectComponent {
    private _eref;
    animationState: string;
    opening: boolean;
    itemsToDisplay: any;
    itemsOriginal: any;
    topPosition: string;
    selected: any;
    selectedChange: EventEmitter<any>;
    items: any;
    placeholder: string;
    maxHeight: number;
    state: EventEmitter<string>;
    selectionEL: any;
    selectRef: TemplateRef<any>;
    placeholderRef: TemplateRef<any>;
    outsideClick(target: any): void;
    style: {
        'max-height': string;
        'overflow': string;
    };
    inSelected: string;
    constructor(_eref: ElementRef);
    select(index: number): void;
    toggle(): void;
    private _createDisplay(index?);
}

export declare class SelectModule {
}

export declare class TabComponent implements OnInit {
    private tabsComp;
    private _el;
    active: boolean;
    title: string;
    disabled: boolean;
    act: boolean;
    animate: string;
    position: number;
    height: number;
    constructor(tabsComp: TabsComponent, _el: ElementRef);
    ngOnInit(): void;
}

export declare class TabsComponent {
    tabs: TabComponent[];
    style: {
        height: string;
    };
    selectTab(tab: TabComponent): void;
    setStyle(tabHeight: number): void;
    addTab(tab: TabComponent): void;
    indicatorStyle(): {
        width: string;
    };
}

export declare class TabsModule {
}

export declare class SearchPipeModule {
}

export declare class SearchPipe {
    transform(value: any[], args: [string, string[], boolean, boolean, boolean]): any[];
    private _fromStart;
    private _fromAny;
    private _cFromStart;
    private _cfromAny;
    private _getValue(item, str);
}
