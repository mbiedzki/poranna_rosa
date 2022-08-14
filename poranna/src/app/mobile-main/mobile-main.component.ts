import { Component } from '@angular/core';
import { STORY } from '../services/globals.service';

@Component({
    selector: 'app-mobile-main',
    templateUrl: './mobile-main.component.html',
    styleUrls: ['./mobile-main.component.css'],
})
export class MobileMainComponent {
    story: string = STORY;

    openMap(): void {
        console.log('mapa');
        window.open('https://goo.gl/maps/LcYZAdwVFmUwUu347');
    }

}
