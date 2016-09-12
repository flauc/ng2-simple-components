# Search
A pipe for filtering an object array in a `*ngFor` loop.

## Setup

Import the `SearchPipeModule` in to your `AppModule`
```ts
@NgModule({
    imports: [BrowserModule, SearchPipeModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage 

The `SearchPipe` can be used in combination with any object array (it also supports nested object searching). 

This is the simplest setup you will need: 

HTML:
```html
<!-- This is the search input that the filter is based on-->
<input type="text" [(ngModel)]="searchTerm" name="search" />
<div *ngFor="let item of items | search:[searchTerm, searchCriteria]>
    <p>First Name: {{t.firstName}}</p>
    <p>Last Name: {{t.lastName}}</p>
</div>
```

TS: 
```ts 
searchTerm: string = '';
searchCriteria: string[] = ['firstName', 'lastName']
items: any[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        firstName: 'Cool',
        lastName: 'Guy'
    }
]
```

The `searchTerms` and `searchCriteria` are the only required inputs for the pipe. 
Using the `searchCriteria` you provide a string array with the key names of the object properties to consider in the search. 
You can provide a criteria in this format 'levelOne.levelTwo' this will filter the array based on the following property: `{levelOne: {levelTwo: 'something'}}`.

## Options 

