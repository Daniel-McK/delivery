import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../_common/security'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    if (this.authService.state.isLoggedIn()) {
      this.router.navigateByUrl('/semester')
    }
  }

  loginForm: FormGroup

  serverError: string

  login({value, valid}: {value: any, valid: boolean}) {
    if(!valid){
      return
    }
    this.authService.login(value.email, value.password)
      .subscribe(body => {
        if(body.success){
          this.router.navigateByUrl('/semester')
          return
        }
        this.serverError = "Invalid email/password combination."
      })
  }
}