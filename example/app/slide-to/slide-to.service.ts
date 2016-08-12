import {Injectable} from '@angular/core';

@Injectable()
export class SlideToService {
    toElement(el: any): void {
        let startY = this._currentYPosition(),
            stopY = this._elmYPosition(el),
            distance = stopY > startY ? stopY - startY : startY - stopY;

        if (distance < 100) {
            window.scrollTo(0, stopY);
            return;
        }

        let speed = Math.round(distance / 100);

        if (speed >= 20) speed = 20;

        let step = Math.round(distance / 50),
            leapY = stopY > startY ? startY + step : startY - step,
            timer = 0;

        if (stopY > startY) {
            for (let i = startY; i < stopY; i += step) {
                this._scrollTo(leapY, timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            }

            return;
        }

        for (let i = startY; i > stopY; i -= step) {
            this._scrollTo(leapY, timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
    }

    private _scrollTo(pos: number, dur: number): void {
        setTimeout(() => window.scrollTo(0, pos), dur);
        return;
    }

    private _elmYPosition(el: any): number {
        let y = el.offsetTop,
            elm = el;

        while (elm.offsetParent && elm.offsetParent !== document.body) {
            elm = elm.offsetParent;
            y += el.offsetTop;
        }

        return y;
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