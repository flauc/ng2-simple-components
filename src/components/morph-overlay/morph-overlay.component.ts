import {Component, ElementRef, TemplateRef, ContentChild, Input, Inject} from '@angular/core';
import {Window} from '../../utils/window/window';


@Component({
    selector: 'sc-morph-overlay',
    styles: [`

        :host {
            display: block;
            width: 200px;
            height: 200px;
            margin-top: 200px;
            margin-left: 300px;
            position: relative;
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
        }
        
        .animation-block {
            position: absolute;
            top: 0;
            left: 0;
            transition: transform 500ms ease-in-out;
        }
    `],
    template: `
        <div class="trigger" [ngClass]="{active: triggerActive}" (click)="open()">
            <template [ngTemplateOutlet]="triggerRef"></template>
        </div>
        <span class="animation-block" [ngStyle]="style"></span>
        <div class="modal" [ngClass]="{active: !modalHidden}" [ngStyle]="{background: overlayBg}" [hidden]="modalHidden">
            <div class="modal__header">
                <h3>{{modalTitle}}</h3>
                <button (click)="close()" class="close">Close</button>
            </div>
            <template [ngTemplateOutlet]="contentRef"></template>
        </div>    
    `
})
export class MorphOverlayComponent {
    constructor(
        private _el: ElementRef,
        @Inject(Window) private _window: Window
    ) {}

    @Input() overlayBg: string = '#F44336';
    @Input() initialDelay: number = 300;
    @Input() modalTitle: string = '';
    @Input() overflowBody: boolean = true;

    @ContentChild('scTrigger') triggerRef: TemplateRef<any>;
    @ContentChild('scContent') contentRef: TemplateRef<any>;

    blockHidden: boolean = true;
    modalHidden: boolean = true;
    triggerActive: boolean = false;

    width: number;
    height: number;
    top: number;
    left: number;
    scaleX: number = 1;
    scaleY: number = 1;

    get style() {
        return {
            visibility: this.blockHidden ? 'hidden' : 'visible',
            background: this.overlayBg,
            width: `${this.width}px`,
            height: `${this.height}px`,
            top: `0px`,
            left: `0px`,
            transform: `scaleX(${this.scaleX}) scaleY(${this.scaleY})`
        }
    }

    open() {

        const rect = this._el.nativeElement.getBoundingClientRect();

        this.width = rect.width;
        this.height = rect.height;
        this.left = rect.left;
        this.top = rect.top;

        this.triggerActive = true;

        if (this._window.document && this.overflowBody)
            this._window.document.body.style.overflowY = 'hidden';

        setTimeout(() => {
            this.blockHidden = false;
            this.scaleY = this._calcScale(this.top, this.height, this._window.innerHeight);
            this.scaleX = this._calcScale(this.left, this.width, this._window.innerWidth);
            setTimeout(() => {
                this.blockHidden = true;
                this.modalHidden = false;
            }, 500)
        }, this.initialDelay);
    }

    close() {
        this.blockHidden = false;
        this.modalHidden = true;
        this.scaleX = 1;
        this.scaleY = 1;

        if (this._window.document && this.overflowBody)
            this._window.document.body.style.overflowY = 'initial';

        setTimeout(() => {
            this.blockHidden = true;
            this.triggerActive = false;
        }, 500)
    }

    private _calcScale(firstCoord: number, elSize: number, windowSize: number): number {
        let secondCoord = windowSize - firstCoord - elSize,
            maxCoord = Math.max(firstCoord, secondCoord),
            scaleValue = (maxCoord * 2 + elSize) / elSize;
        return Math.ceil(scaleValue * 10) / 10;
    }

}