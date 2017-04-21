import { Injectable } from '@angular/core'

import { DataService } from '../data/data.service'
import { AuthenticationState } from './authentication-state.class'

@Injectable()
export class AuthenticationService {

    constructor(private dataService: DataService) { 
        this.authenticationState = new AuthenticationState()
    }

    authenticationState: AuthenticationState

    verifyToken() {
        this.dataService.verifyToken()
            .map(response => {
                var body = response.json()
                console.log(body)
                if(body.success){
                    this.authenticationState.successfulLogin(body.user)
                    console.log("logged in")
                }
            })
            .subscribe();
    }

    login(email: string, password: string){
        return this.dataService.login(email, password)
    }

}