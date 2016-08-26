import {Component, Input, style, state, trigger, transition, animate} from '@angular/core';
import {AccordionComponent} from './accordion.component';

const animationTime = 300;

@Component({
    selector: 'sc-accord',
    template: `
        <div class="accord" [class.active]="act">
            <div class="bar" (click)="trigger()">
                <span>{{title}}</span>
            </div>
            <div class="inner" [@anim]="inner" [ngClass]="{closed: hasOverflow || inner === 'closed'}">
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
            transition('closed <=> open', animate(`${animationTime}ms ease-in-out`))
        ])
    ],
    styles:  [`  
        .bar {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            border-top: 1px solid rgba(0, 0, 0, 0.12);
            cursor: pointer;
            background: #fff;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-select: none; 
            -moz-user-select: none
        }
        
        span {
            line-height: 50px;
            padding: 0 1rem;
            font-size: 1.1rem;
            text-transform: uppercase;
        }
        
        .inner {
            display: block;
            background: #F6F6F6;
        }
        
        .inner.closed {
            overflow: hidden;
        }
        
        .pad {
            padding: 0.5rem 1rem;
        }
    `]
})

export class AccordComponent {

    @Input() title: string = 'Accord';
    @Input() locked: boolean = false;
    @Input() set active(act: boolean) {
        this.act = act;
        this.hasOverflow = !act;
        this.inner = act ? 'open' : 'closed';
    };

    act: boolean = false;
    inner: string = 'closed';
    hasOverflow: boolean = true;

    trigger() {
        this.hasOverflow = true;
        setTimeout(() => this.hasOverflow = this.inner === 'closed', animationTime);
        this.accordionComp.trigger(this);
    }

    constructor(
        private accordionComp: AccordionComponent
    ) {
        accordionComp.addAccord(this);
    }
}