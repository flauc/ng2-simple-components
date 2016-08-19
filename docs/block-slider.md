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
<sc-block-slider [blockCount]="3">
    <sc-block><p>Test-1</p></sc-block>
    <sc-block><p>Test-2</p></sc-block>
    <sc-block><p>Test-3</p></sc-block>
    <sc-block><p>Test-4</p></sc-block>
    <sc-block><p>Test-5</p></sc-block>
</sc-block-slider>    
```

Simply wrap as many `sc-block` elements in the parent `sc-block-slider`.

## Inputs

### `sc-block-slider`
 
| Input  | type | Default | Description
--- | --- | --- | ---
blockCount | number | 4 | Defines how many blocks should be visible at once
startingPosition | number | 0 | Set the starting position (index of the block)

### `sc-block`

This element has no inputs.