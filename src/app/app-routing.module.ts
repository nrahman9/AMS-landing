import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarHomeComponent } from './navbar/navbar-home/navbar-home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
