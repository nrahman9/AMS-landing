import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css'],
})
export class TeamMemberComponent implements OnInit {
  items = [
    {
      title: 'Card Title 1',
      description: 'Department of CSE',

      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Card Title 2',
      description: 'Department of CSE',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
