import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TesimonialsComponent } from './tesimonials/tesimonials.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { PostersModule } from './posters/posters.module';
import { CountersModule } from './counters/counters.module';
@NgModule({
  declarations: [
    AppComponent,
    TesimonialsComponent,
    TeamMemberComponent,

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
    PostersModule,
    CountersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
