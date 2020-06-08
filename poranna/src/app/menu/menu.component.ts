import { Component, OnInit } from '@angular/core';
import {GlobalsService} from "../globals.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(public myGlobals:GlobalsService) { }

  public selectPage (index) {
    this.myGlobals.currentPage = index;
  }

  ngOnInit(): void {
  }

}
