import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainer } from './containers/main/main.container';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [MainContainer, NavbarComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ]
})
export class MainModule { }
