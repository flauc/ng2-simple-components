import {Component, OnInit, Input, ElementRef, HostBinding} from '@angular/core';
import {BlockComponent} from './block.component';


@Component({
    selector: 'sc-block-slider',
    styles: [`
        :host {
            display: block;
            width: 100%;
            position: relative;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
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
        
        .block-wrapper {
            width: 90%;
            display: block;
            margin: 0 5%;
            height: 100%;
            position: relative;
            overflow: hidden;
        }
        
        .slide-wrapper {
            width: 100%;
            position: absolute;
            top: 0;
            transition: all 0.3s ease-in-out;
            left: 0;
            height: 100%;
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
        <div class="block-wrapper">
            <div class="slide-wrapper" [style.left]="positionStyle" [ngStyle]="{'width': blockWidth() * blockCount + '%'}">
                <ng-content></ng-content>
            </div>
        </div>
    `
})

export class BlockSliderComponent implements OnInit {

    @Input() blockCount: number = 4;
    @Input() height: number = 400;
    @Input() startingPosition: number = 0;


    @HostBinding('style.height') get h() {
        return `${this.height}px`
    }

    blocks: BlockComponent[] = [];

    position: number = 0;
    positionStyle: string = '0';

    private _segments: number;
    private _lastSegment: [number, number];

    ngOnInit(): void {
        this.position = this.startingPosition;
        this.positionStyle = `-${this.position * this.blockWidth()}%`
    }

    blockWidth(): number {
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
        this.positionStyle = `-${this.position * this.blockWidth()}%`
    }

    moveRight() {
        if (this.position >= this._lastSegment[0] && this.position <= this._lastSegment[1]) this.position = 0;
        else this.position++;
        this.positionStyle = `-${this.position * this.blockWidth()}%`
    }
}