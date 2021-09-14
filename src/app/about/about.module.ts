import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutMoreComponent } from './about-more/about-more.component';

@NgModule({
  declarations: [AboutHomeComponent, AboutMoreComponent],
  imports: [CommonModule, AboutRoutingModule],
  exports: [AboutHomeComponent, AboutMoreComponent],
})
export class AboutModule {}
