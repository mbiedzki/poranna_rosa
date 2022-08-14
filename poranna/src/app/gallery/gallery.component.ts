import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MobileModeService } from '../services/mobileMode.service';
import { LABELS } from '../globals.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
    mobileMode = false;
    mobileModeSubs = new Subscription();
    cols: number;
    title: string;

    constructor(
        private mobileModeService: MobileModeService,
    ) {}

    @Input() currentPage: number;

    ngOnInit(): void {
        this.mobileModeSubs = this.mobileModeService.mobileMode.subscribe((mobileMode => {
            this.mobileMode = mobileMode;
            this.cols = this.mobileMode ? 1 : 3;
        }));
        let i: number;
        let max: number = this.numberOfImages[this.currentPage - 1];
        for (i = 1; i <= max; i++) {
            this.tiles[i - 1] =
                'assets/img/gallery' + this.currentPage + '/img' + i + '.jpg';
        }
        console.log('ABC', this.currentPage, LABELS);
        this.title = LABELS[this.currentPage];
    }

    tiles: Array<string> = [];
    numberOfImages: Array<number> = [22, 14, 11, 18, 18];
}
