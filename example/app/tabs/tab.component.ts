import {
    Input, Component, trigger, state, style, transition, animate, ElementRef, ViewChild,
    OnInit
} from '@angular/core';
import {TabsComponent} from './tabs.component';

@Component({
    selector: 'sc-tab',
    template: `
        <div #content class="content" @anim="animate">
          <ng-content></ng-content>
        </div>
    `,
    animations: [
        trigger('anim', [
            state('default', style({position: 'absolute', opacity: 0})),
            state('first', style({position: 'relative', opacity: 1})),

            state('leaveLeft', style({position: 'absolute', opacity: 0})),
            state('leaveRight', style({position: 'absolute', opacity: 0})),

            state('enterRight', style({position: 'relative', opacity: 1})),
            state('enterLeft', style({position: 'relative', opacity: 1})),

            transition('* => enterRight', [
                style({transform: 'translateX(-100%)', opacity: 0}),
                animate('300ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
            ]),

            transition('* => enterLeft', [
                style({transform: 'translateX(100%)', opacity: 0}),
                animate('300ms ease-in-out', style({transform: 'translateX(0)', opacity: 1}))
            ]),

            transition('* => leaveLeft', [
                style({transform: 'translateX(0)', opacity: 1}),
                animate('300ms ease-in-out', style({transform: 'translateX(-100%)', opacity: 0}))
            ]),

            transition('* => leaveRight', [
                style({transform: 'translateX(0)', opacity: 1}),
                animate('300ms ease-in-out', style({transform: 'translateX(100%)', opacity: 0}))
            ]),
        ])
    ],
    styles: [`
        .content {
            display: block;
            opacity: 0;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 1rem;
        }
    `]
})
export class TabComponent implements OnInit {

    @ViewChild('content') contentEl;

    @Input() set active(act: boolean) {
        this.act = act;
        if (act) {
            this.animate = 'first';
            this.tabsComp.setStyle(this.contentEl.nativeElement.offsetHeight);
        }
    };

    @Input() title: string;
    @Input() disabled: boolean;

    act: boolean = false;
    animate: string = 'default';
    position: number;
    height: number;

    constructor(
        private tabsComp: TabsComponent
    ) {}

    ngOnInit(): void {
        // TODO: Change this when there is a better implementation
        this.height = this.contentEl.nativeElement.offsetHeight;
        this.position = this.tabsComp.tabs.length;
        this.tabsComp.addTab(this);
    }
}