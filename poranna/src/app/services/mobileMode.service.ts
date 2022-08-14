import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Injectable({
    providedIn: 'root',
})
export class MobileModeService implements OnDestroy {
    mobileModeData = new BehaviorSubject<boolean>(false);
    mobileMode = this.mobileModeData.asObservable();
    resizeSubscription = new Subscription();

    constructor(private breakpointObserver: BreakpointObserver,
    ) { }

    public async updateMobileMode(mobileMode: boolean) {
        this.mobileModeData.next(mobileMode);
    }

    async setMobileModeHandlers() {
        this.resizeSubscription = this.breakpointObserver
            .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
            .subscribe((state: BreakpointState) => {
                this.updateMobileMode(state.matches);
            });
    }

    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
    }

}
