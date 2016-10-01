import {Component, ElementRef, TemplateRef, ContentChild, Input} from '@angular/core';
import {Window} from '../../utils/window/window';

const animationTime = 500;

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
        
        .close {
            position: absolute;
            top: 20px;
            left: 20px;
        }
        
        .animation-block {
            position: absolute;
            top: 0;
            left: 0;
            transition: transform ${animationTime}ms ease-in-out;
        }
    `],
    template: `
        <div class="trigger" (click)="open()">
            <template [ngTemplateOutlet]="triggerRef"></template>
        </div>
        <span class="animation-block" [ngStyle]="style"></span>
        <div class="modal" [ngStyle]="{background: overlayBg}" [hidden]="modalHidden">
            <button (click)="close()" class="close">Close</button>
            <template [ngTemplateOutlet]="contentRef"></template>
        </div>    
    `
})
export class MorphOverlayComponent {
    constructor(
        private _el: ElementRef,
        private _window: Window
    ) {}

    @Input() overlayBg: string = '#F44336';

    @ContentChild('scTrigger') triggerRef: TemplateRef<any>;
    @ContentChild('scContent') contentRef: TemplateRef<any>;

    blockHidden: boolean = true;
    modalHidden: boolean = true;

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

        this.blockHidden = false;
        this.scaleY = this._calcScale(this.top, this.height, this._window.innerHeight());
        this.scaleX = this._calcScale(this.left, this.width, this._window.innerWidth());
        setTimeout(() => {
            this.blockHidden = true;
            this.modalHidden = false;
        }, animationTime)
    }

    close() {
        this.blockHidden = false;
        this.modalHidden = true;
        this.scaleX = 1;
        this.scaleY = 1;
        setTimeout(() => this.blockHidden = true, animationTime)
    }

    private _calcScale(firstCoord: number, elSize: number, windowSize: number): number {
        let secondCoord = windowSize - firstCoord - elSize,
            maxCoord = Math.max(firstCoord, secondCoord),
            scaleValue = (maxCoord * 2 + elSize) / elSize;
        return Math.ceil(scaleValue * 10) / 10;
    }

}