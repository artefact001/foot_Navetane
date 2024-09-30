import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { LicenceService } from '../services/licence.service'

@Injectable({
  providedIn: 'root'
})
export class LicenceGuard implements CanActivate {
  constructor (private licenceService: LicenceService, private router: Router) {}

  canActivate (): boolean {
    if (this.licenceService.hasValidLicence()) {
      return true
    } else {
      this.router.navigate(['/no-licence'])
      return false
    }
  }
}
