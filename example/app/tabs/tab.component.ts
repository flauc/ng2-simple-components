import {TabsComponent} from './tabs.component';
import {Input, Component} from '@angular/core';

@Component({
    selector: 'sc-tab',
    template: `
        <div class="col" [hidden]="!active">
          <ng-content></ng-content>
        </div>
    `,
    styles: [`
        col {
            
        }
    `]
})
export class TabComponent {

    @Input() title: string;
    @Input() active: boolean;
    @Input() disabled: boolean;

    position: number;

    constructor(tabsComp: TabsComponent) {
        this.position = tabsComp.tabs.length + 1;
        tabsComp.addTab(this);
    }
}