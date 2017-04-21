import { NgModule } from '@angular/core'
import { MaterialModule } from '@angular/material'
import { FormsModule } from '@angular/forms'

import { SemseterRoutingModule } from './semester.routing'
import { SemesterComponent } from './semester.component'

@NgModule({
  imports: [
    SemseterRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [],
  declarations: [SemesterComponent],
  providers: []
})
export class SemesterModule { }