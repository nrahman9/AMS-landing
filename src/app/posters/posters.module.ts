import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostersRoutingModule } from './posters-routing.module';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  declarations: [PosterComponent],
  imports: [CommonModule, PostersRoutingModule],
  exports: [PosterComponent],
})
export class PostersModule {}
