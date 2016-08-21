import {Component, OnInit, Input, Output, EventEmitter, HostBinding, ContentChild, TemplateRef, trigger, state, style, transition, animate, ViewChild, HostListener, ElementRef} from '@angular/core';

const animationTime = 300;

@Component({
    selector: 'sc-select',
    animations: [
        trigger('select', [
            state('closed', style({height: 0})),
            state('open', style({height: '*'})),
            transition('closed <=> open', animate(`${animationTime}ms cubic-bezier(.17,.67,0,1)`))
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
            overflow: auto;
            top: 100%;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
        }
        
        .selection.active {
            border-top: 1px dashed #ccc;
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
        <div class="selection" #selection  [@select]="animationState" [ngStyle]="{'max-height': styleMaxHeight}" [class.active]="animationState === 'open'">
            <div class="item" *ngFor="let item of itemsToDisplay; let i = index" (click)="select(i)">
                <template [ngTemplateOutlet]="selectRef" [ngOutletContext]="{item: item, index: i}"></template>
            </div>
        </div>
    `
})
export class SelectComponent {

    @Input() selected: any = null;
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();

    @Input() set items(it: any) {
        this.itemsOriginal = it;
        if (this.selected) this._createDisplay();
    };
    @Input() placeholder: string = null;
    @Input() maxHeight: number = 250;

    @ViewChild('selection') selectionEL: any;

    @ContentChild('scListItem') selectRef: TemplateRef<any>;
    @ContentChild('scPlaceholder') placeholderRef: TemplateRef<any>;

    @HostListener('document:click', ['$event.target']) outsideClick(target) {
        if (!this._eref.nativeElement.contains(target) && this.animationState === 'open') this.toggle()
    };

    get styleMaxHeight(): string { return this.maxHeight + 'px' }

    get inSelected(): string {
        if (this.selected) return 'selected';
        if (this.placeholderRef) return 'placeholderRef';
        if (this.placeholder) return 'placeholder';
        return 'none'
    }

    animationState: string = 'closed';
    itemsToDisplay: any = [];
    itemsOriginal: any = [];
    topPosition: string = '0';

    ngOnInit() {
        console.log('bla', this.itemsToDisplay);
    }

    constructor(private _eref: ElementRef) { }

    select(index: number): void {
        this.selected = this.itemsToDisplay[index];
        this.selectedChange.emit(this.selected);
        this._createDisplay(index);
        this.toggle();
    }

    toggle(): void {
        this.animationState = this.animationState === 'closed' ? 'open' : 'closed';
    }

    private _createDisplay(index?: number) {
        const ind = index || this.itemsOriginal.indexOf(this.selected);
        this.itemsToDisplay = this.itemsOriginal.filter((a, i) => {
            if (i !== ind) return a;
        })
    }
}