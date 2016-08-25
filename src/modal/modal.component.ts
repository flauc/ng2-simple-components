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
            top: 50px;
        }
    `],
    animations: [
        trigger('overlay', [
            state('void', style({opacity: 0})),
            state('open', style({opacity: 1})),
            transition('void <=> open', animate(`${animationTime}ms ease-in-out`))
        ])
    ],
    template: `
        <div class="overlay"  [@overlay]="state" (click)="close()"></div>
        <div class="wrapper" #wrapper>
            <p>Test</p>
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
        console.log(this.wrapperRef);
        console.log(this.childComp);
        this._comp.compileComponentAsync(this.childComp).then(a => {
            this.wrapperRef.createComponent(a, 0);
        });
    }

    close(): void {
        this.state = 'void';
        setTimeout(() => this._service.close(), animationTime)
    }

    ngOnDestroy(): void {

    }
}