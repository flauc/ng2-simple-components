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
            state('default', style({transform: 'translateX(-100%)', position: 'absolute'})),
            state('first', style({transform: 'translateX(0)', position: 'relative'})),

            state('leaveLeft', style({transform: 'translateX(-100%)', position: 'absolute'})),
            state('leaveRight', style({transform: 'translateX(100%)', position: 'absolute'})),

            state('enterRight', style({transform: 'translateX(0)', position: 'relative'})),
            state('enterLeft', style({transform: 'translateX(0)', position: 'relative'})),

            transition('* => enterRight', [
                style({transform: 'translateX(-100%)'}),
                animate('300ms ease-in-out', style({transform: 'translateX(0)'}))
            ]),

            transition('* => enterLeft', [
                style({transform: 'translateX(100%)'}),
                animate('300ms ease-in-out', style({transform: 'translateX(0)'}))
            ]),

            transition('* => leaveLeft', [
                style({transform: 'translateX(0)'}),
                animate('300ms ease-in-out', style({transform: 'translateX(-100%)'}))
            ]),

            transition('* => leaveRight', [
                style({transform: 'translateX(0)'}),
                animate('300ms ease-in-out', style({transform: 'translateX(100%)'}))
            ]),
        ])
    ],
    styles: [`
        .content {
            padding: 0.5rem 1rem;
        }
    `]
})
export class TabComponent {

    @Input() set active(act: boolean) {
        this.act = act;
        if (act) this.animate = 'first';
    };

    @Input() title: string;
    @Input() disabled: boolean;

    act: boolean = false;

    animate: string = 'default';

    position: number;

    constructor(tabsComp: TabsComponent) {
        this.position = tabsComp.tabs.length;
        tabsComp.addTab(this);
    }
}