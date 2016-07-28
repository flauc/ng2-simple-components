import {Component} from '@angular/core';
import {RippleComponent} from './ripple.component';
import {RippleDirective} from './ripple.directive';

@Component({
    selector: 'app',
    template: `
        <p>Working</p>
        <p sc-ripple>Proba</p>
    `
})
export class AppComponent { }