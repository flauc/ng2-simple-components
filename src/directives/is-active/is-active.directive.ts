import {AfterViewInit} from '@angular/core';

export abstract class IsActiveDirective implements AfterViewInit {

    abstract refEl: any;
    abstract classToSet: string;

    abstract ngAfterViewInit(): void
    abstract onScroll(): void
    abstract inPosition(): boolean
}

