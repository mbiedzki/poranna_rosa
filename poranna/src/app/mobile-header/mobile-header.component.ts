import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../services/globals.service';

@Component({
    selector: 'app-mobile-header',
    templateUrl: './mobile-header.component.html',
    styleUrls: ['./mobile-header.component.css'],
})
export class MobileHeaderComponent implements OnInit {

    constructor(public myGlobals: GlobalsService) { }

    ngOnInit(): void {
    }

    public selectPage(index) {
        this.myGlobals.currentPage = index;
    }

}
