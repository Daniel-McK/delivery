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
        this.dataService.get('/api/category')
            .subscribe(response => {
                var body = response.json()
                if(body){
                    this.categories = body;
                    console.log(this.categories)
                }
            });
    }

    categories: Array<any>

    course: any

    ngOnInit() {
    }

    openDeliverableDialog() {
        var dialogRef = this.dialog.open(DeliverableDialog)
        dialogRef.componentInstance.courseId = this.course._id
        dialogRef.afterClosed()
            .subscribe(result => {
                if (result) {
                    this.course.deliverables.push(result)
                }
            })
    }

    getStatus(deliverable) {
        if(typeof(deliverable.mark) !== 'undefined' && deliverable.mark !== null){
            return "Marked" 
        }
        if(deliverable.isComplete){
            return "Completed" 
        }
        return "In process"
    }

    getDisplayValue(value: number){
        if(typeof(value) === "undefined" || value == null){
            return '-'
        }
        return value + '%'
    }

    private getCourse(courseId) {
        console.log(courseId)
        this.dataService.get('/api/course/' + courseId)
            .subscribe(response => {
                var body = response.json()
                if (body) {
                    this.course = body
                }
            })
    }
}