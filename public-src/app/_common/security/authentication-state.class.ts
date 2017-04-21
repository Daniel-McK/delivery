import { AuthenticationStatus } from './authentication-status.enum'
import { User } from './user.class'

export class AuthenticationState {
    status: AuthenticationStatus = AuthenticationStatus.Unauthenticated
    user: User = null
    
    successfulLogin(user){
        this.status = AuthenticationStatus.Authenticated
        this.user = new User ()
        this.user.firstName = user.firstName
        this.user.lastName = user.lastName
        this.user.admin = user.admin
        this.user.email = user.email
        this.user.id = user._id
    }

    reset() {
        this.user = null
        this.status = AuthenticationStatus.Unauthenticated
    }

}