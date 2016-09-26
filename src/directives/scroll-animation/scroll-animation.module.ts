import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollAnimationDirective} from './scroll-animation.directive';
import {Window} from '../../utils/window/window';
import {WindowNode} from '../../utils/window/window.node';
import {WindowBrowser} from '../../utils/window/window.browser';

@NgModule({
    imports: [CommonModule],
    declarations: [ScrollAnimationDirective],
    exports: [ScrollAnimationDirective]
})
export class ScrollAnimationModule {
    static environment(env: 'browser' | 'node'): ModuleWithProviders {
        return {
            ngModule: ScrollAnimationModule,
            providers: [{ provide: Window, useClass: 'node' ? WindowNode : WindowBrowser }]
        };
    }
}