import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Match } from '../models/MatchModel'

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = 'http://localhost:3000/matchs'

  constructor (private http: HttpClient) {}

  getMatchs (): Observable<Match[]> {
    return this.http.get<Match[]>(this.apiUrl)
  }

  getMatchById (id: number): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrl}/${id}`)
  }

  addMatch (match: Match): Observable<Match> {
    return this.http.post<Match>(this.apiUrl, match)
  }

  updateMatch (id: number, match: Match): Observable<Match> {
    return this.http.put<Match>(`${this.apiUrl}/${id}`, match)
  }

  deleteMatch (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
