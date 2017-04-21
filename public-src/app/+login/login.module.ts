import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'
import { FormsModule } from '@angular/forms'

import { LoginRoutingModule } from './login.routing'
import { LoginComponent } from './login.component'

@NgModule({
  imports: [
    LoginRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule { }