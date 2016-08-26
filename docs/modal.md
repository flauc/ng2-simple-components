# Modal
An easy to use and flexible modal component.

## Setup

Import the `ModalModule` in to your `AppModule`
```ts
@NgModule({
    imports: [BrowserModule, ModalModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage 

Before you can use the Modal you need to provide the `ViewContainerRef` for the modal. This defines where in the `DOM` an instantiated modal will be placed. 
The modal element has `position: fixed` which means it will behave the same regardless of where you place it, but if you want the modal to be a child of the `body` 
provide the `ViewContainerRef` of the root component like this: 

```ts
export class AppComponent implements OnInit {
    constructor(
        private _vcRef: ViewContainerRef,
        private _modal: ModalService,
    ) {}
    
    ngOnInit() {
        // Provide the ViewContainer which the Modal to use
        this._modal.vc(this._vr)
    }
}
```

This is the minimal required configuration for the Modal to work now you can inject the `ModalService` in to any component and create a modal like this: 

```ts
createModal() {
    // The component you want injected in to the Modal
    this._modal.create(MyComponent);
}
```