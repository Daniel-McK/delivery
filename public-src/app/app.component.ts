import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { AuthenticationService } from './_common/security'

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: [
        'app.theming.scss',
        'app.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    constructor (private authenticationService : AuthenticationService){

    }

    ngOnInit(): void {
        this.authenticationService.verifyToken()
    }


}