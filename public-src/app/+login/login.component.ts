import { Component, OnInit } from '@angular/core'
import { DataService } from '../_common/data/data.service'

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private dataService : DataService) { }

  email: string
  password: string

  login() {
    this.dataService.login(this.email, this.password)
  }

  ngOnInit() { }
}