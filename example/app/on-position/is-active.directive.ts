import {Directive, Input, HostListener, ElementRef, Renderer, AfterViewInit} from '@angular/core';

@Directive({
    selector: '[sc-is-active]'
})
export class IsActiveDirective implements AfterViewInit {
    @Input('sc-is-active') refEl: any;
    @Input('to-set') classToSet: string = 'active';

    @HostListener('window:scroll', ['$event']) onScroll() {
        const pos = this.inPosition(),
            hasClass = this._el.nativeElement.classList.value.indexOf(this.classToSet) !== -1;

        if (pos && !hasClass) this._renderer.setElementClass(this._el.nativeElement, this.classToSet, true);
        else if (!pos && hasClass) this._renderer.setElementClass(this._el.nativeElement, this.classToSet, false);
    }

    constructor(private _el: ElementRef, private _renderer: Renderer) {}

    ngAfterViewInit(): void {
        if (this.inPosition()) this._renderer.setElementClass(this._el.nativeElement, this.classToSet, true);
    }

    inPosition() {
        const rect = this.refEl.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
    }
}