import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'sc-modal',
    styles: [`
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
        }
        
        .wrapper {
            position: fixed;
            top: 50px;
        }
    `],
    template: `
        <div class="overlay"></div>
        <div class="wrapper">
            <p>Test</p>
        </div>
    `
})
export class ModalComponent implements OnInit {

}