import {Directive, Input, Renderer, ElementRef, OnInit, ViewContainerRef, Compiler, ComponentRef} from '@angular/core';
import {TooltipModule} from './tooltip.module';
import {TooltipComponent} from './tooltip.component';

@Directive({selector: '[sc-tooltip]'})
export class TooltipDirective implements OnInit {
    constructor(
        private _el: ElementRef,
        private _vcRef: ViewContainerRef,
        private _compiler: Compiler,
        private _renderer: Renderer
    ) {}

    @Input('sc-tooltip') options: {simpleLabel: string};

    private _component: ComponentRef<TooltipComponent>;

    ngOnInit() {
        this._compiler.compileModuleAndAllComponentsAsync(TooltipModule).then(res => {
            this._component = this._vcRef.createComponent(res.componentFactories[0]);
            this._component.instance.simpleLabel = this.options.simpleLabel;
        })
    }
}