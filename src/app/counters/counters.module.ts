import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountersRoutingModule } from './counters-routing.module';
import { CounterComponent } from './counter/counter.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, CountersRoutingModule, SharedModule],
  exports: [CounterComponent],
})
export class CountersModule {}
