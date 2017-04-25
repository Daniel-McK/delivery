import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { DataService } from '../_common/data'


@Component({
    selector: 'course',
    templateUrl: 'course.component.html',
    styleUrls: ['course.component.scss']
})
export class CourseComponent implements OnInit {

    constructor(private dataService: DataService, private router: ActivatedRoute) {
        this.router.params.subscribe(params => {
            this.getCourse(params.courseId)
        })
    }

    course: any

    ngOnInit() {
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