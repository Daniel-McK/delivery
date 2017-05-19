import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../_common/security'
import { Router } from '@angular/router'
 
@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    constructor(private authService: AuthenticationService, private router: Router) { }

    ngOnInit() { 
        console.log('test')
    }

    logout() {
        this.authService.logout()
        this.router.navigateByUrl('/login')
    }
}