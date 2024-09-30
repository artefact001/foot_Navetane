import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {Statistique} from '../models/statistique.model'
import { Statistique } from '../../models/statistiquemodel'
@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private apiUrl = 'http://localhost:3000/statistiques'

  constructor (private http: HttpClient) {}

  getStatistiques (): Observable<Statistique[]> {
    return this.http.get<Statistique[]>(this.apiUrl)
  }

  getStatistiqueById (id: number): Observable<Statistique> {
    return this.http.get<Statistique>(`${this.apiUrl}/${id}`)
  }

  addStatistique (statistique: Statistique): Observable<Statistique> {
    return this.http.post<Statistique>(this.apiUrl, statistique)
  }

  updateStatistique (
    id: number,
    statistique: Statistique
  ): Observable<Statistique> {
    return this.http.put<Statistique>(`${this.apiUrl}/${id}`, statistique)
  }

  deleteStatistique (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
