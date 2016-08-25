import {Injectable, ViewContainerRef, Compiler} from '@angular/core';
import {ModalComponent} from './modal.component';

@Injectable()
export class ModalService {

    private _vc: ViewContainerRef;

    constructor(
        private _comp: Compiler
    ) {}

    withComp(comp: any, vcRef: ViewContainerRef/*, comp: any*/) {
        this._create(comp, vcRef);
        // const factory = this.componentfactoryResolver.resolveComponentFactory(comp);
        // vcRef.createComponent(factory)
    }

    close(): void {
        this._vc.clear();
    }

    // Creates the modal
    private _create(comp: any, vcRef: ViewContainerRef): void {
        this._comp.compileComponentAsync(ModalComponent).then(a => {
            vcRef.clear();
            a.childComp = comp;
            vcRef.createComponent(a, 0);
            this._vc = vcRef;
        });
    }
}