import {Injectable} from '@angular/core';

@Injectable()
export class SlideToService {
    toElement(el: any): void {
        const distance = el.getBoundingClientRect().top,
            start = this._currentYPosition(),
            position = start + distance;

        if (position < 100) {
            window.scrollTo(0, position);
            return;
        }

        let speed = Math.abs(Math.round(distance / 100));

        if (speed >= 20) speed = 20;

        let step = Math.round(distance / 50),
            timer = 1,
            i = start;

        if (step > 0) {
            while (i < position) {
                i = (i + step) >= position ? position : i + step;
                this._scrollTo(i, timer * speed);
                timer++;
            }
        }

        else {
            while (i > position) {
                i = (i + step) <= position ? position : i + step;
                this._scrollTo(i, timer * speed);
                timer++;
            }
        }
    }

    private _scrollTo(pos: number, dur: number): void {
        setTimeout(() => window.scrollTo(0, pos), dur);
        return;
    }

    private _currentYPosition(): number {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    }
}