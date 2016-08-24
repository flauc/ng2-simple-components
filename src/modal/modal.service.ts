import {Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentFactory} from '@angular/core';
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
        this._resolver.resolveComponentFactory(ModalComponent).then((factory: ComponentFactory<any>) => {
            vcRef.createComponent(factory);
        });
    }
}