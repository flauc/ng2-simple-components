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
            state('default', style({position: 'absolute', opacity: 0, 'min-height': '0'})),
            state('first', style({position: 'relative', opacity: 1, 'max-height': '100%'})),

            state('leaveLeft', style({ position: 'absolute', opacity: 0, 'min-height': '0'})),
            state('leaveRight', style({ position: 'absolute', opacity: 0, 'min-height': '0'})),

            state('enterRight', style({position: 'relative', opacity: 1, 'max-height': '100%'})),
            state('enterLeft', style({position: 'relative', opacity: 1, 'max-height': '100%'})),

            transition('* => enterRight', [
                style({transform: 'translateX(-100%)', opacity: 0}),
                animate('300ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
            ]),

            transition('* => enterLeft', [
                style({transform: 'translateX(100%)', opacity: 0}),
                animate('300ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
            ]),

            transition('* => leaveLeft', [
                style({transform: 'translateX(0)', opacity: 1}),
                animate('300ms ease-in-out', style({transform: 'translateX(-100%)', opacity: 0}))
            ]),

            transition('* => leaveRight', [
                style({transform: 'translateX(0)', opacity: 1}),
                animate('300ms ease-in-out', style({transform: 'translateX(100%)', opacity: 0}))
            ]),
        ])
    ],
    styles: [`
        .content {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            -webkit-transition: all .5s cubic-bezier(.35,0,.25,1);
            transition: all .5s cubic-bezier(.35,0,.25,1);
            overflow: auto;
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            padding: 1rem;
        }
        .content h1 {
            margin: 0;
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