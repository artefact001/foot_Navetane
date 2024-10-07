import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Reclamation } from '../models/ReclamationModel' // Import your Reclamation model
import { apiUrl } from './apiUrl' // Import the base URL for your API

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  // Define the API URL for reclamations
  private apiUrl = `${apiUrl}/reclamations/api`

  // Inject HttpClient into the service
  constructor (private http: HttpClient) {}

  // Method to get all reclamations
  getReclamations (): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl)
  }

  // Method to get a single reclamation by its ID
  getReclamationById (id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/${id}`)
  }

  // Method to add a new reclamation
  addReclamation (reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(this.apiUrl, reclamation)
  }

  // Method to update an existing reclamation by its ID
  updateReclamation (
    id: number,
    reclamation: Reclamation
  ): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.apiUrl}/${id}`, reclamation)
  }

  // Method to delete a reclamation by its ID
  deleteReclamation (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
