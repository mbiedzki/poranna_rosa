import { Component, OnInit } from '@angular/core';
import { GlobalsService } from './globals.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'poranna';

    constructor(public myGlobals: GlobalsService) {}

    ngOnInit(): void {}
}
