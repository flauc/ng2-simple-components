declare module "accordion/accordion.component" {
    import { AccordComponent } from "accordion/accord.component";
    export class AccordionComponent {
        singleActive: boolean;
        accords: AccordComponent[];
        trigger(accord: AccordComponent): void;
        addAccord(accord: AccordComponent): void;
    }
}
declare module "accordion/accord.component" {
    import { AccordionComponent } from "accordion/accordion.component";
    export class AccordComponent {
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
}
declare module "accordion/accordion.module" {
    export class AccordionModule {
    }
}
declare module "block-slider/block.component" {
    import { OnInit } from '@angular/core';
    import { BlockSliderComponent } from "block-slider/block-slider.component";
    export class BlockComponent implements OnInit {
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
}
declare module "block-slider/block-slider.component" {
    import { OnInit } from '@angular/core';
    import { BlockComponent } from "block-slider/block.component";
    export class BlockSliderComponent implements OnInit {
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
}
declare module "block-slider/block-slider.module" {
    export class BlockSliderModule {
    }
}
declare module "utils/window/window" {
    export abstract class Window {
        abstract innerHeight(): number;
        abstract innerWidth(): number;
        abstract pageYOffset(): number;
        abstract getDocument(): any;
    }
}
declare module "components/morph-overlay/morph-overlay.component" {
    import { ElementRef, TemplateRef, OnInit } from '@angular/core';
    import { Window } from "utils/window/window";
    export class MorphOverlayComponent implements OnInit {
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
}
declare module "utils/window/window.browser" {
    import { Window } from "utils/window/window";
    export class WindowBrowser implements Window {
        innerHeight(): number;
        innerWidth(): number;
        pageYOffset(): number;
        getDocument(): Document;
    }
}
declare module "utils/window/window.node" {
    import { Window } from "utils/window/window";
    export class WindowNode implements Window {
        innerHeight(): any;
        innerWidth(): any;
        pageYOffset(): any;
        getDocument(): any;
    }
}
declare module "components/morph-overlay/morph-overlay.module" {
    import { ModuleWithProviders } from '@angular/core';
    export class MorphOverlayModule {
        static environment(env: 'browser' | 'node'): ModuleWithProviders;
    }
}
declare module "directives/scroll-animation/scroll-animation.directive" {
    import { ElementRef, OnInit, Renderer } from '@angular/core';
    import { Window } from "utils/window/window";
    export class ScrollAnimationDirective implements OnInit {
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
}
declare module "directives/scroll-animation/scroll-animation.module" {
    import { ModuleWithProviders } from '@angular/core';
    export class ScrollAnimationModule {
        static environment(env: 'browser' | 'node'): ModuleWithProviders;
    }
}
declare module "directives/tooltip/tooltip.component" {
    export class TooltipComponent {
        simpleLabel: string;
    }
}
declare module "directives/tooltip/tooltip.module" {
    export class TooltipModule {
    }
}
declare module "directives/tooltip/tooltip.directive" {
    import { Renderer, ElementRef, OnInit, ViewContainerRef, Compiler } from '@angular/core';
    export class TooltipDirective implements OnInit {
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
}
declare module "modal/settings.interface" {
    export interface ModalSettings {
        overlay?: boolean;
        overlayClickToClose?: boolean;
        defaultFooter?: boolean;
        showCloseButton?: boolean;
    }
}
declare module "modal/modal.component" {
    import { ViewContainerRef, Compiler, EventEmitter } from '@angular/core';
    import { ModalSettings } from "modal/settings.interface";
    export class ModalComponent {
        private _comp;
        constructor(_comp: Compiler);
        wrapperRef: ViewContainerRef;
        doClose: EventEmitter<boolean>;
        settings: ModalSettings;
        state: string;
        toSet: any;
        createWithComp(modal: any, comp: string): void;
        overlayClose(): void;
        close(): void;
    }
}
declare module "modal/single.module" {
    export class SingleModule {
    }
}
declare module "modal/modal.service" {
    import { ViewContainerRef, Compiler } from '@angular/core';
    import { ModalSettings } from "modal/settings.interface";
    export class ModalService {
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
}
declare module "modal/modal.module" {
    export class ModalModule {
    }
}
declare module "pagination/pagination.component" {
    export class PaginationComponent {
        pagination: {
            pagesArray: number[];
            itemsPerPage: number;
            activePage: number;
        };
    }
}
declare module "pagination/pagination.pipe" {
    import { PipeTransform } from '@angular/core';
    export class PaginationPipe implements PipeTransform {
        transform(value: any, args: any): any;
    }
}
declare module "pagination/pagination.module" {
    export class PaginationModule {
    }
}
declare module "pipes/search/search.pipe" {
    export class SearchPipe {
        transform(value: any[], args: [string, string[], boolean, boolean, boolean]): any[];
        private _fromStart;
        private _fromAny;
        private _cFromStart;
        private _cfromAny;
        private _getValue(item, str);
    }
}
declare module "pipes/search/search.module" {
    export class SearchPipeModule {
    }
}
declare module "select/select.component" {
    import { EventEmitter, TemplateRef, ElementRef } from '@angular/core';
    export class SelectComponent {
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
}
declare module "select/select.module" {
    export class SelectModule {
    }
}
declare module "tabs/tabs.component" {
    import { TabComponent } from "tabs/tab.component";
    export class TabsComponent {
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
}
declare module "tabs/tab.component" {
    import { ElementRef, OnInit } from '@angular/core';
    import { TabsComponent } from "tabs/tabs.component";
    export class TabComponent implements OnInit {
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
}
declare module "tabs/tabs.module" {
    export class TabsModule {
    }
}
