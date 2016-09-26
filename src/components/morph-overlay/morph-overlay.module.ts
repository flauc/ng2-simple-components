import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MorphOverlayComponent} from './morph-overlay.component';
import {WindowBrowser} from '../../utils/window/window.browser';
import {WindowNode} from '../../utils/window/window.node';
import {Window} from '../../utils/window/window';

@NgModule({
    imports: [CommonModule],
    declarations: [MorphOverlayComponent],
    exports: [MorphOverlayComponent]
})
export class MorphOverlayModule {
    static environment(env: 'browser' | 'node'): ModuleWithProviders {
        return {
            ngModule: MorphOverlayModule,
            providers: [{ provide: Window, useClass: env === 'node' ? WindowNode : WindowBrowser }]
        };
    }
}