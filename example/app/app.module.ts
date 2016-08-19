import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BlockComponent} from './block-slider/block.component';
import {BlockSliderComponent} from './block-slider/block-slider.component';
import {SlideToService} from './slide-to/slide-to.service';
import {AnimationDirective} from './on-position/animation.directive';
import {TabsModule, AccordionModule} from 'simple-components';

@NgModule({
    imports: [
        BrowserModule,
        TabsModule,
        AccordionModule
    ],
    providers: [
        SlideToService
    ],
    declarations: [
        AnimationDirective,
        BlockSliderComponent,
        BlockComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}