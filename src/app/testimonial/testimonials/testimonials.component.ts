import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from './testimonials.service';
import { testimonials } from './testimonials';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  showNavigationIndicators = false;
  // items = [
  //   {
  //     title: 'Testimonial-1',
  //     description:
  //       'It was a great experience studying at ADUST, a memory to cherish for lifetime. My experience at ADUST was full of learning and grooming. Being a global university It gave me an opportunity to meet different kind of people from around the world and learnt many things from them. I am thankful to all the faculties, mentors and entire SET department for providing us with quality education.Overall it was a great experience and lifetime memory at ADUST.',

  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //   },
  //   {
  //     title: 'Testimonial-2',
  //     description:
  //       'My experience at ADUST is great and memorable. The mentors at ADUST helped us enhance my academic and interpersonal skills. I am thankful to Training & Placement cell for providing a platform to enhance my skills and an opportunity to showcase them.',
  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //   },
  //   {
  //     title: 'Testimonial-3',
  //     description:
  //       "It was my immense luck and fortune to be the part of ADUST where I can grow. The entire faculty and department leaves no stone unturned to shape one's future. My four years at ADUST have been a wonderful experience of learning with prolific exposure to outside. Huge respect, love and devotion for entire faculty members and department. It's their efforts that make me to count myself into better professionals.",

  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //   },
  //   {
  //     title: 'Testimonial-4',
  //     description:
  //       ' My four years at ADUST were great and a memory to cherish for lifetime. It was full of learning and grooming oneself. It gave me an opportunity to meet different kind of people and learned many things. I am thankful to all the faculties, mentors and entire SET as well as placement cell. Overall it was a great experience and lifetime memory at ADUST',

  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //   },
  //   {
  //     title: 'Testimonial-5',
  //     description:
  //       'During my stay of four years in ADUST, I came across various people of different country and culture. I had received a lot of opportunities to groom myself, thanks to my ever inspiring mentors who helped me to discover the talented part of myself.No wonder the university is new and is still striving to achieve excellence',

  //     img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
  //   },
  // ];
  constructor(private _service: TestimonialsService) {}
  testimonials!: Observable<testimonials[]>;

  ngOnInit(): void {
    this.testimonials = this._service.getTestimonials();
  }
}
