import {Injectable} from '@angular/core';
import {Window} from './window';

@Injectable()
export class WindowBrowser implements Window {
    innerHeight() { return window.innerHeight}
    innerWidth() { return window.innerWidth}
    pageYOffset() { return window.pageXOffset}
}