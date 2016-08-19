import {Directive, HostListener, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Directive({
    selector: '[sc-animation]'
})
export class AnimationDirective {

    // Element that triggers the reached state
    @Input('sc-animation') refEl: any;
    // Name of the reached state
    @Input() animation: string = 'reached';
    // Name of the state parameter
    @Input() state: string = 'animationState';
    // An offset from the top of the refEl
    @Input() offset: number = 0;

    @Output() reached: EventEmitter<any> = new EventEmitter(null);

    @HostListener('window:scroll', ['$event']) onScroll() {
        if (this.refEl.getBoundingClientRect().top + parseFloat(this.offset) <= 0) {
            this._el.nativeElement[this.state] = this.animation;
            this.reached.emit(true)
        }
    }

    constructor(private _el: ElementRef) {}
}