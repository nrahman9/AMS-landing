import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from '../team/teams/teams.component';
const routes: Routes = [{ path: '', component: TeamsComponent }];

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, NgbModule, RouterModule.forChild(routes)],
  exports: [FooterComponent],
})
export class FootersModule {}
