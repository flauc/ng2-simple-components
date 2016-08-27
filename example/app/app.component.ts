import {
    Component, ViewChild, style, animate, transition, state, trigger, ViewContainerRef,
    ComponentFactoryResolver, ComponentFactory, Compiler, ReflectiveInjector
} from '@angular/core';
import {SlideToService} from './slide-to/slide-to.service';
import {ModalService} from 'ng2-simple-components';
import {TestComponent} from './modal-test/test.component';
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
            <sc-block-slider [blockCount]="3">
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
                <sc-accord title="test-1" [locked]="true" [active]="true">
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
        
        <div class="select">
            <sc-select [items]="scItems" [(selected)]="selectedItem">
                <!--<template #scPlaceholder>-->
                    <!--<p>Bla</p>-->
                <!--</template>-->
                <template #scListItem let-item="item">
                    <h1>{{item.p}}</h1>
                    <p>{{item.proba}}</p>
                </template>
            </sc-select>
        </div>
        
        <button (click)="create()">Bla</button>
        
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
            height: 300px;
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
        
        .select {
            margin: 250px 0;
            width: 100%;
            float: left;
        }
    `]
})

export class AppComponent {

    scItems: any = [
        {
            p: 'test-1',
            proba: 'blabla'
        },
        {
            p: 'test-2',
            proba: 'blabla'
        },
        {
            p: 'test-3',
            proba: 'blabla'
        },
        {
            p: 'test-3',
            proba: 'blabla'
        },
        {
            p: 'test-3',
            proba: 'blabla'
        },
        {
            p: 'test-3',
            proba: 'blabla'
        },
        {
            p: 'test-3',
            proba: 'blabla'
        }
    ];
    selectedItem = this.scItems[0];

    constructor(
        private _slide: SlideToService,
        private _modal: ModalService,
        private _vr: ViewContainerRef,
        private _resolver: ComponentFactoryResolver,
        private _comp: Compiler
    ) {}

    ngOnInit() {
        this._modal.vc(this._vr)
    }

    goTo(el) {
        this._slide.toElement(el);
    }

    create() {
        this._modal.withComp(TestComponent, {test: '123'})
    }
}