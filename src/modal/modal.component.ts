import {
    Component, OnInit, trigger, state, style, transition, animate, OnDestroy, ViewChild, ViewContainerRef,
    Compiler
} from '@angular/core';
import {ModalService} from './modal.service';

const animationTime = 200;

@Component({
    selector: 'sc-modal',
    styles: [`
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
        }
        
        .wrapper {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 200px;
            height: 200px;
            background: #fff;
        }
    `],
    animations: [
        trigger('overlay', [
            state('void', style({opacity: 0})),
            state('open', style({opacity: 1})),
            transition('void <=> open', animate(`${animationTime}ms ease-in-out`))
        ]),

        trigger('wrapper', [
            state('void', style({opacity: 0, transform: 'translateY(20%)'})),
            state('open', style({opacity: 1, transform: 'translateY(0)'})),
            transition('void <=> open', animate(`${animationTime}ms ease-in-out`))
        ])
    ],
    template: `
        <div class="overlay"  [@overlay]="state" (click)="close()"></div>
        <div class="wrapper" [@wrapper]="state">
            <div #wrapper></div>
        </div>
    `
})
export class ModalComponent implements OnInit, OnDestroy {

    @ViewChild('wrapper', {read: ViewContainerRef}) wrapperRef: ViewContainerRef;

    state: string = 'open';

    childComp: any;

    constructor(
        private _comp: Compiler,
        private _service: ModalService
    ) {}

    ngOnInit(): void {
        this._comp.compileComponentAsync(this.childComp).then(a => this.wrapperRef.createComponent(a));
    }

    close(): void {
        this.state = 'void';
        setTimeout(() => this._service.close(), animationTime)
    }

    ngOnDestroy(): void {

    }
}