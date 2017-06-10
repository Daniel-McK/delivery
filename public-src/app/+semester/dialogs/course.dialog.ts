import { Component, OnInit } from '@angular/core'
import { MdDialogRef } from '@angular/material'
import { FormControl, Validators } from '@angular/forms'

import { DataService } from '../../_core/data'


@Component({
  selector: 'course-dialog',
  templateUrl: './course.dialog.html',
})
export class CourseDialog implements OnInit {


  constructor(public dialogRef: MdDialogRef<CourseDialog>, private dataService: DataService) { }

  semesterId: any

  nameControl = new FormControl()

  createCourse() {
    if (!this.nameControl.valid) {
      return;
    }
    var postBody = {
      name: this.nameControl.value,
      semester: this.semesterId
    }
    this.dataService.post('/api/course', postBody)
      .subscribe(response => {
        var body = response.json()
        this.dialogRef.close(body)
      })
  }

  ngOnInit(): void {
    this.nameControl.validator = Validators.required
  }

}