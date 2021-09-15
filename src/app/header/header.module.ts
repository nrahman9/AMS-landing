import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [HeaderHomeComponent],
  imports: [CommonModule, HeaderRoutingModule, MatButtonModule],
  exports: [HeaderHomeComponent],
})
export class HeaderModule {}
