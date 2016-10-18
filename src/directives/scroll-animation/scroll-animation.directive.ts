import {ElementRef, Directive, OnInit, Input, HostListener, Renderer, Inject} from '@angular/core';
import {Window} from '../../utils/window/window';

@Directive({selector: '[sc-animation]'})
export class ScrollAnimationDirective implements OnInit {
    constructor(
        private _el: ElementRef,
        private _renderer: Renderer,
        @Inject(Window) private _window: Window
    ) {}

    // Element that triggers the reached state
    @Input('sc-animation') set sc(options: {ref?: ElementRef, offset?: number, class?: string, delay: number, hideInitial?: boolean}) {
        this.options = Object.assign(this.options, options);
    }

    @Input() removeAfter: number = null;

    @HostListener('window:scroll') onScroll() {
        if (!this.hasClass && this._window.pageYOffset + this.windowHeight >= this.top + this.options.offset) {
            setTimeout(() => {
                this._renderer.setElementClass(this._el.nativeElement, this.options.class, true);
                // Remove the class after the time specified if it was specified
                if (this.removeAfter !== null) setTimeout(() => this._renderer.setElementClass(this._el.nativeElement, this.options.class, false), this.removeAfter)
            }, this.options.delay);
            this.hasClass = true;
        }
    }

    @HostListener('window:resize') onResize() {
        this.windowHeight = this._window.innerHeight;
        this._setTop()
    }

    top: number;
    windowHeight: number = this._window.innerHeight;
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
        this.top = this.options.ref.nativeElement.getBoundingClientRect ? this.options.ref.nativeElement.getBoundingClientRect().top : 0;
    }

    private _hideInitial() {
        this._renderer.setElementStyle(this._el.nativeElement, 'opacity', '0');
    }
}