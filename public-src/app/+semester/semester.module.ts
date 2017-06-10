import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../_shared'

import { SemseterRoutingModule } from './semester.routing'
import { SemesterComponent } from './semester.component'
import { SemesterDialog } from './dialogs/semester.dialog'
import { CourseDialog } from './dialogs/course.dialog'

@NgModule({
  imports: [
    SemseterRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    SemesterComponent,
    SemesterDialog,
    CourseDialog
  ],
  entryComponents: [
    SemesterDialog,
    CourseDialog
  ],
  providers: []
})
export class SemesterModule { }