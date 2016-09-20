import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sc-tooltip-comp',
    template: `<span class="simple-label">{{simpleLabel}}</span>`,
    styles: [`
       .simple-label {
           position: fixed;
           padding: 5px 15px;
           background: blue;
       }
    `]
})
export class TooltipComponent {
    simpleLabel: string;
}