import { Injectable  , inject} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Utilisateur } from '../models/userModel'
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
// export class utilisateurService {
//   private apiUrl = 'http://localhost:8000/utilisateurs'


export class utilisateurService
 {
  // Define the API URL for reclamations
  private apiUrl = `${apiUrl}/utilisateurs/api`

    constructor (private http: HttpClient) {}



  getUtilisateurs (): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(apiUrl)
  }

  getUtilisateurById (id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${apiUrl}/${id}`)
  }

  addUtilisateur (utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(apiUrl, utilisateur)
  }

  updateUtilisateur (
    id: number,
    utilisateur: Utilisateur
  ): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${apiUrl}/${id}`, utilisateur)
  }

  deleteUtilisateur (id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`)
  }
}
