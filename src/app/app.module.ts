import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { PostersModule } from './posters/posters.module';
import { CountersModule } from './counters/counters.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { EventsModule } from './events/events.module';
import { FootersModule } from './footers/footers.module';
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './home/home.component';

import { TeamModule } from './team/team.module';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { CountersService } from './counters/counters.service';
import { QueryModule } from './query/query.module';
import { TestimonialsService } from './testimonial/testimonials/testimonials.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NavbarModule,
    HeaderModule,
    AboutModule,
    PostersModule,
    CountersModule,
    TestimonialModule,
    FootersModule,
    SharedModule,
    EventsModule,
    TeamModule,
    HttpClientModule,
    QueryModule,
  ],
  providers: [AppService, CountersService, TestimonialsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
