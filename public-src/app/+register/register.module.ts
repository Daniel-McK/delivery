import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { RegisterRoutingModule } from './register.routing'
import { RegisterComponent }   from './register.component'

@NgModule({
  imports: [
    RouterModule,
    RegisterRoutingModule
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: []
})
export class RegisterModule { }