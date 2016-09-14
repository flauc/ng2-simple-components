import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalService} from './modal.service';

@NgModule({
    imports: [CommonModule],
    providers: [ModalService]
})
export class ModalModule {}