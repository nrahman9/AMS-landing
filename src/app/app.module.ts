import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TesimonialsComponent } from './tesimonials/tesimonials.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AboutMoreComponent } from './about-more/about-more.component';
import { PosterComponent } from './poster/poster.component';
import { CounterComponent } from './counter/counter.component';
import { EventComponent } from './event/event.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    TesimonialsComponent,
    TeamMemberComponent,
    HeaderComponent,
    AboutComponent,
    AboutMoreComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
