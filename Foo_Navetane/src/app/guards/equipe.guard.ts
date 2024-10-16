import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class EquipeGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router) {}

  canActivate (): boolean {
    if (this.authService.isUserInEquipe()) {
      // Implémentation isUserInEquipe dans AuthService
      return true
    } else {
      this.router.navigate(['/access-denied'])
      return false
    }
  }
}
