import {Component} from '@angular/core';
import {RippleComponent} from './ripple.component';
import {RippleDirective} from './ripple.directive';

@Component({
    selector: 'app',
    directives: [RippleComponent, RippleDirective],
    template: `
        <p>Working</p>
        <p sc-ripple>Proba</p>
    `
})
export class AppComponent { }