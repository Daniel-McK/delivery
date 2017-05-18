import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService) {}

  canActivate() {
    return this.authService.state.isLoggedIn();
  }
}