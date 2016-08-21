import {
    Component, OnInit, Input, Output, EventEmitter, HostBinding, ContentChild, TemplateRef,
    trigger, state, style, transition, animate
} from '@angular/core';

@Component({
    selector: 'sc-select',
    animations: [
        trigger('select', [
            state('closed', style({opacity: 0, visibility: 'hidden'})),
            state('open', style({opacity: 1, visibility: 'visible'})),
            transition('closed <=> open', animate('200ms ease-in-out'))
        ])
    ],
    template: `
        <div class="selected" [ngSwitch]="inSelected" (click)="toggle()">
            <div *ngSwitchCase="'selected'">
                <template [ngTemplateOutlet]="selectRef" [ngOutletContext]="{item: selected, index: -1}"></template>    
            </div>
            <div *ngSwitchCase="'placeholderRef'">
                <template [ngTemplateOutlet]="placeholderRef"></template>               
            </div>
            <div *ngSwitchCase="'placeholder'">
                <p>{{placeholder}}</p>
            </div>     
            <div *ngSwitchCase="'none'">
                <p>Select Something</p>
            </div>                     
        </div>
        <div class="selection" [@select]="animationState">
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

    @ContentChild('scListItem') selectRef: TemplateRef<any>;
    @ContentChild('scPlaceholder') placeholderRef: TemplateRef<any>;

    get inSelected(): string {
        if (this.selected) return 'selected';
        if (this.placeholderRef) return 'placeholderRef';
        if (this.placeholder) return 'placeholder';
        return 'none'
    }

    animationState: string = 'closed';

    select(index: number): void {
        this.selected = this.items[index];
        this.toggle();
    }

    toggle(): void {
        this.animationState = this.animationState === 'closed' ? 'open' : 'closed';
    }
}