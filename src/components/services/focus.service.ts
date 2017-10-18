import { Injectable } from '@angular/core';

@Injectable()
export class FocusService {

    constructor() { }

    focus(id: string): void {
        const el = document.getElementById(id);
        if (el) {
            el.focus();
            console.log('Focused ' + id);
        }
    }

}
