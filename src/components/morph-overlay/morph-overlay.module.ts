import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MorphOverlayComponent} from './morph-overlay.component';
import {WindowNode} from '../../utils/window/window.node';

@NgModule({
    imports: [CommonModule],
    declarations: [MorphOverlayComponent],
    exports: [MorphOverlayComponent]
})
export class MorphOverlayModule {
    static environment(env: 'browser' | 'node'): ModuleWithProviders {
        return {
            ngModule: MorphOverlayModule,
            providers: [{ provide: Window, useValue: env === 'node' ? new WindowNode() : window }]
        };
    }
}