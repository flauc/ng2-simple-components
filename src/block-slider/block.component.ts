import {Component, OnInit, HostBinding} from '@angular/core';
import {BlockSliderComponent} from './block-slider.component';

@Component({
    selector: 'sc-block',
    styles: [`
        :host {
            display: inline-block;
        }
    `],
    template: `
        <ng-content></ng-content>
    `
})

export class BlockComponent implements OnInit {

    @HostBinding('style.width') get w() {
        return `${this.width}%`;
    }

    @HostBinding('style.margin-right') get m() {
        return `${this.gap}%`;
    }

    @HostBinding('class.active') active: boolean = true;

    width: number;
    gap: number;
    index: number;

    constructor(
        private _blocksSliderComp: BlockSliderComponent
    ) {}

    ngOnInit(): void {
        this.width = this._blocksSliderComp.blockWidth();
        this.index = this._blocksSliderComp.blocks.length;
        this.active = this._blocksSliderComp.calcActive(this.index);
        this.gap = this._blocksSliderComp.gap;
        this._blocksSliderComp.addBlock(this)
    }
}