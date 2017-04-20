import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'

import { LoginRoutingModule } from './login.routing'
import { LoginComponent } from './login.component'

@NgModule({
  imports: [
    LoginRoutingModule,
    MaterialModule
  ],
  exports: [],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule { }