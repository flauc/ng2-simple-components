import {Component} from '@angular/core';
import {TabsComponent} from './tabs/tabs.component';
import {TabComponent} from './tabs/tab.component';

@Component({
    selector: 'app',
    directives: [TabsComponent, TabComponent],
    template: `
        <sc-tabs>
            <sc-tab title="test-1" [active]="true">
                <h1>Test 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
            </sc-tab>
            <sc-tab title="test-2">
                <h1>Test 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dignissimos earum excepturi fugiat minima molestias quibusdam reprehenderit tenetur. Ducimus explicabo facilis ipsam, pariatur reiciendis tempore unde vel voluptate!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aut deserunt dicta fugit iste laboriosam pariatur veniam, voluptate voluptatem! Adipisci commodi consectetur dolores expedita facere nobis odit reprehenderit veritatis?</p>
            </sc-tab>
            <sc-tab title="test-3">
                <h1>Test 3</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
            </sc-tab>            
        </sc-tabs>
    `,
    styles: [`
        :host {
            width: 500px;
            float: left;
        }
    `]
})

export class AppComponent {

}