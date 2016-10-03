import { OnInit, ViewContainerRef, Compiler, EventEmitter, TemplateRef, ElementRef, Renderer, Compiler } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

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
    gap: number;
    mediaQuery: Array<{
        screenWidth: number;
        blockCount: number;
    }>;
    initialCount: number;
    blocks: BlockComponent[];
    position: number;
    positionStyle: string;
    private _segments;
    private _lastSegment;
    private _mediaSorted;
    screenResize(event: any): void;
    ngOnInit(): void;
    blockWidth(): number;
    blockWidthWithGap(): number;
    addBlock(block: BlockComponent): void;
    moveLeft(): void;
    moveRight(): void;
    onSwipe(event: any): void;
    calcActive(index: any): boolean;
}

export declare class BlockSliderModule {
}

export declare class BlockComponent implements OnInit {
    private _blocksSliderComp;
    readonly w: string;
    readonly m: string;
    active: boolean;
    width: number;
    gap: number;
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
    overlay?: boolean;
    overlayClickToClose?: boolean;
    defaultFooter?: boolean;
    showCloseButton?: boolean;
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
    readonly style: {
        'max-height': string;
        'overflow': string;
    };
    readonly inSelected: string;
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

export declare class MorphOverlayComponent implements OnInit {
    private _el;
    private _window;
    constructor(_el: ElementRef, _window: Window);
    overlayBg: string;
    initialDelay: number;
    modalTitle: string;
    overflowBody: boolean;
    triggerRef: TemplateRef<any>;
    contentRef: TemplateRef<any>;
    blockHidden: boolean;
    modalHidden: boolean;
    triggerActive: boolean;
    document: any;
    width: number;
    height: number;
    top: number;
    left: number;
    scaleX: number;
    scaleY: number;
    readonly style: {
        visibility: string;
        background: string;
        width: string;
        height: string;
        top: string;
        left: string;
        transform: string;
    };
    ngOnInit(): void;
    open(): void;
    close(): void;
    private _calcScale(firstCoord, elSize, windowSize);
}

export declare class MorphOverlayModule {
    static environment(env: 'browser' | 'node'): ModuleWithProviders;
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

export declare class ScrollAnimationDirective implements OnInit {
    private _el;
    private _renderer;
    private _window;
    constructor(_el: ElementRef, _renderer: Renderer, _window: Window);
    sc: {
        ref?: ElementRef;
        offset?: number;
        class?: string;
        delay: number;
        hideInitial?: boolean;
    };
    onScroll(): void;
    onResize(): void;
    top: number;
    windowHeight: number;
    hasClass: boolean;
    options: {
        ref: ElementRef;
        offset: number;
        class: string;
        delay: number;
        hideInitial: boolean;
    };
    ngOnInit(): void;
    private _setTop();
    private _hideInitial();
}

export declare class ScrollAnimationModule {
    static environment(env: 'browser' | 'node'): ModuleWithProviders;
}

export declare class TooltipComponent {
    simpleLabel: string;
}

export declare class TooltipDirective implements OnInit {
    private _el;
    private _vcRef;
    private _compiler;
    private _renderer;
    constructor(_el: ElementRef, _vcRef: ViewContainerRef, _compiler: Compiler, _renderer: Renderer);
    options: {
        simpleLabel: string;
    };
    private _component;
    ngOnInit(): void;
}

export declare class TooltipModule {
}

export declare class WindowBrowser implements Window {
    innerHeight(): number;
    innerWidth(): number;
    pageYOffset(): number;
    getDocument(): Document;
}

export declare abstract class Window {
    abstract innerHeight(): number;
    abstract innerWidth(): number;
    abstract pageYOffset(): number;
    abstract getDocument(): any;
}

export declare class WindowNode implements Window {
    innerHeight(): any;
    innerWidth(): any;
    pageYOffset(): any;
    getDocument(): any;
}
