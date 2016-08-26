import {Component, OnInit} from '@angular/core';
import {ModalService} from 'ng2-simple-components';

@Component({
    selector: 'test-bla',
    template: `
        <h1>Test</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorum eius optio sed tenetur. Amet quasi, ut! Accusamus aperiam architecto atque illum, iste, magni molestias optio qui rerum totam vero?</p>
        <button (click)="close()">Close</button>
    `
})
export class TestComponent {
    constructor(private _modal: ModalService) {}

    close() {
        this._modal.close();
    }
}