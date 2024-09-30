import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import {TirageService} from '../services/tirage.service'

@Injectable({
  providedIn: 'root'
})
export class TirageGuard implements CanActivate {
  constructor (private TirageService: TirageService, private router: Router) {}

  canActivate (): boolean {
    if (this.TirageService.isAuthorizedForTirage()) {
      return true
    } else {
      this.router.navigate(['/unauthorized'])
      return false
    }
  }
}
