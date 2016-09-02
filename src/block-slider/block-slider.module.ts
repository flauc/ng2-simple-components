import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockSliderComponent} from './block-slider.component';
import {BlockComponent} from './block.component';

@NgModule({
    imports: [CommonModule],
    declarations: [BlockSliderComponent, BlockComponent],
    exports: [BlockSliderComponent, BlockComponent]
})
export class BlockSliderModule {}