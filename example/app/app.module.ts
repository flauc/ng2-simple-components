import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BlockComponent} from './block-slider/block.component';
import {AccordComponent} from './accordion/accord.component';
import {AccordionComponent} from './accordion/accordion.component';
import {BlockSliderComponent} from './block-slider/block-slider.component';
import {TabComponent} from './tabs/tab.component';
import {TabsComponent} from './tabs/tabs.component';
import {SlideToService} from './slide-to/slide-to.service';

@NgModule({
    imports: [BrowserModule],
    providers: [
        SlideToService
    ],
    declarations: [
        TabsComponent,
        TabComponent,
        AccordionComponent,
        AccordComponent,
        BlockSliderComponent,
        BlockComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}