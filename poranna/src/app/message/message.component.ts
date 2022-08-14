import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../services/globals.service';

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
    class = '';

    ngOnInit(): void {
        fetch('assets/message.json')
            .then((response) => response.text())
            .then((data) => {
                const mess = JSON.parse(data);
                this.message = mess.message;
                this.from = mess.from;
                this.to = mess.to;
                this.class = this.checkDates() ? 'message' : 'hidden-message';
            });
    }

    checkDates() {
        const todayObj = new Date();
        const dd = String(todayObj.getDate()).padStart(2, '0');
        const mm = String(todayObj.getMonth() + 1).padStart(2, '0');
        const today = mm + dd;
        return today >= this.from && today <= this.to;
    }
}
