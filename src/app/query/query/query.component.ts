import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css'],
})
export class QueryComponent implements OnInit {
  constructor() {}
  fullName: string = '';
  email: string = '';
  comment: string = '';
  onSubmit(value: any) {
    console.log(value);
  }
  isShown = false;
  ngOnInit(): void {}
}
