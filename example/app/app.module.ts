import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BlockComponent} from './block-slider/block.component';
import {AccordComponent} from './accordion/accord.component';
import {AccordionComponent} from './accordion/accordion.component';
import {BlockSliderComponent} from './block-slider/block-slider.component';
import {SlideToService} from './slide-to/slide-to.service';
import {AnimationDirective} from './on-position/animation.directive';
import {TabsModule} from 'simple-components';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        TabsModule
    ],
    providers: [
        SlideToService
    ],
    declarations: [
        AnimationDirective,
        AccordionComponent,
        AccordComponent,
        BlockSliderComponent,
        BlockComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}