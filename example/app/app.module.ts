import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SlideToService} from './slide-to/slide-to.service';
import {AnimationDirective} from './on-position/animation.directive';
import {ModalModule, TabsModule, AccordionModule, BlockSliderModule, SelectModule} from 'ng2-simple-components';
import {TestComponent} from './modal-test/test.component';

@NgModule({
    imports: [
        BrowserModule,
        TabsModule,
        AccordionModule,
        BlockSliderModule,
        SelectModule,
        ModalModule
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