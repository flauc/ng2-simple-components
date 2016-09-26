import {
    Component, ViewChild, style, animate, transition, state, trigger, ViewContainerRef,
    ComponentFactoryResolver, ComponentFactory, Compiler, ReflectiveInjector
} from '@angular/core';
import {SlideToService} from './slide-to/slide-to.service';
import {ModalService} from 'ng2-simple-components';
import {TestComponent} from './modal-test/test.component';
import {TestModule} from './modal-test/test.module';
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
        <sc-morph-overlay>
            <template #scTrigger>
                <div class="test">
                    <h1>This is a test</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae cumque cupiditate dicta doloremque excepturi labore minus mollitia odio odit, praesentium qui recusandae, reiciendis repellat rerum similique ut veritatis voluptatibus!</p>    
                </div>
            </template>
            <template #scContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aut beatae commodi consectetur corporis dolorem doloremque exercitationem facere fuga libero mollitia, nesciunt nisi obcaecati provident quia rem velit voluptate?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem dolore doloremque nihil odit praesentium sequi tempora? Ad amet asperiores debitis, dolores inventore ipsum laudantium neque non, quasi quos recusandae!</p>
            </template>
        </sc-morph-overlay>
                <sc-morph-overlay>
            <template #scTrigger>
                <div class="test">
                    <h1>This is a test</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae cumque cupiditate dicta doloremque excepturi labore minus mollitia odio odit, praesentium qui recusandae, reiciendis repellat rerum similique ut veritatis voluptatibus!</p>    
                </div>
            </template>
            <template #scContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aut beatae commodi consectetur corporis dolorem doloremque exercitationem facere fuga libero mollitia, nesciunt nisi obcaecati provident quia rem velit voluptate?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem dolore doloremque nihil odit praesentium sequi tempora? Ad amet asperiores debitis, dolores inventore ipsum laudantium neque non, quasi quos recusandae!</p>
            </template>
        </sc-morph-overlay>
                <sc-morph-overlay>
            <template #scTrigger>
                <div class="test">
                    <h1>This is a test</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae cumque cupiditate dicta doloremque excepturi labore minus mollitia odio odit, praesentium qui recusandae, reiciendis repellat rerum similique ut veritatis voluptatibus!</p>    
                </div>
            </template>
            <template #scContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aut beatae commodi consectetur corporis dolorem doloremque exercitationem facere fuga libero mollitia, nesciunt nisi obcaecati provident quia rem velit voluptate?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem dolore doloremque nihil odit praesentium sequi tempora? Ad amet asperiores debitis, dolores inventore ipsum laudantium neque non, quasi quos recusandae!</p>
            </template>
        </sc-morph-overlay>
                <sc-morph-overlay>
            <template #scTrigger>
                <div class="test">
                    <h1>This is a test</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae cumque cupiditate dicta doloremque excepturi labore minus mollitia odio odit, praesentium qui recusandae, reiciendis repellat rerum similique ut veritatis voluptatibus!</p>    
                </div>
            </template>
            <template #scContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aut beatae commodi consectetur corporis dolorem doloremque exercitationem facere fuga libero mollitia, nesciunt nisi obcaecati provident quia rem velit voluptate?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem dolore doloremque nihil odit praesentium sequi tempora? Ad amet asperiores debitis, dolores inventore ipsum laudantium neque non, quasi quos recusandae!</p>
            </template>
        </sc-morph-overlay>
    `,
    styles: [`
        .test {
            display: block;
        }
    `]
})

export class AppComponent {


}