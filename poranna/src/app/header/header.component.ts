import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    constructor() {}

    openMap(): void {
        window.open('https://goo.gl/maps/LcYZAdwVFmUwUu347');
    }
}
