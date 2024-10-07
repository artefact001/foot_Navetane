import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Equipe } from '../models/EquipeModel' // Import your Equipe model
import { apiUrl } from './apiUrl' // Import the base URL for your API

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private apiUrl = `${apiUrl}/equipe/api`

  // Inject HttpClient into the service
  constructor (private http: HttpClient) {}

  // Method to get all equipes
  getEquipes (): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl)
  }

  // Method to get a single equipe by its ID
  getEquipeById (id: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.apiUrl}/${id}`)
  }

  // Method to add a new equipe
  addEquipe (equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl, equipe)
  }

  // Method to update an existing equipe by its ID
  updateEquipe (id: number, equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.apiUrl}/${id}`, equipe)
  }

  // Method to delete an equipe by its ID
  deleteEquipe (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
