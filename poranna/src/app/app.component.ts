import { Component, OnInit } from '@angular/core';
import { GlobalsService } from './services/globals.service';
import { Subscription } from 'rxjs';
import { MobileModeService } from './services/mobileMode.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'poranna';
    mobileMode = false;
    mobileModeSubs = new Subscription();

    constructor(public myGlobals: GlobalsService, private mobileModeService: MobileModeService) {}

    async ngOnInit(): Promise<void> {
        await this.mobileModeService.setMobileModeHandlers();
        this.mobileModeSubs = this.mobileModeService.mobileMode.subscribe((mobileMode => {
            this.mobileMode = mobileMode;
        }));
    }
}
