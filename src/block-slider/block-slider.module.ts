import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BlockSliderComponent} from './block-slider.component';
import {BlockComponent} from './block.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        BlockSliderComponent,
        BlockComponent
    ],
    exports: [
        BlockSliderComponent,
        BlockComponent
    ],
    bootstrap: [BlockSliderComponent]
})
export class BlockSliderModule {}