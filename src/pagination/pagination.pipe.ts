import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sc-pagination-pipe', pure: false})
export class PaginationPipe implements PipeTransform {
    transform(value, args) {
        // Check if values were received
        if (!value) return;

        let obj = args,
            numberOfPages = Math.ceil(value.length / obj.itemsPerPage),
            pagesArray = [];

        // Set the number of pages
        for (let i = 1; i < numberOfPages + 1; i++) pagesArray.push(i)

        obj.pagesArray = pagesArray;

        if (obj.pagesArray.length < obj.activePage) obj.activePage = obj.pagesArray.length ? obj.pagesArray.length : 1;

        let startCut = (obj.activePage - 1) * obj.itemsPerPage,
            toCut = obj.activePage * obj.itemsPerPage;

        return value.filter(a => {
            let index = value.indexOf(a);
            if (index >= startCut && index < toCut) return true;
        });
    }
}