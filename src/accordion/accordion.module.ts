import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AccordionComponent} from './accordion.component';
import {AccordComponent} from './accord.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AccordionComponent, AccordComponent],
    exports: [AccordionComponent, AccordComponent]
})
export class AccordionModule {}