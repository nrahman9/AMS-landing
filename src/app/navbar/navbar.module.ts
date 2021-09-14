import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [NavbarHomeComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [NavbarHomeComponent],
})
export class NavbarModule {}
