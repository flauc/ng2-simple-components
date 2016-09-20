import {
    Component, ViewChild, style, animate, transition, state, trigger, ViewContainerRef,
    ComponentFactoryResolver, ComponentFactory, Compiler, ReflectiveInjector
} from '@angular/core';
import {SlideToService} from './slide-to/slide-to.service';
import {ModalService} from 'ng2-simple-components';
import {TestComponent} from './modal-test/test.component';
import {TestModule} from './modal-test/test.module';
@Component({
    selector: 'app',
    animations: [
        trigger('anim', [
            state('reached', style({background: 'red'})),
            transition('* => reached', [
                style({background: 'blue'}),
                animate('300ms ease-in-out', style({background: 'red'}))
            ])
        ])
    ],
    template: `
        <p [sc-tooltip]="{simpleLabel: 'bla'}">Test</p>
    `,
    styles: [``]
})

export class AppComponent {


}