import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MaterialModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { RegisterRoutingModule } from './register.routing'
import { RegisterComponent }   from './register.component'

@NgModule({
  imports: [
    RouterModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: []
})
export class RegisterModule { }