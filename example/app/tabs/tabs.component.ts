import {Component} from '@angular/core';
import {TabComponent} from './tab.component';

@Component({
    selector: 'sc-tabs',
    template: `
        <div class="tab-nav">
          <div class="col" 
            *ngFor="let tab of tabs"
            [class.disabled]="tab.disabled"
            [class.active]="tab.active"
            [ngStyle]="{flex: tabs.length}" 
            (click)="selectTab(tab, i)">
                {{tab.title}}
            </div>
            <div class="indicator" [ngStyle]="indicatorStyle()"></div>
        </div>
        <div class="tab-content">
            <ng-content></ng-content>
        </div>
  `,
    styles: [`
        :host {
            width: 100%;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
            display: block;
            border: 1px solid rgba(0, 0, 0, 0.12);
            box-sizing: border-box;
            color: #212121;
        }
        
        .tab-nav {
            display: flex;
            position: relative;
            background: #fff;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            width: 100%;
        }
        
        .indicator {
            position: absolute;
            bottom: 0;
            height: 2px;
            background-color: #8BC34A;
            will-change: left, right;
            transition: all 0.2s ease-in-out;
        }
        
        .col {
            text-align: center;
            padding: 1rem 0.5rem;
            cursor: pointer;
            text-transform: uppercase;
        }
        
        .col.disabled {
            cursor: default;
            color: #d6d6d6;
        }
        
        .col.active {
            color: #8BC34A;
        }
        
        .tab-content {
            background: #F6F6F6;
            min-height: 0;
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            bottom: auto;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
        }
    `]
})
export class TabsComponent {
    tabs: TabComponent[] = [];

    selectTab(tab: TabComponent) {
        if (tab.disabled) return;

        let oldActive = this.tabs.findIndex(a => a.act),
            direction = tab.position > oldActive ? 'Left' : 'Right';

        this.tabs.forEach(tab => tab.act = false);
        tab.act = true;



        // Animate
        tab.animate = 'enter' + direction;
        this.tabs[oldActive].animate = 'leave' + direction;
    }

    addTab(tab: TabComponent) {
        this.tabs.push(tab);
    }

    indicatorStyle() {

        let active = this.tabs.findIndex(a => a.act),
            percent = 100 / this.tabs.length,
            style = {width: percent + '%'};

        if (active) {
            if (active === this.tabs.length) style['right'] = 0;
            else style['left'] = percent * active + '%'
        }

        else style['left'] = '0';

        return style;
    }
}
