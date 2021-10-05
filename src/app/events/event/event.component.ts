import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Elements } from 'src/app/element';
import { Observable } from 'rxjs';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  Dialog: any;
  selectedTitle: string = '';
  constructor(private _service: AppService) {}

  events!: Observable<Elements[]>;

  ngOnInit(): void {
    this.events = this._service.getEvents();
  }
  isShown = false;

  showEventDetail(event: Elements) {
    this.selectedTitle = event.title;
  }

  hideEventDetail() {
    this.selectedTitle = '';
  }
}
