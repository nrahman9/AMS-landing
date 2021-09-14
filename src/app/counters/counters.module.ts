import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountersRoutingModule } from './counters-routing.module';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, CountersRoutingModule],
  exports: [CounterComponent],
})
export class CountersModule {}
