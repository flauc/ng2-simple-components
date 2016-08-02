import {Component, Input, style, state, trigger, transition, animate} from '@angular/core';
import {AccordionComponent} from './accordion.component';

@Component({
    selector: 'sc-accord',
    template: `
        <div class="accord" @accord="state" (click)="trigger()">
            <div class="bar">
                <span>{{title}}</span>
            </div>
            <div class="inner" @inner="inner">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    animations: [
        trigger('accord', [
            state('closed', style({width: '90%', margin: '0 5%'})),
            state('open', style({width: '100%', margin: '1rem 0'})),

            transition('closed => open', [
                style({width: '90%', margin: '0 5%'}),
                animate('300ms ease-in-out', style({width: '100%', margin: '1rem 0'}))
            ]),

            transition('open => closed', [
                style({width: '100%', margin: '1rem 0'}),
                animate('300ms ease-in-out', style({width: '90%', margin: '0 5%'}))
            ])
        ]),

        trigger('inner', [
            state('open', style({padding: '0.5rem 1rem', opacit: 1})),
            state('closed', style({height: 0, padding: 0, opacit: 0})),

            transition('closed => open', [
                style({opacity: 0}),
                animate('300ms ease-in-out', style({opacity: 1}))
            ]),

            transition('open => closed', [
                style({opacity: 1}),
                animate('300ms ease-in-out', style({opacity: 0}))
            ])
        ])
    ],
    styles:  [`
        .accord {
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
        }
        
        .bar {
            width: 100%;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            height: 50px;
        }
        
        span {
            line-height: 50px;
            padding: 0 1rem;
            font-size: 1.1rem;
            text-transform: uppercase;
        }
        
        .inner {
            overflow: hidden;
            display: inline-block;
            background: #F6F6F6;
        }
    `]
})

export class AccordComponent {

    @Input() title: string;
    @Input() set active(act: boolean) {
        let s = act ? 'open' : 'closed';

        this.act = act;
        this.state = s;
        this.inner = s;
    };

    act: boolean = false;
    state: string = 'closed';
    inner: string = 'closed';

    trigger() {
        this.accordionComp.trigger(this);
    }

    constructor(
        private accordionComp: AccordionComponent
    ) {
        accordionComp.addAccord(this);
    }
}