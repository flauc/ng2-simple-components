import {Component, Input, style, state, trigger, transition, animate} from '@angular/core';
import {AccordionComponent} from './accordion.component';

@Component({
    selector: 'sc-accord',
    template: `
        <div class="accord" (click)="trigger()">
            <div class="bar">
                <span>{{title}}</span>
            </div>
            <div class="inner" [class.active]="act">
                <div class="pad">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
    styles:  [`  
        .bar {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            border-top: 1px solid rgba(0, 0, 0, 0.12);
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
            max-height: 0;
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
        
        .pad {
            padding: 0.5rem 1rem;
        }
        
        .inner.active {
            max-height: 1000px;
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