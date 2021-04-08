import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GlobalsService } from './globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'poranna';
  galleries: Array<number> = [1, 2, 3, 4, 5];
  constructor(public myGlobals: GlobalsService) {}

  ngOnInit(): void {}
}
