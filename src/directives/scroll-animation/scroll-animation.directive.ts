import {ElementRef, Directive, OnInit, Input, HostListener, Renderer} from '@angular/core';

@Directive({selector: '[sc-animation]'})
export class ScrollAnimationDirective implements OnInit {
    constructor(
        private _el: ElementRef,
        private _renderer: Renderer
    ) {}

    // Element that triggers the reached state
    @Input('sc-animation') set sc(options: {ref?: ElementRef, offset?: number, class?: string, delay: number, hideInitial?: boolean}) {
        this.options = Object.assign(this.options, options);
    }

    @HostListener('window:scroll') onScroll() {
        if (!this.hasClass && window.pageYOffset + this.windowHeight >= this.top + this.options.offset) {
            setTimeout(() => this._renderer.setElementClass(this._el.nativeElement, this.options.class, true), this.options.delay);
            this.hasClass = true;
        }
    }

    @HostListener('window:resize') onResize() {
        this.windowHeight = window.innerHeight;
        this._setTop()
    }

    top: number;
    windowHeight: number = window.innerHeight;
    hasClass: boolean = false;

    options: {ref: ElementRef, offset: number, class: string, delay: number, hideInitial: boolean} = {
        ref: this._el,
        offset: 0,
        class: 'enter',
        delay: 0,
        hideInitial: true
    };

    ngOnInit() {
        if (this.options.hideInitial) this._hideInitial();
        this._setTop();
        this.onScroll();
    }

    private _setTop() {
        this.top = this.options.ref.nativeElement.getBoundingClientRect().top
    }

    private _hideInitial() {
        this._renderer.setElementStyle(this._el.nativeElement, 'opacity', '0');
    }
}