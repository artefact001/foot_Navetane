import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Phase } from '../models/phase.model'

@Injectable({
  providedIn: 'root'
})
export class PhaseService {
  private apiUrl = 'http://localhost:3000/phases'

  constructor (private http: HttpClient) {}

  getPhases (): Observable<Phase[]> {
    return this.http.get<Phase[]>(this.apiUrl)
  }

  getPhaseById (id: number): Observable<Phase> {
    return this.http.get<Phase>(`${this.apiUrl}/${id}`)
  }

  addPhase (phase: Phase): Observable<Phase> {
    return this.http.post<Phase>(this.apiUrl, phase)
  }

  updatePhase (id: number, phase: Phase): Observable<Phase> {
    return this.http.put<Phase>(`${this.apiUrl}/${id}`, phase)
  }

  deletePhase (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
