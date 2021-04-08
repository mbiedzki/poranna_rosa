import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  constructor(public myGlobals: GlobalsService) {}

  messageHidden: boolean;
  message: string = '';

  ngOnInit(): void {
    fetch('assets/message.json')
      .then((response) => response.text())
      .then((data) => {
        const mess = JSON.parse(data);
        this.message = mess.message;
        this.messageHidden = mess.hidden;
      });
  }
}
