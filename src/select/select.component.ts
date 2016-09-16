import {Component, Input, Output, EventEmitter, ContentChild, TemplateRef, trigger, state, style, transition, animate, ViewChild, HostListener, ElementRef, ViewEncapsulation} from '@angular/core';

const animationTime = 300;

@Component({
    encapsulation: ViewEncapsulation.None,
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
            padding: 0.5rem 1rem;
            font-size: 1.1rem;
        }
        
        .selected .wp {
            padding: 0.5rem 1rem;
        }
        
        .selection {
            position: absolute;
            width: 100%;
            background: #fff;
            top: 100%;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
        }
        
        .selection.active { border-top: 1px dashed #ccc; }
        .item { padding: 0.5rem 1rem; }
    `],
    template: `
        <div class="selected" [ngSwitch]="inSelected" (click)="toggle()">
            <div *ngSwitchCase="'selected'" class="wp"><template [ngTemplateOutlet]="selectRef" [ngOutletContext]="{item: selected, index: -1}"></template></div>
            <div *ngSwitchCase="'placeholderRef'" class="wp"><template [ngTemplateOutlet]="placeholderRef"></template></div>
            <p *ngSwitchCase="'placeholder'" class="ph">{{placeholder}}</p>   
            <p *ngSwitchCase="'none'" class="ph">Select Something</p>                    
        </div>
        <div class="selection" #selection  [@select]="animationState" [ngStyle]="style" [class.active]="animationState === 'open'">
            <div class="item" *ngFor="let item of itemsToDisplay; let i = index" (click)="select(i)">
                <template [ngTemplateOutlet]="selectRef" [ngOutletContext]="{item: item, index: i}"></template>
            </div>
        </div>
    `
})
export class SelectComponent {

    animationState: string = 'closed';
    opening: boolean = false;
    itemsToDisplay: any = [];
    itemsOriginal: any = [];
    topPosition: string = '0';

    @Input() selected: any = null;
    @Output() selectedChange: EventEmitter<any> = new EventEmitter();

    @Input() set items(it: any) {
        this.itemsOriginal = it;
        this._createDisplay();
    };
    @Input() placeholder: string = null;
    @Input() maxHeight: number = 250;

    @Output() state: EventEmitter<string> = new EventEmitter();

    @ViewChild('selection') selectionEL: any;

    @ContentChild('scListItem') selectRef: TemplateRef<any>;
    @ContentChild('scPlaceholder') placeholderRef: TemplateRef<any>;

    @HostListener('document:click', ['$event.target']) outsideClick(target) {
        if (!this._eref.nativeElement.contains(target) && this.animationState === 'open') this.toggle()
    };

    get style() { return {'max-height': this.maxHeight + 'px', 'overflow': this.opening ? 'hidden' : 'auto' } }

    get inSelected(): string {
        if (this.selected) return 'selected';
        if (this.placeholderRef) return 'placeholderRef';
        if (this.placeholder) return 'placeholder';
        return 'none'
    }

    constructor(private _eref: ElementRef) { }

    select(index: number): void {
        this.selected = this.itemsToDisplay[index];
        this.selectedChange.emit(this.selected);
        this._createDisplay(index);
        this.toggle();
    }

    toggle(): void {
        this.opening = true;
        this.animationState = this.animationState === 'closed' ? 'open' : 'closed';
        setTimeout(() => this.opening = false, animationTime);
        this.state.emit(this.animationState);
    }

    private _createDisplay(index?: number) {
        this.itemsToDisplay = this.itemsOriginal;
        // const ind = index || this.itemsOriginal.indexOf(this.selected);
        // this.itemsToDisplay = this.itemsOriginal.filter((a, i) => {
        //     if (i !== ind) return a;
        // })
    }
}