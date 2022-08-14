import { Component } from '@angular/core';
import { STORY } from '../services/globals.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
})
export class MainComponent {
    story: string = STORY;
}
