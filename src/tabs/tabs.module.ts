import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        TabsComponent,
        TabComponent
    ],
    exports: [
        TabsComponent,
        TabComponent
    ],
    bootstrap: [TabsComponent]
})
export class TabsModule {}