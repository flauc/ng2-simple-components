import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SlideToService} from './slide-to/slide-to.service';
import {AnimationDirective} from './on-position/animation.directive';
import {TabsModule, AccordionModule, BlockSliderModule, SelectModule} from 'simple-components';

@NgModule({
    imports: [
        BrowserModule,
        TabsModule,
        AccordionModule,
        BlockSliderModule,
        SelectModule
    ],
    providers: [
        SlideToService
    ],
    declarations: [
        AnimationDirective,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}