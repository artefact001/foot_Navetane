import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin: any
  isZone : any
  isEquipe : any
  constructor () {}

  isLoggedIn (): boolean {
    // Logique pour vérifier si l'utilisateur est connecté
    return !!localStorage.getItem('token') // Vérifie la présence d'un token
  }

  getUserRole (): string {
    // Logique pour obtenir le rôle de l'utilisateur
    return localStorage.getItem('role') || ''
  }
}
