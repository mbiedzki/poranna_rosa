import { Component } from '@angular/core';
import { GlobalsService } from '../services/globals.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
    constructor(public myGlobals: GlobalsService) {}

    public selectPage(index) {
        this.myGlobals.currentPage = index;
    }
}
