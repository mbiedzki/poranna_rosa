import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  constructor(public myGlobals: GlobalsService) {}

  from: string;
  to: string;
  message: string = '';
  showMessage = false;

  ngOnInit(): void {
    fetch('assets/message.json')
      .then((response) => response.text())
      .then((data) => {
        const mess = JSON.parse(data);
        this.message = mess.message;
        this.from = mess.from;
        this.to = mess.to;
        this.showMessage = this.checkDates()
      });
  }

  checkDates() {
      const todayObj = new Date();
      const dd = String(todayObj.getDate()).padStart(2, '0');
      const mm = String(todayObj.getMonth() + 1).padStart(2, '0');
      const yyyy = todayObj.getFullYear();

      const todayStr = yyyy + '.' + mm + '.' + dd;
      const today = new Date(todayStr)
      const from = new Date(this.from);
      const to = new Date(this.to);
      return today >= from && today <= to
  }
}
