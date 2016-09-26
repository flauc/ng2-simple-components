import {Component, AfterViewInit, ElementRef, TemplateRef, ContentChild, style} from '@angular/core';
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
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: black;
        }
        
        .close {
            position: absolute;
            top: 20px;
            left: 20px;
        }
        
        .animation-block {
            position: absolute;
            background: black;
            transition: transform 500ms ease-in-out;
        }
    `],
    template: `
        <div class="trigger" (click)="open()">
            <template [ngTemplateOutlet]="triggerRef"></template>
        </div>
        <span class="animation-block" [ngStyle]="style"></span>
        <div class="modal" [hidden]="modalHidden">
            <button (click)="close()" class="close">Close</button>
            <template [ngTemplateOutlet]="contentRef"></template>
        </div>    
    `
})
export class MorphOverlayComponent implements AfterViewInit {
    constructor(
        private _el: ElementRef,
        private _window: Window
    ) {}

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
        return {width: `${this.width}px`, height: `${this.height}px`, top: `${this.top}px`, left: `${this.left}px`, transform: `scaleX(${this.scaleX}) scaleY(${this.scaleY})`}
    }

    ngAfterViewInit() {

        const rect = this._el.nativeElement.getBoundingClientRect();

        this.width = rect.width;
        this.height = rect.height;
        this.left = rect.left;
        this.top = rect.top;
    }

    open() {

        this.blockHidden = false;
        this.scaleY = this._calcScale(this.top, this.height, this._window.innerHeight());
        this.scaleX = this._calcScale(this.left, this.width, this._window.innerWidth())
        setTimeout(() => {
            this.blockHidden = true;
            this.modalHidden = false;
        }, animationTime)
    }

    close() {
        this.blockHidden = false;
        this.scaleX = 1;
        this.scaleY = 1;
        setTimeout(() => {
            this.blockHidden = true;
            this.modalHidden = true;
        })
    }

    private _calcScale(firstCoord: number, elSize: number, windowSize: number): number {
        let secondCoord = windowSize - firstCoord - elSize,
            maxCoord = Math.max(firstCoord, secondCoord),
            scaleValue = (maxCoord * 2 + elSize) / elSize;
        return Math.ceil(scaleValue * 10) / 10;
    }

}