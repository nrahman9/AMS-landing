import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamMemberComponent } from './team-member/team-member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './footer/footer.component';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { PostersModule } from './posters/posters.module';
import { CountersModule } from './counters/counters.module';
import { TestimonialModule } from './testimonial/testimonial.module';
@NgModule({
  declarations: [AppComponent, TeamMemberComponent, FooterComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
