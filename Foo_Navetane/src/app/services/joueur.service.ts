import { Injectable , inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Joueur } from '../models/JoueurModel'
import { apiUrl } from './apiUrl';
@Injectable({
  providedIn: 'root'
})
// export class JoueurService {
  // private apiUrl = 'http://localhost:8000/joueurs'

  export class JoueurService {
  private http = inject(HttpClient);

  // constructor (private http: HttpClient) {}

  getJoueurs (): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(apiUrl)
  }

  getJoueurById (id: number): Observable<Joueur> {
    return this.http.get<Joueur>(`${apiUrl}/${id}`)
  }

  addJoueur (joueur: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(apiUrl, joueur)
  }

  updateJoueur (id: number, joueur: Joueur): Observable<Joueur> {
    return this.http.put<Joueur>(`${apiUrl}/${id}`, joueur)
  }

  deleteJoueur (id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`)
  }
}
