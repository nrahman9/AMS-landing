import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootersRoutingModule } from './footers-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, FootersRoutingModule],
  exports: [FooterComponent],
})
export class FootersModule {}
