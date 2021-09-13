import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}
