import {Input, Directive, ElementRef, Renderer} from '@angular/core';
import {IsActiveDirective} from './is-active.directive';

@Directive({
    selector: '[is-active]'
})
export class IsActiveDirectiveNode implements IsActiveDirective {
    constructor(
        private _el: ElementRef,
        private _renderer: Renderer
    ) {}

    @Input('is-active') refEl: any;
    @Input('to-set') classToSet: string = 'active';

    onScroll() {}

    ngAfterViewInit(): void {}

    inPosition(): boolean {
        return false;
    }
}