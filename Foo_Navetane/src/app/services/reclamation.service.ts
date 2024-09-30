import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Reclamation } from '../models/reclamation.model'

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:3000/reclamations'

  constructor (private http: HttpClient) {}

  getReclamations (): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl)
  }

  getReclamationById (id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/${id}`)
  }

  addReclamation (reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(this.apiUrl, reclamation)
  }

  updateReclamation (
    id: number,
    reclamation: Reclamation
  ): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.apiUrl}/${id}`, reclamation)
  }

  deleteReclamation (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
