import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openMap(): void {
    console.log('mapa');
    window.open('https://goo.gl/maps/LcYZAdwVFmUwUu347');
  }
}
