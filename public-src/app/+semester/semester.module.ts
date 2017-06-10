import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'

import { SettingsButtonComponent } from '../_core/settings-button/settings-button.component'

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
    CommonModule
  ],
  exports: [],
  declarations: [
    SemesterComponent,
    SemesterDialog,
    CourseDialog,
    SettingsButtonComponent
  ],
  entryComponents: [
    SemesterDialog,
    CourseDialog
  ],
  providers: []
})
export class SemesterModule { }