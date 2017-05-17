import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MdDialog } from '@angular/material'

import { DataService } from '../_common/data'
import { DeliverableDialog } from './dialogs/deliverable.dialog'
import { MarkInputDialog } from './dialogs/mark-input.dialog'


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
                }
            });
    }

    completionPercentage = -1
    currentGrade = -1
    percentMarked = -1

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

    canInputMark(deliverable){
        return deliverable.isComplete && this.getDisplayValue(deliverable.mark) == '-'
    }

    beginInputMark(deliverable){
        var dialogRef = this.dialog.open(MarkInputDialog)
        dialogRef.afterClosed()
            .subscribe(result => {
                if (typeof(result) === 'number') {
                    deliverable.mark = result
                    this.saveDeliverable(deliverable)
                }
            })
    }

    completeDeliverable(deliverable){
        deliverable.isComplete = true
        return this.saveDeliverable(deliverable)
    }

    updateCompletionPercentage(){
        if (this.course.deliverables.length === 0){
            this.completionPercentage = -1
            this.currentGrade = -1
        }
        var sumWeight = 0
        var sumDone = 0
        var sumMarked = 0
        var sumGrades = 0
        this.course.deliverables.forEach(deliverable => {
            sumWeight += deliverable.weight
            if(deliverable.isComplete){
                sumDone += deliverable.weight
            }
            if(typeof(deliverable.mark) === 'number'){
                sumMarked += deliverable.weight
                sumGrades += (deliverable.mark / 100) * deliverable.weight
            }
        });
        this.completionPercentage = sumDone * 100 / sumWeight
        this.percentMarked = sumMarked * 100 / sumWeight
        if(sumMarked == 0){
            this.currentGrade = -1;
        }
        else {
            this.currentGrade = sumGrades * 100 / sumMarked
        }
    }

    private saveDeliverable (deliverable){
        return this.dataService.put('/api/deliverable/' + deliverable._id, deliverable)
            .subscribe(() => {
                this.updateCompletionPercentage()
            })
    }

    private getCourse(courseId) {
        this.dataService.get('/api/course/' + courseId)
            .subscribe(response => {
                var body = response.json()
                if (body) {
                    this.course = body
                    this.updateCompletionPercentage()
                }
            })
    }
}