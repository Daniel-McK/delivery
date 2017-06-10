import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../../_core/security'

@Component({
    selector: 'settings-button',
    templateUrl: 'settings-button.component.html',
    styleUrls: [
        'settings-button.component.scss'
    ]
})
export class SettingsButtonComponent implements OnInit {
    constructor (private authenticationService : AuthenticationService){

    }

    ngOnInit(): void {
        this.authenticationService.getCurrentUserId();
    }

    logout(): void {
        this.authenticationService.logout();
    }

}