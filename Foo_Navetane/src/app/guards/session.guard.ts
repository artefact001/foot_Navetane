import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { SessionService } from '../services/session.service'

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor (private sessionService: SessionService, private router: Router) {}

  canActivate (route: ActivatedRouteSnapshot): boolean {
    const sessionId = route.params['id']

    if (this.sessionService.isValidSession(sessionId)) {
      return true
    } else {
      this.router.navigate(['/session-expired'])
      return false
    }
  }
}
