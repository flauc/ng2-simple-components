import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe {
    transform(value: any[], options: {search: string, criteria: string[], caseSensitive?: boolean, fromStart?: boolean, testExistence?: boolean}) {

        // For cases when value isn't defined
        if (!value) return;

        // Make sure options are defines
        const mToUse = options.fromStart ? this._fromStart : this._fromAny;

        if (options.testExistence) {

        }

        return mToUse(value, options.search, options.criteria)
    }

    private _fromStart(value: any[], search: string, criteria: string[]): any[] {
        return value.filter(a => {
            for (let i = 0; i < criteria.length; i++)
                if (a[criteria[i]].indexOf(search) === 0) return true
        });
    }

    private _fromAny(value: any[], search: string, criteria: string[]): any[] {
        return value.filter(a => {
            for (let i = 0; i < criteria.length; i++)
                if (a[criteria[i]].indexOf(search) !== -0) return true
        });
    }
}