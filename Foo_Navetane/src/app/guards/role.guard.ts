import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import {RoleService} from '../services/role.service'


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router) {}

  canActivate (route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole
    const currentRole = this.authService.getUserRole()

    if (this.authService.isLoggedIn() && currentRole === expectedRole) {
      return true
    } else {
      this.router.navigate(['/unauthorized'])
      return false
    }
  }
}
