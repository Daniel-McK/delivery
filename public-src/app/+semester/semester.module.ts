import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms'

import { SemseterRoutingModule } from './semester.routing'
import { SemesterComponent } from './semester.component'
import { SemesterDialog } from './dialog/semester.dialog'

@NgModule({
  imports: [
    SemseterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [],
  declarations: [
    SemesterComponent,
    SemesterDialog
  ],
  entryComponents: [
    SemesterDialog
  ],
  providers: []
})
export class SemesterModule { }