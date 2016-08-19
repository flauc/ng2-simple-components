import {Component, ViewChild, style, animate, transition, state, trigger} from '@angular/core';
import {SlideToService} from './slide-to/slide-to.service';
@Component({
    selector: 'app',
    animations: [
        trigger('anim', [
            state('reached', style({background: 'red'})),
            transition('* => reached', [
                style({background: 'blue'}),
                animate('300ms ease-in-out', style({background: 'red'}))
            ])
        ])
    ],
    template: `
        <button (click)="goTo(slide)">bla</button>
        <div class="block-slider">
            <sc-block-slider [height]="300" [blockCount]="3">
                <sc-block>
                    <p>Test-1</p>
                </sc-block>
               <sc-block>
                    <p>Test-2</p>
                </sc-block>
                <sc-block>
                    <p>Test-3</p>
                </sc-block>    
                 <sc-block>
                    <p>Test-4</p>
                </sc-block>                    
                <sc-block>
                    <p>Test-5</p>
                </sc-block>                    
                <sc-block>
                    <p>Test-6</p>
                </sc-block>    
            </sc-block-slider>
        </div>

        <div class="tabs">
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
        </div>
        
        <div class="accordion">
            <sc-accordion [singleActive]="true">
                <sc-accord title="test-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, atque aut autem eaque earum eos eum, ex expedita officia provident quis quo sequi similique ullam veritatis voluptas, voluptates. Deserunt?</p>  
                </sc-accord>
                <sc-accord title="test-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, atque aut autem eaque earum eos eum, ex expedita officia provident quis quo sequi similique ullam veritatis voluptas, voluptates. Deserunt?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, atque aut autem eaque earum eos eum, ex expedita officia provident quis quo sequi similique ullam veritatis voluptas, voluptates. Deserunt?</p>
                </sc-accord>
                <sc-accord title="test-3" [active]="true">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, atque aut autem eaque earum eos eum, ex expedita officia provident quis quo sequi similique ullam veritatis voluptas, voluptates. Deserunt?</p>
                </sc-accord>
            </sc-accordion>
        </div>
        
        <!--<div class="slideToTest"-->
            <!--#slide-->
            <!--[@anim]="slide.animationState" -->
            <!--(click)="slide.animationState = 'reached'"-->
            <!--scAnimation -->
            <!--[refEl]="slide">-->
        <!--</div>-->
        <!---->
        <!--<div class="slideToTest green"></div>-->
        <!--<div class="slideToTest green"></div>-->
        <!--<div class="slideToTest green"></div>-->
    `,
    styles: [`

        .block-slider {
            float: left;
            width: 100%;
            margin: 50px 0;
        }

        .tabs {
            width: 500px;
            float: left;
        }
        
        .accordion {
            margin-top: 50px;
            width: 100%;
            float: left;
        }
        
        .slideToTest {
            height: 500px;
            width: 100%;
            background: #0000AA;
            float: left;
        }
        
        .green {
            background: green;
        }
    `]
})

export class AppComponent {
    constructor(
        private _slide: SlideToService
    ) {}

    goTo(el) {
        this._slide.toElement(el);
    }
}