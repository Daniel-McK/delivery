import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../_common/security'

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService : AuthenticationService) { }

  email: string
  password: string

  login() {
    this.authService.login(this.email, this.password)
  }

  ngOnInit() { }
}