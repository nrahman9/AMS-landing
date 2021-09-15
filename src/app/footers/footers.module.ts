import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootersRoutingModule } from './footers-routing.module';
import { FooterComponent } from './footer/footer.component';
import { TeamsComponent } from './teams/teams.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [FooterComponent, TeamsComponent],
  imports: [CommonModule, FootersRoutingModule, NgbModule],
  exports: [FooterComponent, TeamsComponent],
})
export class FootersModule {}
