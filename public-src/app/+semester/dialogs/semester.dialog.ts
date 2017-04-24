import { Component, OnInit } from '@angular/core'
import { MdDialogRef } from '@angular/material'
import { FormControl, Validators } from '@angular/forms'

import { DataService } from '../../_common/data'


@Component({
  selector: 'semester-dialog',
  templateUrl: './semester.dialog.html',
})
export class SemesterDialog implements OnInit {


  constructor(public dialogRef: MdDialogRef<SemesterDialog>, private dataService: DataService) { }

  nameControl = new FormControl()

  createSemester() {
    if (!this.nameControl.valid) {

    }
    var postBody = {
      name: this.nameControl.value,
      isCurrent: true
    }
    this.dataService.post('/api/semester', postBody)
      .subscribe(response => {
        var body = response.json()
        this.dialogRef.close(body)
      })
  }

  ngOnInit(): void {
    this.nameControl.validator = Validators.required
  }

}