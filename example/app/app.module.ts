import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SlideToService} from './slide-to/slide-to.service';
import {AnimationDirective} from './on-position/animation.directive';
import {ModalModule, TabsModule, AccordionModule, BlockSliderModule, SelectModule, SearchPipeModule} from 'ng2-simple-components';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        TabsModule,
        AccordionModule,
        BlockSliderModule,
        SelectModule,
        ModalModule,
        SearchPipeModule
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