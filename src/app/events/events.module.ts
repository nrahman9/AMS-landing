import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventComponent } from './event/event.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EventComponent],
  imports: [CommonModule, EventsRoutingModule, SharedModule],
  exports: [EventComponent],
})
export class EventsModule {}
