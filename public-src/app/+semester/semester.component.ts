import { Component, OnInit } from '@angular/core'
import { URLSearchParams } from '@angular/http'
import { Router } from '@angular/router'

import { DataService } from '../_common/data'
import { AuthenticationService } from '../_common/security'

@Component({
  selector: 'semester',
  templateUrl: 'semester.component.html',
  styleUrls: ['semester.component.scss']
})
export class SemesterComponent implements OnInit {

  constructor(private dataService: DataService, private authService: AuthenticationService, private router: Router) {
    this.getSemester()
  }

  semester: any

  ngOnInit() { 
  }

  private getSemester() {
    var params = new URLSearchParams()
    params.set('userId', this.authService.getCurrentUserId())
    // @TODO add url param for specific semester
    this.dataService.get('/api/semester', params)
      .map(response => {
        var body = response.json() 
        if(!body){
          this.router.navigateByUrl('/home')
          return
        }
        this.semester = body
      })
      .subscribe()

  }


}