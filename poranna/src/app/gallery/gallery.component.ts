import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MobileModeService } from '../services/mobileMode.service';
import { LABELS } from '../services/globals.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit, OnDestroy {
    mobileMode = false;
    mobileModeSubs = new Subscription();
    cols: number;
    title: string;
    tiles: Array<string> = [];
    numberOfImages: Array<number> = [22, 14, 11, 18, 18];

    constructor(
        private mobileModeService: MobileModeService,
    ) {}

    @Input() currentPage: number;

    ngOnInit(): void {
        this.mobileModeSubs = this.mobileModeService.mobileMode.subscribe((mobileMode => {
            this.mobileMode = mobileMode;
            this.cols = this.mobileMode ? 1 : 3;
        }));
        const max = this.numberOfImages[this.currentPage - 1];
        for (let i = 1; i <= max; i++) {
            this.tiles[i - 1] =
                'assets/img/gallery' + this.currentPage + '/img' + i + '.jpg';
        }
        this.title = LABELS[this.currentPage];
    }

    ngOnDestroy() {
        this.mobileModeSubs.unsubscribe();
    }
}
