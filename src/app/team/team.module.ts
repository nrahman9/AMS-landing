import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [TeamsComponent],
  imports: [CommonModule, NgbModule, SharedModule],
  exports: [TeamsComponent],
})
export class TeamModule {}
