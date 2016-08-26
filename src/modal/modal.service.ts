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
    }

    close(): void {
        this._vc.clear();
    }

    // Creates the modal
    private _create(comp: any, vcRef: ViewContainerRef): void {
        this._comp.compileComponentAsync(ModalComponent).then(a => {
            vcRef.clear();
            let created = vcRef.createComponent(a, 0);
            created.instance['childComp'] = comp;
            this._vc = vcRef;
        });
    }
}