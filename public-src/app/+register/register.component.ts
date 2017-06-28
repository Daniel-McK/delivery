import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../_core/security'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    constructor(private authService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validator: this.matchingPasswords})
        if (this.authService.state.isLoggedIn()) {
            this.router.navigateByUrl('/semester')
        }
    }

    registerForm: FormGroup

    serverError: string

    register({ value, valid }: { value: any, valid: boolean }) {
        if (!valid) {
            return
        }
        this.registerForm.disable()
        this.authService.register(value.firstName, value.lastName, value.email, value.password)
            .subscribe(body => {
                if (body.success) {
                    this.router.navigateByUrl('/semester')
                    return
                }
                this.registerForm.enable()
                this.serverError = "Registration failed."
            })
    }

    matchingPasswords(form: FormGroup) {
        if (form.value.password !== form.value.confirmPassword) {
            return {
                passwordMismatch: true
            }
        }
    }
}