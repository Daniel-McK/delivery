import { Component, OnInit } from '@angular/core'
import { URLSearchParams } from '@angular/http'
import { MdDialog } from '@angular/material'

import { DataService } from '../_common/data'
import { AuthenticationService } from '../_common/security'
import { SemesterDialog } from './dialogs/semester.dialog'
import { CourseDialog } from './dialogs/course.dialog'

@Component({
  selector: 'semester',
  templateUrl: 'semester.component.html',
  styleUrls: ['semester.component.scss']
})
export class SemesterComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private authService: AuthenticationService,
    private dialog: MdDialog) {
    this.getSemester()
  }

  semester: any

  ngOnInit() {
  }

  private getSemester() {
    var params = new URLSearchParams()
    params.set('userId', this.authService.getCurrentUserId())
    // @TODO add url param for specific semester
    this.dataService.get('/api/semester/default', params)
      .map(response => {
        var body = response.json()
        if (!body) {
          this.openSemesterDialog()
        }
        else {
          this.semester = body
        }
      })
      .subscribe()

  }

  openSemesterDialog() {
    var dialogRef = this.dialog.open(SemesterDialog)
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.semester = result
        }
      })
  }

  openCourseDialog() {
    var dialogRef = this.dialog.open(CourseDialog)
    dialogRef.componentInstance.semesterId = this.semester._id
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.semester.courses.push(result)
        }
      })
  }

}