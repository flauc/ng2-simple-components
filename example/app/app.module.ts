import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SlideToService} from './slide-to/slide-to.service';
import {MorphOverlayModule, ScrollAnimationModule, IsActiveBrowserModule, ModalModule, TabsModule, AccordionModule, BlockSliderModule, SelectModule, SearchPipeModule, TooltipModule} from 'ng2-simple-components';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        TabsModule,
        AccordionModule,
        BlockSliderModule,
        SelectModule,
        ModalModule,
        SearchPipeModule,
        MorphOverlayModule,
        TooltipModule,
        ScrollAnimationModule.environment('browser'),
        IsActiveBrowserModule
    ],
    providers: [
        SlideToService
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}