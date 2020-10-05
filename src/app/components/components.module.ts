import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [HomeComponent, ErrorPageComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
