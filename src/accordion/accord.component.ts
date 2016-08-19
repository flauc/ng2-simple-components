import {Component, Input, style, state, trigger, transition, animate} from '@angular/core';
import {AccordionComponent} from './accordion.component';

@Component({
    selector: 'sc-accord',
    template: `
        <div class="accord" (click)="trigger()">
            <div class="bar">
                <span>{{title}}</span>
            </div>
            <div class="inner" [@anim]="inner">
                <div class="pad">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
    animations: [
        trigger('anim', [
            state('open', style({height: '*'})),
            state('closed', style({height: 0})),

            transition('closed => open', [
                style({height: 0}),
                animate('300ms ease-in-out', style({height: '*'}))
            ]),

            transition('open => closed', [
                style({height: '*'}),
                animate('300ms ease-in-out', style({height: 0}))
            ])
        ])
    ],
    styles:  [`  
        .bar {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            border-top: 1px solid rgba(0, 0, 0, 0.12);
            cursor: pointer;
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
        
        .pad {
            padding: 0.5rem 1rem;
        }
    `]
})

export class AccordComponent {

    @Input() title: string = 'Accord';
    @Input() set active(act: boolean) {
        this.act = act;
        this.inner = act ? 'open' : 'closed';
    };

    act: boolean = false;
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