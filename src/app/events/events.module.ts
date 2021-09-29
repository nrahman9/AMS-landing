import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventComponent } from './event/event.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
@NgModule({
  declarations: [EventComponent, DialogBoxComponent],
  imports: [CommonModule, SharedModule, MatIconModule],
  exports: [EventComponent, DialogBoxComponent],
})
export class EventsModule {}
