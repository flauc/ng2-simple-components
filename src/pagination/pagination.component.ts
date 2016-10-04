import {Component, Input} from '@angular/core';

@Component({
    selector: 'sc-pagination',
    template: `
        <div class="pagination" *ngIf="pagination && pagination.pagesArray.length > 1">
            <ul>
                <li *ngFor="let p of pagination.pagesArray" (click)="pagination.activePage = p" [class.active]="p == pagination.activePage"><span>{{p}}</span></li>
            </ul>
        </div>    
    `
})
export class PaginationComponent {
    @Input() pagination: {pagesArray: number[], itemsPerPage: number, activePage: number}
}