import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe {
    /*
        args: [
            search: string,
            criteria: string[],
            caseSensitive?: boolean
            fromStart?: boolean,
            testExistence?: boolean
        ]
     */
    transform(value: any[], args: [string, string[], boolean, boolean, boolean]) {

        // For cases when value isn't defined
        if (!value) return;

        const mToUse = args[3] ? args[2] ?  this._fromStart : this._cFromStart : args[2] ? this._fromAny : this._cfromAny;

        if (args[4]) {
        }

        return mToUse(value, args[0], args[1])
    }

    private _fromStart = (value: any[], search: string, criteria: string[]): any[] => {
        return value.filter(a => {
            for (let i = 0; i < criteria.length; i++)
                if (this._getValue(a, criteria[i]).indexOf(search) === 0) return true
        });
    };

    private _fromAny = (value: any[], search: string, criteria: string[]): any[] => {
        return value.filter(a => {
            for (let i = 0; i < criteria.length; i++)
                if (this._getValue(a, criteria[i]).indexOf(search) !== -1) return true
        });
    };

    private _cFromStart = (value: any[], search: string, criteria: string[]): any[] => {

        const s = search.toLowerCase();

        return value.filter(a => {
            for (let i = 0; i < criteria.length; i++)
                if (this._getValue(a, criteria[i]).toLowerCase().indexOf(s) === 0) return true
        });
    };

    private _cfromAny = (value: any[], search: string, criteria: string[]): any[] => {

        const s = search.toLowerCase();

        return value.filter(a => {
            for (let i = 0; i < criteria.length; i++)
                if (this._getValue(a, criteria[i]).toLowerCase().indexOf(s) !== -1) return true
        });
    };

    private _getValue(item: Object, str: string): string {
        return str.split('.').reduce((acc, curr) => acc[curr], item);
    }
}