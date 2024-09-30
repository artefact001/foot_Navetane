import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Calendrier } from '../models/calendrier.model'

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {
  private apiUrl = 'http://localhost:3000/calendriers'

  constructor (private http: HttpClient) {}

  getCalendriers (): Observable<Calendrier[]> {
    return this.http.get<Calendrier[]>(this.apiUrl)
  }

  getCalendrierById (id: number): Observable<Calendrier> {
    return this.http.get<Calendrier>(`${this.apiUrl}/${id}`)
  }

  addCalendrier (calendrier: Calendrier): Observable<Calendrier> {
    return this.http.post<Calendrier>(this.apiUrl, calendrier)
  }

  updateCalendrier (id: number, calendrier: Calendrier): Observable<Calendrier> {
    return this.http.put<Calendrier>(`${this.apiUrl}/${id}`, calendrier)
  }

  deleteCalendrier (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
