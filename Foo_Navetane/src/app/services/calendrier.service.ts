import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Calendrier } from '../models/CalendrierModel'
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {
  private http = inject(HttpClient);

  // constructor (private http: HttpClient) {}

  getCalendriers (): Observable<Calendrier[]> {
    return this.http.get<Calendrier[]>(apiUrl)
  }

  getCalendrierById (id: number): Observable<Calendrier> {
    return this.http.get<Calendrier>(`${apiUrl}/${id}`)
  }

  addCalendrier (calendrier: Calendrier): Observable<Calendrier> {
    return this.http.post<Calendrier>(apiUrl, calendrier)
  }

  updateCalendrier (id: number, calendrier: Calendrier): Observable<Calendrier> {
    return this.http.put<Calendrier>(`${apiUrl}/${id}`, calendrier)
  }

  deleteCalendrier (id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`)
  }
}
