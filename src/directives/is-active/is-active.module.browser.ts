import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IsActiveDirectiveBrowser} from './is-active.directive.browser';

@NgModule({
    imports: [CommonModule],
    declarations: [IsActiveDirectiveBrowser],
    exports: [IsActiveDirectiveBrowser]
})
export class IsActiveBrowserModule {}