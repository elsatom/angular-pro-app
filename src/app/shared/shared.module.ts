import { InputMaskDirective } from './../shared/directives/input-mask.directive';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    InputMaskDirective
  ],
  exports: [
    InputMaskDirective
  ],
  declarations: []
})
export class SharedModule { }
