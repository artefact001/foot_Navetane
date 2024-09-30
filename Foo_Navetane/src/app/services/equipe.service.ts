import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Equipe } from '../models/EquipeModel'
@Injectable({
  providedIn: 'root'
})
export class equipeService {
  private apiUrl = 'http://localhost:3000/equipes'

  constructor (private http: HttpClient) {}

  getEquipes (): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl)
  }

  getEquipeById (id: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.apiUrl}/${id}`)
  }

  addEquipe (equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl, equipe)
  }

  updateEquipe (id: number, equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.apiUrl}/${id}`, equipe)
  }

  deleteEquipe (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
