import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestimonialRoutingModule } from './testimonial-routing.module';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [TestimonialsComponent],
  imports: [CommonModule, TestimonialRoutingModule, NgbModule, SharedModule],
  exports: [TestimonialsComponent],
})
export class TestimonialModule {}
