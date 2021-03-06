import {Component, OnInit, Input, HostListener} from '@angular/core';
import {BlockComponent} from './block.component';


@Component({
    selector: 'sc-block-slider',
    styles: [`
        :host {
            display: block;
        }
        
        .arrow {
            height: 100%;
            position: absolute;
            width: 5%;
            top: 0;
            cursor: pointer;
        }
        
        .arrow.right {
            right: 0;
            border-left: 1px solid rgba(0, 0, 0, 0.12);
        }
       .arrow.left {
            left: 0;
            border-right: 1px solid rgba(0, 0, 0, 0.12);
        } 
        
        .arrow .line {
            position: absolute;
            top: 50%;
            width: 3px;
            height: 14px;
            transform-origin: 50% 0;
        }
        
        .arrow.right .line { 
            transform: rotate(45deg);
            left: 60%;
        }
        .arrow.right .line:nth-child(2) { transform: translateY(1px) rotate(135deg) }
        
        .arrow.left .line { 
            transform: rotate(-45deg);
            right: 60%;
        }
        .arrow.left .line:nth-child(2) { transform: translateY(1px) rotate(-135deg) }
        
        .arrow .line:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #888;
            transition: background-color 0.3s;
        }       
       
        .slide-wrapper {
            display: block;
            white-space: nowrap;
            transition: all .3s ease;
        }
    `],
    template: `
        <div class="arrow right" (click)="moveRight()">
            <span class="line"></span>    
            <span class="line"></span>    
        </div>
        <div class="arrow left" (click)="moveLeft()">
            <span class="line"></span>    
            <span class="line"></span>    
        </div>
        <div class="slide-wrapper"[ngStyle]="{'transform': 'translate3d(' + positionStyle + ', 0, 0'}" (swipe)="onSwipe($event)">
            <ng-content></ng-content>
        </div>
    `
})

export class BlockSliderComponent implements OnInit {

    @Input() blockCount: number = 4;
    @Input() startingPosition: number = 0;
    @Input() gap: number = 2;
    @Input() set mediaQuery(m: Array<{screenWidth: number, blockCount: number}>) {
        this._mediaSorted = m.sort((a, b) => a.screenWidth - b.screenWidth)
    }

    initialCount: number = 4;

    blocks: BlockComponent[] = [];

    position: number = 0;
    positionStyle: string = '0';

    private _segments: number;
    private _lastSegment: [number, number];
    private _mediaSorted: Array<{screenWidth: number, blockCount: number}>;

    @HostListener('window:resize', ['$event']) screenResize(event) {
        if (this._mediaSorted) {

            let found = this._mediaSorted.findIndex(a => a.screenWidth > event.target.innerWidth);

            this.blockCount = found !== -1 ? this._mediaSorted[found].blockCount : this.initialCount;

            const width = this.blockWidth();

            this.blocks.forEach(a => a.width = width);
            this.positionStyle = `-${this.position * width}%`;
        }
    }

    ngOnInit(): void {
        this.position = this.startingPosition;
        this.positionStyle = `-${this.position * this.blockWidth()}%`;
        this.initialCount = this.blockCount;
    }

    blockWidth(): number {
        return (100 - this.gap * this.blockCount) / this.blockCount;
    }

    blockWidthWithGap(): number {
        return 100 / this.blockCount;
    }

    addBlock(block: BlockComponent) {
        this.blocks.push(block);
        this._segments = this.blocks.length / this.blockCount;
        this._lastSegment = [(this._segments - 1) * this.blockCount, this._segments * this.blockCount];
    }

    moveLeft() {
        if (!this.position) this.position = this._lastSegment[0];
        else this.position--;
        this.blocks.forEach((a, i) => a.active = this.calcActive(i));
        this.positionStyle = `-${this.position * this.blockWidthWithGap()}%`
    }

    moveRight() {
        if (this.position >= this._lastSegment[0] && this.position <= this._lastSegment[1]) this.position = 0;
        else this.position++;
        this.blocks.forEach((a, i) => a.active = this.calcActive(i));
        this.positionStyle = `-${this.position * this.blockWidthWithGap()}%`
    }

    onSwipe(event) {
        if (event.deltaX > 0) this.moveLeft();
        else this.moveRight();
    }

    calcActive(index): boolean {
        return index >= this.position && index < this.position + this.blockCount;
    }
}