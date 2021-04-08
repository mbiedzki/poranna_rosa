import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../globals.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor(
    public myGlobals: GlobalsService,
    public menuComponent: MenuComponent
  ) {}

  @Input() currentPage: number;

  ngOnInit(): void {
    let i: number;
    let max: number = this.numberOfImages[this.currentPage - 1];
    for (i = 1; i <= max; i++) {
      this.tiles[i - 1] =
        'assets/img/gallery' + this.currentPage + '/img' + i + '.jpg';
    }
  }

  onPageChange(): void {}

  tiles: Array<string> = [];
  numberOfImages: Array<number> = [22, 14, 11, 18, 18];
}
