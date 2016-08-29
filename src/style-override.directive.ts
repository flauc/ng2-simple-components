import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[scOverride]'
})
export class StyleOverrideDirective {
    @Input() set scOverride(cl: string) { this.className = cl}
    @HostBinding('class') className: string;
}