import {Component, OnInit} from '@angular/core';

declare const Prism: any;

@Component({
    selector: 'sc-app',
    template: `
        <div class="container">
            <h1 class="title">Ng2 Simple Components</h1>
            <section>
                <h2 class="section-title">Tabs</h2>
                <div class="inner-wrapper">
                    <div class="example">
                        <h3>Basic Example</h3>
                        <sc-accordion>
                            <sc-accord title="Example" [active]="true" [locked]="true">
                                <div class="example-inner">
                                    <sc-tabs>
                                        <sc-tab title="Tab 1" [active]="true">
                                            <h1>Tab 1</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
                                        </sc-tab>
                                        <sc-tab title="Tab 2">
                                            <h1>Tab 2</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dignissimos earum excepturi fugiat minima molestias quibusdam reprehenderit tenetur. Ducimus explicabo facilis ipsam, pariatur reiciendis tempore unde vel voluptate!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aut deserunt dicta fugit iste laboriosam pariatur veniam, voluptate voluptatem! Adipisci commodi consectetur dolores expedita facere nobis odit reprehenderit veritatis?</p>
                                        </sc-tab>
                                        <sc-tab title="Tab 3">
                                            <h1>Tab 3</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
                                        </sc-tab>                             
                                    </sc-tabs>
                                </div>   
                            </sc-accord>
                            <sc-accord title="Code">
                                <pre class="language-html"><code class="language-html" [innerHTML]="tabs.one"></code></pre>
                            </sc-accord>
                        </sc-accordion>     
                    </div>                    
                </div>   
            </section>        
            <section>
                <h2 class="section-title">Accordion</h2>
                <div class="inner-wrapper">
                    <div class="example">
                        <h3>Basic Example</h3>
                        <sc-accordion>
                            <sc-accord title="Example" [active]="true" [locked]="true">
                                <div class="example-inner">
                                    <sc-accordion [singleActive]="true">
                                        <sc-accord title="Accord 1" [active]="true">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, debitis delectus eius esse eum in modi nemo quae quaerat recusandae rem sequi sunt vel veritatis voluptates? At debitis nisi nobis?</p>
                                        </sc-accord>
                                        <sc-accord title="Accord 2">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, debitis delectus eius esse eum in modi nemo quae quaerat recusandae rem sequi sunt vel veritatis voluptates? At debitis nisi nobis?</p>
                                        </sc-accord>
                                        <sc-accord title="Accord 3">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, debitis delectus eius esse eum in modi nemo quae quaerat recusandae rem sequi sunt vel veritatis voluptates? At debitis nisi nobis?</p>
                                        </sc-accord>
                                    </sc-accordion>                        
                                </div>
                            </sc-accord>
                            <sc-accord title="Code">
                                <pre class="language-html"><code class="language-html" [innerHTML]="accord.one"></code></pre>
                            </sc-accord>    
                        </sc-accordion>                            
                    </div> 
                </div>            
            </section>
            <section>
                <h2 class="section-title">Block Slider</h2>
            </section>
        </div>
    `
})

export class AppComponent implements OnInit {

    tabs = {
        one: `<sc-tabs>
    <sc-tab title="Tab 1" [active]="true">
        <h1>Tab 1</h1>
        <p>Lorem...</p>
    </sc-tab>
    <sc-tab title="Tab 2">
        <h1>Tab 2</h1>
        <p>Lorem...</p>
        <p>Lorem...</p>
        <p>Lorem...</p>
    </sc-tab>
    <sc-tab title="Tab 3">
        <h1>Tab 3</h1>
        <p>Lorem...</p>
    </sc-tab>                             
</sc-tabs>`
    };

    accord = {
        one: `<sc-accordion [singleActive]="true">
    <sc-accord title="Accord 1" [active]="true">
        <p>Lorem...</p>
    </sc-accord>
    <sc-accord title="Accord 2">
        <p>Lorem...</p>
    </sc-accord>
    <sc-accord title="Accord 3">
        <p>Lorem...</p>
    </sc-accord>
</sc-accordion>`
    };

    ngOnInit(): void {
        this.tabs.one = Prism.highlight(this.tabs.one, Prism.languages.markup);
        this.accord.one = Prism.highlight(this.accord.one, Prism.languages.markup)
    }
}