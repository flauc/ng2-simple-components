import {Component, Input} from '@angular/core';
import {AccordComponent} from './accord.component';

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
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)
        }
    `]
})

export class AccordionComponent {

    @Input() singleActive: boolean = false;

    accords: AccordComponent[] = [];

    trigger(accord: AccordComponent) {

        if (!accord.locked) {
            let toSet = !accord.act,
                state = toSet ? 'open' : 'closed';

            if (this.singleActive) {
                this.accords.forEach(a => {
                    if (!a.locked) {
                        a.act = false;
                        a.inner = 'closed';
                    }
                })
            }

            accord.act = toSet;
            accord.inner = state;
        }
    }

    addAccord(accord: AccordComponent) {
        this.accords.push(accord);
    }
}