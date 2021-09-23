import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Elements } from 'src/app/element';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  constructor(private _service: AppService) {}
  events!: Observable<Elements[]>;

  ngOnInit(): void {
    this.events = this._service.getEvents();
  }
}
