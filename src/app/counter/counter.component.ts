import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counterUp = 0;
  counter = 0;
  counterStep = 0;
  studentCount = 0;
  counterUpStop: any = setInterval(() => {
    this.counterUp++;
    if (this.counterUp == 97) {
      clearInterval(this.counterUpStop);
    }
  }, 50);
  counterStop: any = setInterval(() => {
    this.counter++;
    if (this.counter == 30) {
      clearInterval(this.counterStop);
    }
  }, 50);
  counterStepStop: any = setInterval(() => {
    this.counterStep++;
    if (this.counterStep == 2) {
      clearInterval(this.counterStepStop);
    }
  }, 50);
  studentCountStop: any = setInterval(() => {
    this.studentCount++;
    if (this.studentCount == 3000) {
      clearInterval(this.studentCountStop);
    }
  }, 10);
  constructor() {}

  ngOnInit(): void {}
}
