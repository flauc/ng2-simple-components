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
        <div class="block" [sc-animation]></div>
        <div class="block" [is-active]="header"></div>
        <div class="block" [sc-animation]="{class: 'pero', offset: 100}"></div>
        <div class="block" #header></div>
        <div class="block"></div>
    `,
    styles: [`
        .block {
            height: 500px;
        }
    `]
})

export class AppComponent {

}