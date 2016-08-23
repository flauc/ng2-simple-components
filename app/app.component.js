"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.tabs = {
            one: "<sc-tabs>\n    <sc-tab title=\"Tab 1\" [active]=\"true\">\n        <h1>Tab 1</h1>\n        <p>Lorem...</p>\n    </sc-tab>\n    <sc-tab title=\"Tab 2\">\n        <h1>Tab 2</h1>\n        <p>Lorem...</p>\n        <p>Lorem...</p>\n        <p>Lorem...</p>\n    </sc-tab>\n    <sc-tab title=\"Tab 3\">\n        <h1>Tab 3</h1>\n        <p>Lorem...</p>\n    </sc-tab>                             \n</sc-tabs>"
        };
        this.accord = {
            one: "<sc-accordion [singleActive]=\"true\">\n    <sc-accord title=\"Accord 1\" [active]=\"true\">\n        <p>Lorem...</p>\n    </sc-accord>\n    <sc-accord title=\"Accord 2\">\n        <p>Lorem...</p>\n    </sc-accord>\n    <sc-accord title=\"Accord 3\">\n        <p>Lorem...</p>\n    </sc-accord>\n</sc-accordion>"
        };
        this.bco = [
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
        this.block = {
            one: {
                html: "<sc-block-slider [blockCount]=\"3\" class=\"block-example-1\">\n    <sc-block *ngFor=\"let product of bco\">\n        <div class=\"img-wrapper\">\n            <img [src]=\"product.img\" alt=\"\">\n        </div>\n        <p>{{product.p}}</p>\n    </sc-block>\n</sc-block-slider>",
                js: "bco = [\n    {\n        img: 'assets/img/product-1.jpg',\n        p: 'Product 1'\n    },\n    {\n        img: 'assets/img/product-2.jpg',\n        p: 'Product 2'\n    },\n    {\n        img: 'assets/img/product-3.jpg',\n        p: 'Product 3'\n    },\n    {\n        img: 'assets/img/product-4.jpg',\n        p: 'Product 4'\n    },\n    {\n        img: 'assets/img/product-5.jpg',\n        p: 'Product 5'\n    },\n]",
                scss: ".block-example-1 {\n  height: 250px;\n  background: #fff;\n\n  .img-wrapper {\n    padding: 20px;\n    box-sizing: border-box;\n    height: 200px;\n    text-align: center;\n\n    img {\n      height: 100%;\n      width: auto;\n    }\n  }\n\n  p {\n    text-align: center;\n  }\n}"
            }
        };
        this.select = {
            one: {
                html: "<sc-select [items]=\"scItems\" [(selected)]=\"selectedItem\">\n    <template #scPlaceholder>\n        <img src=\"assets/img/select/astronaut.svg\">\n        <h1>John Doe</h1>\n        <p>I'm a cool guy</p>\n    </template>\n    <template #scListItem let-item=\"item\">\n        <div class=\"wrapper\">\n            <img [src]=\"item.img\">\n            <h1>{{item.name}}</h1>\n            <p>{{item.about}}</p>\n        </div>\n    </template>\n</sc-select>",
                js: "scItems = [\n    {\n        img: 'assets/img/select/doctor.svg',\n        name: 'Tony Stark',\n        about: 'Im a cool guy'\n    },\n    {\n        img: 'assets/img/select/detective.svg',\n        name: 'Mr. Smith',\n        about: 'Im a cool guy'\n    }\n]",
                scss: "sc-select {\n  .wrapper {\n    height: 70px;\n\n    img {\n      height: 100%;\n      width: auto;\n      padding: 5px;\n      float: left;\n    }\n\n    h1 {\n      margin: 0;\n      padding-top: 15px;\n      padding-left: 80px;\n      font-size: 18px;\n    }\n\n    p {\n      padding-left: 80px;\n    }\n  }\n}"
            }
        };
        this.scItems = [
            {
                img: 'assets/img/select/doctor.svg',
                name: 'Tony Stark',
                about: "I'm a cool guy"
            },
            {
                img: 'assets/img/select/detective.svg',
                name: 'Mr. Smith',
                about: "I'm a cool guy"
            }
        ];
        this.selectedItem = this.scItems[0];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.tabs.one = Prism.highlight(this.tabs.one, Prism.languages.markup);
        this.accord.one = Prism.highlight(this.accord.one, Prism.languages.markup);
        this.block.one.html = Prism.highlight(this.block.one.html, Prism.languages.markup);
        this.block.one.js = Prism.highlight(this.block.one.js, Prism.languages.javascript);
        this.block.one.scss = Prism.highlight(this.block.one.scss, Prism.languages.css);
        this.select.one.html = Prism.highlight(this.select.one.html, Prism.languages.markup);
        this.select.one.js = Prism.highlight(this.select.one.js, Prism.languages.javascript);
        this.select.one.scss = Prism.highlight(this.select.one.scss, Prism.languages.css);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sc-app',
            template: "\n        <div class=\"container\">\n            <h1 class=\"title\">Ng2 Simple Components</h1>\n            <section>\n                <h2 class=\"section-title\">Tabs</h2>\n                <div class=\"inner-wrapper\">\n                    <div class=\"example\">\n                        <h3>Basic Example</h3>\n                        <sc-accordion>\n                            <sc-accord title=\"Example\" [active]=\"true\" [locked]=\"true\">\n                                <div class=\"example-inner\">\n                                    <sc-tabs>\n                                        <sc-tab title=\"Tab 1\" [active]=\"true\">\n                                            <h1>Tab 1</h1>\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>\n                                        </sc-tab>\n                                        <sc-tab title=\"Tab 2\">\n                                            <h1>Tab 2</h1>\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dignissimos earum excepturi fugiat minima molestias quibusdam reprehenderit tenetur. Ducimus explicabo facilis ipsam, pariatur reiciendis tempore unde vel voluptate!</p>\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aut deserunt dicta fugit iste laboriosam pariatur veniam, voluptate voluptatem! Adipisci commodi consectetur dolores expedita facere nobis odit reprehenderit veritatis?</p>\n                                        </sc-tab>\n                                        <sc-tab title=\"Tab 3\">\n                                            <h1>Tab 3</h1>\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>\n                                        </sc-tab>                             \n                                    </sc-tabs>\n                                </div>   \n                            </sc-accord>\n                            <sc-accord title=\"HTML\">\n                                <pre class=\"language-html\"><code class=\"language-html\" [innerHTML]=\"tabs.one\"></code></pre>\n                            </sc-accord>\n                        </sc-accordion>     \n                    </div>                    \n                </div>   \n            </section>        \n            <section>\n                <h2 class=\"section-title\">Accordion</h2>\n                <div class=\"inner-wrapper\">\n                    <div class=\"example\">\n                        <h3>Basic Example</h3>\n                        <sc-accordion>\n                            <sc-accord title=\"Example\" [active]=\"true\" [locked]=\"true\">\n                                <div class=\"example-inner\">\n                                    <sc-accordion [singleActive]=\"true\">\n                                        <sc-accord title=\"Accord 1\" [active]=\"true\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, debitis delectus eius esse eum in modi nemo quae quaerat recusandae rem sequi sunt vel veritatis voluptates? At debitis nisi nobis?</p>\n                                        </sc-accord>\n                                        <sc-accord title=\"Accord 2\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, debitis delectus eius esse eum in modi nemo quae quaerat recusandae rem sequi sunt vel veritatis voluptates? At debitis nisi nobis?</p>\n                                        </sc-accord>\n                                        <sc-accord title=\"Accord 3\">\n                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, debitis delectus eius esse eum in modi nemo quae quaerat recusandae rem sequi sunt vel veritatis voluptates? At debitis nisi nobis?</p>\n                                        </sc-accord>\n                                    </sc-accordion>                        \n                                </div>\n                            </sc-accord>\n                            <sc-accord title=\"HTML\">\n                                <pre class=\"language-html\"><code class=\"language-html\" [innerHTML]=\"accord.one\"></code></pre>\n                            </sc-accord>    \n                        </sc-accordion>                            \n                    </div> \n                </div>            \n            </section>\n            <section>\n                <h2 class=\"section-title\">Block Slider</h2>\n                 <div class=\"inner-wrapper\">\n                    <div class=\"example\">\n                        <h3>Basic Example</h3>\n                        <p class=\"ex\">When creating a block slider you should define a height of the element in your style (take a look at the sass code)</p>\n                        <sc-accordion>\n                            <sc-accord title=\"Example\" [active]=\"true\" [locked]=\"true\">\n                                <div class=\"example-inner\">\n                                    <sc-block-slider [blockCount]=\"3\" class=\"block-example-1\">\n                                        <sc-block *ngFor=\"let product of bco\">\n                                            <div class=\"img-wrapper\">\n                                                <img [src]=\"product.img\" alt=\"\">\n                                            </div>\n                                            <p>{{product.p}}</p>\n                                        </sc-block>\n                                    </sc-block-slider>                           \n                                </div>\n                            </sc-accord>\n                            <sc-accord title=\"JS\">\n                                <pre class=\"language-javascript\"><code class=\"language-javascript\" [innerHTML]=\"block.one.js\"></code></pre>\n                            </sc-accord>    \n                           <sc-accord title=\"HTML\">\n                                <pre class=\"language-html\"><code class=\"language-html\" [innerHTML]=\"block.one.html\"></code></pre>\n                            </sc-accord>  \n                           <sc-accord title=\"SASS\">\n                                <pre class=\"language-scss\"><code class=\"language-scss\" [innerHTML]=\"block.one.scss\"></code></pre>\n                            </sc-accord>  \n                        </sc-accordion>                             \n                    </div>\n                 </div>   \n            </section>\n            <section>\n                <h2 class=\"section-title\">Select</h2>\n                 <div class=\"inner-wrapper\">\n                    <div class=\"example\">\n                        <h3>Basic Example</h3>\n                        <p class=\"ex\">It's very easy to create a custom select. You only need to provide a template and style it with css.</p>\n                        <sc-accordion>\n                            <sc-accord title=\"Example\" [active]=\"true\" [locked]=\"true\">\n                                <div class=\"example-inner\">\n                                    <sc-select [items]=\"scItems\" [(selected)]=\"selectedItem\">\n                                        <template #scPlaceholder>\n                                            <img src=\"assets/img/select/astronaut.svg\">\n                                            <h1>John Doe</h1>\n                                            <p>I'm a cool guy</p>\n                                        </template>\n                                        <template #scListItem let-item=\"item\">\n                                            <div class=\"wrapper\">\n                                                <img [src]=\"item.img\">\n                                                <h1>{{item.name}}</h1>\n                                                <p>{{item.about}}</p>\n                                            </div>\n                                        </template>\n                                    </sc-select>                       \n                                </div>\n                            </sc-accord>\n                            <sc-accord title=\"JS\">\n                                <pre class=\"language-javascript\"><code class=\"language-javascript\" [innerHTML]=\"select.one.js\"></code></pre>\n                            </sc-accord>    \n                           <sc-accord title=\"HTML\">\n                                <pre class=\"language-html\"><code class=\"language-html\" [innerHTML]=\"select.one.html\"></code></pre>\n                            </sc-accord>  \n                           <sc-accord title=\"SASS\">\n                                <pre class=\"language-scss\"><code class=\"language-scss\" [innerHTML]=\"select.one.scss\"></code></pre>\n                            </sc-accord>  \n                        </sc-accordion>                             \n                    </div>\n                 </div>   \n            </section>            \n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map