import {Injectable, ViewContainerRef, Compiler, ComponentRef} from '@angular/core';
import {ModalSettings} from './settings.interface';
import {SingleModule} from './single.module';
import {ModalComponent} from './modal.component';

@Injectable()
export class ModalService {

    private _vc: ViewContainerRef;
    private _vcToUse: ViewContainerRef;

    // Instance of the open module
    private _openModal: ComponentRef<ModalComponent>;

    // Default Settings
    private _settings: ModalSettings = {
        overlay: true,
        overlayClickToClose: true,
        defaultFooter: false,
        showCloseButton: true
    };

    constructor(private _comp: Compiler) {}

    vc(vc: ViewContainerRef): void { this._vc = vc }
    settings(set?: ModalSettings): ModalSettings {
        this._settings = Object.assign(this._settings, set);
        return this._settings;
    }

    /*
        Modal Methods
     */
    createWithModal(modal: any, comp: any, toSet?: any, settings?: ModalSettings, vcRef?: ViewContainerRef) {
        this._vcToUse = vcRef || this._vc;
        this._create(modal, comp, settings || this._settings, this._vcToUse, toSet);
    }

    close(): void {
        this._vcToUse.clear();
    }

    private _create(modal: any, comp: any, settings: ModalSettings, vcRef: ViewContainerRef, toSet?: any): void {
        this._comp.compileModuleAndAllComponentsAsync(SingleModule).then(a => {
            vcRef.clear();
            this._openModal = vcRef.createComponent(a.componentFactories[0]);
            this._openModal.instance.settings = settings;
            this._openModal.instance.toSet = toSet;

            this._openModal.instance.doClose.subscribe(a => this.close());

            this._openModal.instance.createWithComp(modal, comp);
        });
    }
}