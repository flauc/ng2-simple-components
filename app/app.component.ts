import {Component} from '@angular/core';

@Component({
    selector: 'sc-app',
    template: `
        <div class="container">
            <h1 class="title">Ng2 Simple Components</h1>
        </div>
        <section>
            <h1 class="section-title">Tabs</h1>
            <div class="example">
                <sc-accordion>
                    <sc-accord title="Example" [active]="true">
                        <div class="example-inner">
                            <sc-tab title="Tab 1" [active]="true">
                                <h1>Test 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
                            </sc-tab>
                            <sc-tab title="Tab 2">
                                <h1>Test 2</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dignissimos earum excepturi fugiat minima molestias quibusdam reprehenderit tenetur. Ducimus explicabo facilis ipsam, pariatur reiciendis tempore unde vel voluptate!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aut deserunt dicta fugit iste laboriosam pariatur veniam, voluptate voluptatem! Adipisci commodi consectetur dolores expedita facere nobis odit reprehenderit veritatis?</p>
                            </sc-tab>
                            <sc-tab title="Tab 3">
                                <h1>Test 3</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
                            </sc-tab> 
                        </div>   
                    </sc-accord>
                    <sc-accord title="Code">
                        <pre>
                                                             
                        </pre>
                    </sc-accord>
                </sc-accordion>     
            </div>       
        </section>
    `
})

export class AppComponent {}