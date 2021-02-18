import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { MainRoutingModule } from './main-routing.module';
import { MainContainer } from './containers/main/main.container';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { BusinessSphereComponent } from './components/business-sphere/business-sphere.component';
import { BusinessCategoryCardComponent } from './components/business-category-card/business-category-card.component';
import { BusinessToolsComponent } from './components/business-tools/business-tools.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';


@NgModule({
  declarations: [
    MainContainer,
    NavbarComponent,
    MainHeaderComponent,
    BusinessSphereComponent,
    BusinessCategoryCardComponent,
    BusinessToolsComponent,
    FeedbacksComponent,
    FeedbackCardComponent,
    MainFooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,

    IvyCarouselModule,

    MainRoutingModule,
  ],
})
export class MainModule {
}
