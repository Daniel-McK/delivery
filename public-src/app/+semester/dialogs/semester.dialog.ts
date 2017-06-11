import { Component, OnInit } from '@angular/core'
import { MdDialogRef } from '@angular/material'
import { FormControl, Validators } from '@angular/forms'

import { DataService } from '../../_core/data'


@Component({
  selector: 'semester-dialog',
  templateUrl: './semester.dialog.html',
})
export class SemesterDialog implements OnInit {


  constructor(public dialogRef: MdDialogRef<SemesterDialog>, private dataService: DataService) { }

  nameControl = new FormControl()

  createSemester() {
    if (!this.nameControl.valid) {
      return;
    }
    var postBody = {
      name: this.nameControl.value,
      isCurrent: true
    }
    this.dataService.post('/api/semester', postBody)
      .subscribe(response => {
        var semester = response.json()
        semester.courses = []
        this.dialogRef.close(semester)
      })
  }

  ngOnInit(): void {
    this.nameControl.validator = Validators.required
  }

}