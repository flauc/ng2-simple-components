import {Component, OnInit} from '@angular/core';
import {ModalService} from 'ng2-simple-components';

@Component({
    selector: 'test-bla',
    template: `
        <h1>Test</h1>
        <p>{{test}}</p>
        <button (click)="close()">Close</button>
    `
})
export class TestComponent {

    test: string = 'pero';

    constructor(private _modal: ModalService) {}

    close() {
        this._modal.close();
    }
}