import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe {
    transform(value, args) {
        if (!args[0]) return value;

        let search = args[0].toLowerCase(),
            crit = args[1];

        if (value) {
            return value.filter(a => {
                for (let i = 0; i < crit.length; i++)
                    if (a.hasOwnProperty(crit[i])) {
                        if (!args[2] && a[crit[i]].toLowerCase().indexOf(search) === 0) return true;
                        else if (args[2] && a[crit[i]].toLowerCase().indexOf(search) !== -1) return true;
                    }
            });
        }
    }
}