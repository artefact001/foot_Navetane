import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Competition } from '../models/CompetitionModel'
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private apiUrl = 'http://localhost:3000/competitions'

  constructor (private http: HttpClient) {}

  getCompetitions (): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.apiUrl)
  }

  getCompetitionById (id: number): Observable<Competition> {
    return this.http.get<Competition>(`${this.apiUrl}/${id}`)
  }

  addCompetition (competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(this.apiUrl, competition)
  }

  updateCompetition (
    id: number,
    competition: Competition
  ): Observable<Competition> {
    return this.http.put<Competition>(`${this.apiUrl}/${id}`, competition)
  }

  deleteCompetition (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
