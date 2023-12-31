import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppIntroComponent } from './app-intro/app-intro.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppProjectsComponent } from './app-projects/app-projects.component';
import { AppTestimonialsComponent } from './app-testimonials/app-testimonials.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { LinkComponent } from './SubComponents/link/link.component';
import { TechCardComponent } from './SubComponents/tech-card/tech-card.component';
import { ProjectCardComponent } from './SubComponents/project-card/project-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { TechCardsCategoriesComponent } from './SubComponents/tech-cards-categories/tech-cards-categories.component';
import { TechCardsLegendComponent } from './SubComponents/tech-cards-legend/tech-cards-legend.component';
import { AboutMeIntroComponent } from './SubComponents/about-me-intro/about-me-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppIntroComponent,
    AppAboutComponent,
    AppProjectsComponent,
    AppTestimonialsComponent,
    AppFooterComponent,
    LinkComponent,
    TechCardComponent,
    ProjectCardComponent,
    TechCardsCategoriesComponent,
    TechCardsLegendComponent,
    AboutMeIntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
