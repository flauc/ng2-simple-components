import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SelectComponent} from './select.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [SelectComponent],
    exports: [SelectComponent]
})
export class SelectModule {}