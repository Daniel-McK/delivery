import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../_common/security'
import { Router } from '@angular/router'
 
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private authService: AuthenticationService, private router: Router) { }

    ngOnInit() { }

    logout() {
        this.authService.logout()
        this.router.navigateByUrl('/login')
    }
}