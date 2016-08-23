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
                            <sc-accord title="HTML">
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
                            <sc-accord title="HTML">
                                <pre class="language-html"><code class="language-html" [innerHTML]="accord.one"></code></pre>
                            </sc-accord>    
                        </sc-accordion>                            
                    </div> 
                </div>            
            </section>
            <section>
                <h2 class="section-title">Block Slider</h2>
                 <div class="inner-wrapper">
                    <div class="example">
                        <h3>Basic Example</h3>
                        <p class="ex">When creating a block slider you should define a height of the element in your style (take a look at the sass code)</p>
                        <sc-accordion>
                            <sc-accord title="Example" [active]="true" [locked]="true">
                                <div class="example-inner">
                                    <sc-block-slider [blockCount]="3" class="block-example-1">
                                        <sc-block *ngFor="let product of bco">
                                            <div class="img-wrapper">
                                                <img [src]="product.img" alt="">
                                            </div>
                                            <p>{{product.p}}</p>
                                        </sc-block>
                                    </sc-block-slider>                           
                                </div>
                            </sc-accord>
                            <sc-accord title="JS">
                                <pre class="language-javascript"><code class="language-javascript" [innerHTML]="block.one.js"></code></pre>
                            </sc-accord>    
                           <sc-accord title="HTML">
                                <pre class="language-html"><code class="language-html" [innerHTML]="block.one.html"></code></pre>
                            </sc-accord>  
                           <sc-accord title="SASS">
                                <pre class="language-scss"><code class="language-scss" [innerHTML]="block.one.scss"></code></pre>
                            </sc-accord>  
                        </sc-accordion>                             
                    </div>
                 </div>   
            </section>
            <section>
                <h2 class="section-title">Select</h2>
                 <div class="inner-wrapper">
                    <div class="example">
                        <h3>Basic Example</h3>
                        <p class="ex">It's very easy to create a custom select. You only need to provide a template and style it with css.</p>
                        <sc-accordion>
                            <sc-accord title="Example" [active]="true" [locked]="true">
                                <div class="example-inner">
                                    <sc-select [items]="scItems" [(selected)]="selectedItem">
                                        <template #scPlaceholder>
                                            <img src="assets/img/select/astronaut.svg">
                                            <h1>John Doe</h1>
                                            <p>I'm a cool guy</p>
                                        </template>
                                        <template #scListItem let-item="item">
                                            <div class="wrapper">
                                                <img [src]="item.img">
                                                <h1>{{item.name}}</h1>
                                                <p>{{item.about}}</p>
                                            </div>
                                        </template>
                                    </sc-select>                       
                                </div>
                            </sc-accord>
                            <sc-accord title="JS">
                                <pre class="language-javascript"><code class="language-javascript" [innerHTML]="select.one.js"></code></pre>
                            </sc-accord>    
                           <sc-accord title="HTML">
                                <pre class="language-html"><code class="language-html" [innerHTML]="select.one.html"></code></pre>
                            </sc-accord>  
                           <sc-accord title="SASS">
                                <pre class="language-scss"><code class="language-scss" [innerHTML]="select.one.scss"></code></pre>
                            </sc-accord>  
                        </sc-accordion>                             
                    </div>
                 </div>   
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

    bco = [
        {
            img: 'ng2-simple-components/assets/img/product-1.jpg',
            p: 'Product 1'
        },
        {
            img: 'ng2-simple-components/assets/img/product-2.jpg',
            p: 'Product 2'
        },
        {
            img: 'ng2-simple-components/assets/img/product-3.jpg',
            p: 'Product 3'
        },
        {
            img: 'ng2-simple-components/assets/img/product-4.jpg',
            p: 'Product 4'
        },
        {
            img: 'ng2-simple-components/assets/img/product-5.jpg',
            p: 'Product 5'
        },
    ];

    block = {
        one: {
            html: `<sc-block-slider [blockCount]="3" class="block-example-1">
    <sc-block *ngFor="let product of bco">
        <div class="img-wrapper">
            <img [src]="product.img" alt="">
        </div>
        <p>{{product.p}}</p>
    </sc-block>
</sc-block-slider>`,
            js: `bco = [
    {
        img: 'assets/img/product-1.jpg',
        p: 'Product 1'
    },
    {
        img: 'assets/img/product-2.jpg',
        p: 'Product 2'
    },
    {
        img: 'assets/img/product-3.jpg',
        p: 'Product 3'
    },
    {
        img: 'assets/img/product-4.jpg',
        p: 'Product 4'
    },
    {
        img: 'assets/img/product-5.jpg',
        p: 'Product 5'
    },
]`,
            scss: `.block-example-1 {
  height: 250px;
  background: #fff;

  .img-wrapper {
    padding: 20px;
    box-sizing: border-box;
    height: 200px;
    text-align: center;

    img {
      height: 100%;
      width: auto;
    }
  }

  p {
    text-align: center;
  }
}`
        }
    };

    select = {
        one: {
            html: `<sc-select [items]="scItems" [(selected)]="selectedItem">
    <template #scPlaceholder>
        <img src="assets/img/select/astronaut.svg">
        <h1>John Doe</h1>
        <p>I'm a cool guy</p>
    </template>
    <template #scListItem let-item="item">
        <div class="wrapper">
            <img [src]="item.img">
            <h1>{{item.name}}</h1>
            <p>{{item.about}}</p>
        </div>
    </template>
</sc-select>`,
            js: `scItems = [
    {
        img: 'assets/img/select/doctor.svg',
        name: 'Tony Stark',
        about: 'Im a cool guy'
    },
    {
        img: 'assets/img/select/detective.svg',
        name: 'Mr. Smith',
        about: 'Im a cool guy'
    }
]`,
            scss: `sc-select {
  .wrapper {
    height: 70px;

    img {
      height: 100%;
      width: auto;
      padding: 5px;
      float: left;
    }

    h1 {
      margin: 0;
      padding-top: 15px;
      padding-left: 80px;
      font-size: 18px;
    }

    p {
      padding-left: 80px;
    }
  }
}`
        }
    };

    scItems = [
        {
            img: 'assets/img/select/doctor.svg',
            name: 'Tony Stark',
            about: `I'm a cool guy`
        },
        {
            img: 'assets/img/select/detective.svg',
            name: 'Mr. Smith',
            about: `I'm a cool guy`
        }
    ];
    selectedItem = this.scItems[0];

    ngOnInit(): void {
        this.tabs.one = Prism.highlight(this.tabs.one, Prism.languages.markup);
        this.accord.one = Prism.highlight(this.accord.one, Prism.languages.markup);
        this.block.one.html = Prism.highlight(this.block.one.html, Prism.languages.markup);
        this.block.one.js = Prism.highlight(this.block.one.js, Prism.languages.javascript);
        this.block.one.scss = Prism.highlight(this.block.one.scss, Prism.languages.css);
        this.select.one.html = Prism.highlight(this.select.one.html, Prism.languages.markup);
        this.select.one.js = Prism.highlight(this.select.one.js, Prism.languages.javascript);
        this.select.one.scss = Prism.highlight(this.select.one.scss, Prism.languages.css);
    }
}