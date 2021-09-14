import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TesimonialsComponent } from './tesimonials/tesimonials.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PosterComponent } from './poster/poster.component';
import { CounterComponent } from './counter/counter.component';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
@NgModule({
  declarations: [
    AppComponent,
    TesimonialsComponent,
    TeamMemberComponent,

    PosterComponent,
    CounterComponent,
    EventComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NavbarModule,
    HeaderModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
