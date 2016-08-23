# Select
An easy to use and flexible select component.

## Setup

Import the `SelectModule` in to your `AppModule`
```ts
@NgModule({
    imports: [BrowserModule, SelectModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage 

To use the select component provide an array to the component like this: 

```html
    <sc-select [items]="items"></sc-select>
```

You can also define the selected item using two-way data binding like this: 

```html
    <sc-select [items]="scItems" [(selected)]="selectedItem"></sc-select>
```

Now define the template for the drop-down select: 

```html
 <sc-select [items]="scItems" [(selected)]="selectedItem"></sc-select>
    // Placeholder template
    <template #scPlaceholder>
        <p>Bla</p>
    </template>
    
    // List item template
    <template #scListItem let-item="item">
        <h1>{{item.something}}</h1>
        <p>{{item.somethingElse}}</p>
    </template>
</sc-select>                
```

The placeholder `#scPlaceholder` template is optional. If no placeholder is provided and no item is selected by default the placeholder will be a simple string.  
Additionally set the placeholder (if it's a simple string) like this: 
 
```html
 <sc-select [items]="scItems" [(selected)]="selectedItem" placeholder="select something"></sc-select>
```

## Two-Way Binding 

| TW  | type | Default | Description
selected | any | none | The selected item

## Inputs 

| Input  | type | Default | Description
items | any[] | none | The list of items that will be displayed in the select
placeholder | string | Select Something | Simple placeholder string (this is used if no placeholder template is provided)

## Outputs 

| Output | type | default | Description
state | EventEmitter<string> | null | Emits when the select opens or closes ('opened' on open, 'closed' on close)