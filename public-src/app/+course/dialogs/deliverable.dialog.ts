import { Component, OnInit } from '@angular/core'
import { MdDialogRef } from '@angular/material'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { DataService } from '../../_common/data'


@Component({
  selector: 'deliverable-dialog',
  templateUrl: './deliverable.dialog.html',
})
export class DeliverableDialog implements OnInit {


  constructor(public dialogRef: MdDialogRef<DeliverableDialog>, private dataService: DataService, private formBuilder: FormBuilder) { }

  deliverableForm: FormGroup

  createCourse() {
    if (!this.deliverableForm.valid) {
      return;
    }
    var postBody = this.deliverableForm
    this.dataService.post('/api/deliverable', postBody)
      .subscribe(response => {
        var body = response.json()
        this.dialogRef.close(body)
      })
  }

  ngOnInit(): void {
    this.deliverableForm = this.formBuilder.group({
      name: ['', Validators.required],
      isComplete: [false, Validators.required],
      due: '',
      mark: '',
      weight: [0, Validators.required],
      category: '',
      courseId: ['', Validators.required]
    })
  }

}