import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TeamsComponent],
  imports: [CommonModule, NgbModule],
  exports: [TeamsComponent],
})
export class TeamModule {}
