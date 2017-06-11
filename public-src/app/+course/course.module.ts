import { NgModule } from '@angular/core'
import { CommonModule, DecimalPipe } from '@angular/common'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '../_shared'

import { CourseRoutingModule } from './course.routing'
import { CourseComponent } from './course.component'
import { DeliverableDialog } from './dialogs/deliverable.dialog'
import { MarkInputDialog } from './dialogs/mark-input.dialog'

@NgModule({
    imports: [
        CourseRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        CourseComponent,
        DeliverableDialog,
        MarkInputDialog
    ],
    entryComponents: [
        DeliverableDialog,
        MarkInputDialog
    ],
    providers: [
        DecimalPipe
    ]
})
export class CourseModule { }