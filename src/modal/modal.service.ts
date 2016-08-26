import {Injectable, ViewContainerRef, Compiler} from '@angular/core';
import {ModalComponent} from './modal.component';
import {ModalSettings} from './settings.interface';


@Injectable()
export class ModalService {

    private _vc: ViewContainerRef;
    private _vcToUse: ViewContainerRef;
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
    withComp(comp: any, settings?: ModalSettings, vcRef?: ViewContainerRef) {
        this._vcToUse = vcRef || this._vc;
        this._create(comp, settings || this._settings, this._vcToUse);
    }

    close(): void {
        this._vcToUse.clear();
    }


    private _create(comp: any, settings: ModalSettings, vcRef: ViewContainerRef): void {
        this._comp.compileComponentAsync(ModalComponent).then(a => {
            vcRef.clear();
            let created = vcRef.createComponent(a, 0);

            // Set Component Params
            created.instance['childComp'] = comp;
            created.instance['settings'] = settings;
        });
    }
}