import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainer } from './containers/main/main.container';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [MainContainer],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
