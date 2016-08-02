import {Input, Component, trigger, state, style, transition, animate} from '@angular/core';
import {TabsComponent} from './tabs.component';

@Component({
    selector: 'sc-tab',
    template: `
        <div class="content" @anim="animate" [hidden]="!active">
          <ng-content></ng-content>
        </div>
    `,
    animations: [
        trigger('anim', [
            transition('* => enter', [
                style({opacity: 0}),
                animate('300ms ease-in-out', style({opacity: 1}))
            ])
        ])
    ],
    styles: [`
        :host {
            overflow: hidden;
        }
    `]
})
export class TabComponent {

    @Input() title: string;
    @Input() active: boolean;
    @Input() disabled: boolean;

    animate: string = 'default';

    position: number;

    constructor(tabsComp: TabsComponent) {
        this.position = tabsComp.tabs.length + 1;
        tabsComp.addTab(this);
    }
}