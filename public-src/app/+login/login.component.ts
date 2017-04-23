import { Component, OnInit } from '@angular/core'
import { AuthenticationService, AuthenticationStatus } from '../_common/security'
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) {
    if (this.authService.state.status == AuthenticationStatus.Authenticated) {
      this.router.navigateByUrl('/home')
    }
  }

  email: string
  password: string

  login() {
    this.authService.login(this.email, this.password)
      .map(() => {

      })
      .subscribe()
  }

  ngOnInit() { }
}