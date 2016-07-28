import {
    Directive, ViewContainerRef, AfterViewInit, ComponentResolver, ComponentFactory, ComponentRef,
    ReflectiveInjector
} from '@angular/core';
import {RippleComponent} from './ripple.component';

@Directive({ selector: '[sc-ripple]' })
export class RippleDirective implements AfterViewInit {

    ref: ComponentRef<any>;

    constructor(
        private _vcr: ViewContainerRef,
        private _resolver: ComponentResolver
    ) {

    }

    ngAfterViewInit(): void {
        this._resolver.resolveComponent(RippleComponent)
            .then((factory: ComponentFactory<any>) => {
                const injector = ReflectiveInjector.fromResolvedProviders([], this._vcr.parentInjector);
                this.ref = this._vcr.createComponent(factory, 1, injector, []);
            })
    }
}