import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MdDialog } from '@angular/material'

import { DataService } from '../_common/data'
import { DeliverableDialog } from './dialogs/deliverable.dialog'


@Component({
    selector: 'course',
    templateUrl: 'course.component.html',
    styleUrls: ['course.component.scss']
})
export class CourseComponent implements OnInit {

    constructor(private dataService: DataService, private router: ActivatedRoute, private dialog: MdDialog) {
        this.router.params.subscribe(params => {
            this.getCourse(params.courseId)
        })
    }

    course: any

    ngOnInit() {
    }

    openDeliverableDialog() {
        var dialogRef = this.dialog.open(DeliverableDialog)
        dialogRef.componentInstance.courseId = this.course._id
        dialogRef.afterClosed()
            .subscribe(result => {
                if (result) {
                    this.course.semesters.push(result)
                }
            })
    }

    private getCourse(courseId) {
        console.log(courseId)
        this.dataService.get('/api/course/' + courseId)
            .map(response => {
                var body = response.json()
                if (body) {
                    this.course = body
                }
            })
            .subscribe()
    }
}