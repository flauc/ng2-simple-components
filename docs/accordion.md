# Accordion
A simple accordion component

## Setup

Import the `AccordionModule` in to your `AppModule`
```ts
@NgModule({
    imports: [BrowserModule, AccordionModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage 

How to use this component is easiest to understand through an example: 

```ts
<sc-accordion [singleActive]="true">
    <sc-accord title="test-1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, atque aut autem eaque earum eos eum, ex expedita officia provident quis quo sequi similique ullam veritatis voluptas, voluptates. Deserunt?</p>  
    </sc-accord>
    <sc-accord title="test-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, atque aut autem eaque earum eos eum, ex expedita officia provident quis quo sequi similique ullam veritatis voluptas, voluptates. Deserunt?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, atque aut autem eaque earum eos eum, ex expedita officia provident quis quo sequi similique ullam veritatis voluptas, voluptates. Deserunt?</p>
    </sc-accord>
    <sc-accord title="test-3" [active]="true">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, atque aut autem eaque earum eos eum, ex expedita officia provident quis quo sequi similique ullam veritatis voluptas, voluptates. Deserunt?</p>
    </sc-accord>
</sc-accordion>
```

Simply wrap as many `sc-accord` elements in the parent `sc-accordion`.

## Inputs

### `sc-accordion`
 
| Input  | type | Default | Description
--- | --- | --- | ---
singleActive | boolean | false | Defines whether one or many `sc-accord` can be open at the same time

### `sc-accord`

| Input  | type | Default | Description
--- | --- | --- | ---
title | string | 'Accord' | Title of the `sc-accord`
active | boolean | false | Defines whether the `sc-accord` is open by default