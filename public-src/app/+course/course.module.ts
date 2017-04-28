import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'

import { CourseRoutingModule } from './course.routing'
import { CourseComponent } from './course.component'
import { DeliverableDialog } from './dialogs/deliverable.dialog'

@NgModule({
    imports: [
        CourseRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        CourseComponent,
        DeliverableDialog
    ],
    entryComponents: [
        DeliverableDialog
    ],
    providers: []
})
export class CourseModule { }