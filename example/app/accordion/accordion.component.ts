import {Component, Input} from '@angular/core';
import {AccordComponent} from './accord.component';
import {single} from 'rxjs/operator/single';

@Component({
    selector: 'sc-accordion',
    template: `
        <ng-content></ng-content>
    `,
    styles: [`
        :host {
            width: 100%;
            display: block;
            color: #212121;
        }
    `]
})

export class AccordionComponent {

    @Input() singleActive: boolean = false;

    accords: AccordComponent[] = [];

    trigger(accord: AccordComponent) {

        let toSet = !accord.act,
            state = toSet ? 'open' : 'closed';

        if (this.singleActive) {
            this.accords.forEach(a => {
                a.act = false;
                a.state = 'closed';
                a.inner = 'closed';
            })
        }

        accord.act = toSet;

        accord.state = state;
        accord.inner = state;
    }

    addAccord(accord: AccordComponent) {
        this.accords.push(accord);
    }
}