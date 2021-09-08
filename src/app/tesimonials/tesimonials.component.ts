import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tesimonials',
  templateUrl: './tesimonials.component.html',
  styleUrls: ['./tesimonials.component.css'],
})
export class TesimonialsComponent implements OnInit {
  showNavigationIndicators = false;
  items = [
    {
      title: 'Testimonial-1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nameu sem tempor, varius quam at, luctus dui. Mauris magnametus, dapibus nec turpis vel, semper malesuada ante. Idacbibendum scelerisque non non purus. Suspendisse varius nibhnon aliquet.',

      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Testimonial-2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nameu sem tempor, varius quam at, luctus dui. Mauris magnametus, dapibus nec turpis vel, semper malesuada ante. Idacbibendum scelerisque non non purus. Suspendisse varius nibhnon aliquet.',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Testimonial-3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nameu sem tempor, varius quam at, luctus dui. Mauris magnametus, dapibus nec turpis vel, semper malesuada ante. Idacbibendum scelerisque non non purus. Suspendisse varius nibhnon aliquet.',

      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Testimonial-4',
      description:
        ' .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nameu sem tempor, varius quam at, luctus dui. Mauris magnametus, dapibus nec turpis vel, semper malesuada ante. Idacbibendum scelerisque non non purus. Suspendisse varius nibhnon aliquet.',

      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
    {
      title: 'Testimonial-5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nameu sem tempor, varius quam at, luctus dui. Mauris magnametus, dapibus nec turpis vel, semper malesuada ante. Idacbibendum scelerisque non non purus. Suspendisse varius nibhnon aliquet.',

      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
