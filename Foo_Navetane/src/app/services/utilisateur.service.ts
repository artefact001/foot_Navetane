import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8000/api/users' // L'URL de l'API backend Laravel

  constructor (private http: HttpClient) {}

  // Méthode pour ajouter un utilisateur
  addUtilisateur (data: any): Observable<any> {
    return this.http.post(this.apiUrl, data)
  }
}
