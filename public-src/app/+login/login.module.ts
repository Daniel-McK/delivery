import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { LoginRoutingModule } from './login.routing'
import { LoginComponent } from './login.component'

@NgModule({
  imports: [
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule { }