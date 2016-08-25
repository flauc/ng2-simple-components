import {Injectable, ViewContainerRef, Compiler} from '@angular/core';
import {ModalComponent} from './modal.component';

@Injectable()
export class ModalService {

    constructor(
        private _comp: Compiler
    ) {}

    withComp(vcRef: ViewContainerRef/*, comp: any*/) {
        this._create(vcRef);
        // const factory = this.componentfactoryResolver.resolveComponentFactory(comp);
        // vcRef.createComponent(factory)
    }

    // Creates the modal
    private _create(vcRef: ViewContainerRef) {
        console.log(ModalComponent);
        this._comp.compileComponentAsync(ModalComponent).then(a => {
            const injector = ReflectiveInjector.fromResolvedProviders([], this._vr.injector);
            this._vr.clear();
            this._vr.createComponent(a, 0);
        });
    }
}