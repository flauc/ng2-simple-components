import {NgModule} from '@angular/core';
import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';

@NgModule({
    declarations: [
        TabsComponent,
        TabComponent
    ],
    exports: [
        TabsComponent,
        TabComponent
    ]
})
export class TabsModule {}