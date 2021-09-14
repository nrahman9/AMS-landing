import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialRoutingModule } from './testimonial-routing.module';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [TestimonialsComponent],
  imports: [CommonModule, TestimonialRoutingModule, NgbModule],
  exports: [TestimonialsComponent],
})
export class TestimonialModule {}
