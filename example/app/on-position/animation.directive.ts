import {Directive, HostListener, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Directive({
    selector: '[scAnimation]'
})
export class AnimationDirective {

    @Input() refEl: any;

    @Input() animation: string = 'reached';
    @Input() state: string = 'animationState';
    @Input() offset: number = 0;
    @Output() reached: EventEmitter<any> = new EventEmitter(null);

    @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
        if (this.refEl.getBoundingClientRect().top + this.offset <= 0) this.refEl[this.state] = this.animation;
    }
}