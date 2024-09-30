import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class ZoneGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router) {}

  canActivate (): boolean {
    if (this.authService.isZone()) {
      // Implémentation isUserInZone dans AuthService
      return true
    } else {
      this.router.navigate(['/access-denied'])
      return false
    }
  }
}
