import {Component, OnInit, Input, Output, EventEmitter, HostBinding, ContentChild, TemplateRef, trigger, state, style, transition, animate, ViewChild} from '@angular/core';

const animationTime = 200;

@Component({
    selector: 'sc-select',
    animations: [
        trigger('select', [
            state('closed', style({opacity: 0, visibility: 'hidden'})),
            state('open', style({opacity: 1, visibility: 'visible'})),
            transition('closed <=> open', animate(`${animationTime}ms ease-in-out`))
        ])
    ],
    styles: [`
        :host {
            display: block;
            cursor: pointer;
            position: relative;
            width: 200px;
            background: #fff;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
        }
        
        .selected .ph {
            text-align: center;
            margin: 0;
            padding: 10px 15px;
            font-size: 1.1rem;
        }
        
        .selection {
            position: absolute;
            width: 100%;
            background: #fff;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
        }
    `],
    template: `
        <div class="selected" [ngSwitch]="inSelected" (click)="toggle()">
            <div *ngSwitchCase="'selected'">
                <template [ngTemplateOutlet]="selectRef" [ngOutletContext]="{item: selected, index: -1}"></template>    
            </div>
            <div *ngSwitchCase="'placeholderRef'">
                <template [ngTemplateOutlet]="placeholderRef"></template>               
            </div>
            <div *ngSwitchCase="'placeholder'">
                <p class="ph">{{placeholder}}</p>
            </div>     
            <div *ngSwitchCase="'none'">
                <p class="ph">Select Something</p>
            </div>                     
        </div>
        <div class="selection" [@select]="animationState" [ngStyle]="{top: topPosition}" #selection>
            <div class="item" *ngFor="let item of items; let i = index" (click)="select(i)">
                <template [ngTemplateOutlet]="selectRef" [ngOutletContext]="{item: item, index: i}"></template>
            </div>
        </div>
    `
})
export class SelectComponent {

    @Input() selected: any = null;
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();

    @Input() items: any;
    @Input() placeholder: string = null;

    @ViewChild('selection') selectionEL: any;

    @ContentChild('scListItem') selectRef: TemplateRef<any>;
    @ContentChild('scPlaceholder') placeholderRef: TemplateRef<any>;

    get inSelected(): string {
        if (this.selected) return 'selected';
        if (this.placeholderRef) return 'placeholderRef';
        if (this.placeholder) return 'placeholder';
        return 'none'
    }

    animationState: string = 'closed';
    topPosition: string = '0';

    select(index: number): void {
        this.selected = this.items[index];
        this._calculateTop(index);
        this.toggle();
    }

    toggle(): void {
        this.animationState = this.animationState === 'closed' ? 'open' : 'closed';
    }

    private _calculateTop(index: number): void {
        setTimeout(() => this.topPosition = '-' + this.selectionEL.nativeElement.children[index].offsetTop + 'px', animationTime)
    }
}