import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Utilisateur } from '../models/utilisateur.model'

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:3000/utilisateurs'

  constructor (private http: HttpClient) {}

  getUtilisateurs (): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl)
  }

  getUtilisateurById (id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${id}`)
  }

  addUtilisateur (utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl, utilisateur)
  }

  updateUtilisateur (
    id: number,
    utilisateur: Utilisateur
  ): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.apiUrl}/${id}`, utilisateur)
  }

  deleteUtilisateur (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
