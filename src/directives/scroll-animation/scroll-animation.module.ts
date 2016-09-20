import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollAnimationDirective} from './scroll-animation.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [ScrollAnimationDirective],
    exports: [ScrollAnimationDirective]
})
export class ScrollAnimationModule {}