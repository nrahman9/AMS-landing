import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Elements } from 'src/app/element';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  // items = [
  //   {
  //     title: 'Event 1',
  //     description:
  //       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Accusamus, ratione.',

  //     month: 'jun',
  //     time: '10:30 am',
  //   },
  //   {
  //     title: 'Event 2',
  //     description:
  //       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Accusamus, ratione.',

  //     month: 'jun',
  //     time: '10:30 am',
  //   },
  //   {
  //     title: 'Event 3',
  //     description:
  //       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Accusamus, ratione.',

  //     month: 'jun',
  //     time: '10:00 am',
  //   },
  //   {
  //     title: 'Event 4',
  //     description:
  //       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Accusamus, ratione.',

  //     month: 'jun',
  //     time: '10:00 am',
  //   },
  //   {
  //     title: 'Event 5',
  //     description:
  //       'Lorem ipsum dolor, sit amet consectetur adipisicing elit Accusamus, ratione.',
  //     date: '8',
  //     month: 'jun',
  //     time: '10:00 am',
  //   },
  // ];
  constructor(private _service: AppService) {}

  events: Elements[] = [];

  ngOnInit(): void {
    this._service.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
