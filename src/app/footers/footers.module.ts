import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { TeamsComponent } from './teams/teams.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TeamsComponent }];

@NgModule({
  declarations: [FooterComponent, TeamsComponent],
  imports: [CommonModule, NgbModule, RouterModule.forChild(routes)],
  exports: [FooterComponent, TeamsComponent],
})
export class FootersModule {}
