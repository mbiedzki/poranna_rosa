import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';

@Injectable({
    providedIn: 'root',
})
export class MobileModeService implements OnDestroy {
    mobileModeData = new BehaviorSubject<boolean>(false);
    mobileMode = this.mobileModeData.asObservable();
    resizeSubscription = new Subscription();

    constructor(private breakpointObserver: BreakpointObserver, private platformService: Platform,
    ) { }

    public async updateMobileMode(mobileMode: boolean) {
        this.mobileModeData.next(mobileMode);
    }

    async setMobileModeHandlers() {
        this.resizeSubscription = this.breakpointObserver
            .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
            .subscribe((state: BreakpointState) => {
                this.updateMobileMode(state.matches || this.platformService.IOS || this.platformService.ANDROID);
            });
    }

    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
    }

}
