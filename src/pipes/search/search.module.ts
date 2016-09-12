import {NgModule} from '@angular/core';
import {SearchPipe} from './search.pipe';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [SearchPipe],
    exports: [SearchPipe]
})
export class SearchPipeModule {}