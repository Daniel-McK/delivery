import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { DataService } from '../data/data.service'
import { AuthenticationState } from './authentication-state.class'

@Injectable()
export class AuthenticationService {

    constructor(private dataService: DataService, private router: Router) { 
        this.state = new AuthenticationState()
    }

    state: AuthenticationState

    verifyToken() {
        return this.dataService.verifyToken()
            .map(response => {
                var body = response.json()
                if(body.success){
                    this.state.successfulLogin(body.user)
                    console.log('[AuthService]: Token verification Succesful, updating login state')
                }
                else {
                    this.router.navigateByUrl('/login')
                    console.log('[AuthService]: Token verification failed, redirecting to login')
                }
                return body
            })
            .subscribe()
    }

    login(email: string, password: string) {
        return this.dataService.login(email, password)
    }

    logout() {
        this.dataService.logout()
        this.state.reset()
    }

    getCurrentUserId() {
        return this.state.user.id
    }

}