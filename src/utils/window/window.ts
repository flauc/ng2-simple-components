export abstract class Window {
    abstract innerHeight(): number
    abstract innerWidth(): number
    abstract pageYOffset(): number
    abstract getDocument(): any;
}