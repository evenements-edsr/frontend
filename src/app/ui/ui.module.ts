import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { DisplayErrorsComponent } from './display-errors/display-errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DisplayErrorsComponent,
  ],
  exports : [
    DisplayErrorsComponent,
  ]
})
export class UiModule { }
