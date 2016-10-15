import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IsActiveDirectiveNode} from './is-active.directive.node';

@NgModule({
    imports: [CommonModule],
    declarations: [IsActiveDirectiveNode],
    exports: [IsActiveDirectiveNode]
})
export class IsActiveNodeModule {}