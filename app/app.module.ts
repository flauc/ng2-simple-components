import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TabsModule, AccordionModule, BlockSliderModule} from 'ng2-simple-components';

@NgModule({
    imports: [
        BrowserModule,
        TabsModule,
        AccordionModule,
        BlockSliderModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }