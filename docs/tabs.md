# Accordion
A simple accordion component

## Setup

Import the `TabsModule` in to your `AppModule`
```ts
@NgModule({
    imports: [BrowserModule, TabsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage 

How to use this component is easiest to understand through an example: 

```ts
 <sc-tabs>
    <sc-tab title="test-1" [active]="true">
        <h1>Test 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
    </sc-tab>
    <sc-tab title="test-2">
        <h1>Test 2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut, beatae, cum, dolorum excepturi fugiat fugit hic maiores maxime molestiae mollitia praesentium quaerat quasi repellendus sit velit voluptas voluptates voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deleniti dignissimos earum excepturi fugiat minima molestias quibusdam reprehenderit tenetur. Ducimus explicabo facilis ipsam, pariatur reiciendis tempore unde vel voluptate!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aut deserunt dicta fugit iste laboriosam pariatur veniam, voluptate voluptatem! Adipisci commodi consectetur dolores expedita facere nobis odit reprehenderit veritatis?</p>
    </sc-tab>        
</sc-tabs> 
```

Simply wrap as many `sc-tab` elements in the parent `sc-tabs`.

## Inputs

### `sc-tabs`
 
This element has no inputs.

### `sc-tab`

| Input  | type | Default | Description
--- | --- | --- | ---
title | string | 'Tab' | Title of the tab (will be displayed in the navigation bar)
active | boolean | false | Defines whether the tab is activated by default
disabled | boolean | false | Defines whether this tab can be activated