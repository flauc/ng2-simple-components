import {Injectable, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {ModalComponent} from './modal.component';

@Injectable()
export class ModalService {

    constructor(
        private _resolver: ComponentFactoryResolver
    ) {}

    withComp(vcRef: ViewContainerRef/*, comp: any*/) {
        this._create(vcRef);
        // const factory = this.componentfactoryResolver.resolveComponentFactory(comp);
        // vcRef.createComponent(factory)
    }

    // Creates the modal
    private _create(vcRef: ViewContainerRef) {
        const factory = this.componentfactoryResolver.resolveComponentFactory(ModalComponent);
        vcRef.createComponent(factory)
    }
}