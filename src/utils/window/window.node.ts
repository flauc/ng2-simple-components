import {Window} from './window';

declare const Zone: any;

export class WindowNode implements Window {
    innerHeight() { return Zone.current.get('req').window}
    innerWidth() { return Zone.current.get('req').window}
    pageYOffset() { return Zone.current.get('req').window}
    getDocument() { return Zone.current.get('req').window }
}