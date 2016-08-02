import {Input, Component, trigger, state, style, transition, animate} from '@angular/core';
import {TabsComponent} from './tabs.component';

@Component({
    selector: 'sc-tab',
    template: `
        <div class="content" @anim="animate">
          <ng-content></ng-content>
        </div>
    `,
    animations: [
        trigger('anim', [
            state('default', style({marginLeft: '110%'})),
            transition('default => *', [
                style({left: '100%', background: 'blue'}),
                animate('80ms ease-in', style({
                    marginLeft: 0
                }))
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