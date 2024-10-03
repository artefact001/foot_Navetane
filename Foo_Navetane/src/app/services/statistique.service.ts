import { Injectable , inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Statistique } from '../models/StatistiqueModel'
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
// export class StatistiqueService {
//   private apiUrl = 'http://localhost:3000/statistiques'


     export class StatistiqueService {
  private http = inject(HttpClient);

  // constructor (private http: HttpClient) {}

  getStatistiques (): Observable<Statistique[]> {
    return this.http.get<Statistique[]>(apiUrl)
  }

  getStatistiqueById (id: number): Observable<Statistique> {
    return this.http.get<Statistique>(`${apiUrl}/${id}`)
  }

  addStatistique (statistique: Statistique): Observable<Statistique> {
    return this.http.post<Statistique>(apiUrl, statistique)
  }

  updateStatistique (
    id: number,
    statistique: Statistique
  ): Observable<Statistique> {
    return this.http.put<Statistique>(`${apiUrl}/${id}`, statistique)
  }

  deleteStatistique (id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`)
  }
}
