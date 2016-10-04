import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './pagination.component';
import {PaginationPipe} from './pagination.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [PaginationComponent, PaginationPipe],
    exports: [PaginationComponent, PaginationPipe]
})
export class PaginationModule {}