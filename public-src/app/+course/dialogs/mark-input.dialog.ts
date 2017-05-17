import { Component, OnInit } from '@angular/core'
import { MdDialogRef } from '@angular/material'
import { FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'mark-input-dialog',
  templateUrl: './mark-input.dialog.html',
})
export class MarkInputDialog implements OnInit {

  constructor(public dialogRef: MdDialogRef<MarkInputDialog>) { }
  
  markControl = new FormControl()

  updateMark() {
    if (!this.markControl.valid) {
      return;
    }
    this.dialogRef.close(this.markControl.value)
  }

  ngOnInit(): void {
    this.markControl.validator = Validators.required
  }

}