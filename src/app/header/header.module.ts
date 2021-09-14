import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderHomeComponent } from './header-home/header-home.component';

@NgModule({
  declarations: [HeaderHomeComponent],
  imports: [CommonModule, HeaderRoutingModule],
  exports: [HeaderHomeComponent],
})
export class HeaderModule {}
