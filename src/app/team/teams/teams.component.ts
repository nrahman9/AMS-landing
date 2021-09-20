import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  items = [
    {
      title: 'Sefat Anam',
      description: 'Team Leader',

      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Naymur Rahman',
      description: 'Team member',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
