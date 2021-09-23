import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Counters } from '../counters';
import { CountersService } from '../counters.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counters!: Observable<Counters[]>;
  constructor(private _service: CountersService) {}

  ngOnInit(): void {
    this.counters = this._service.getCounters();
  }
}
