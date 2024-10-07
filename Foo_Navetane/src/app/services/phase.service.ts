import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Phase } from '../models/PhaseModel' // Import your Phase model
import { apiUrl } from './apiUrl' // Import the base URL for your API

@Injectable({
  providedIn: 'root'
})
export class PhaseService {
  // Define the API URL for phases
  private apiUrl = `${apiUrl}/phases/api` // Assuming `apiUrl` contains the base URL like http://127.0.0.1:8000

  // Inject HttpClient into the service
  constructor (private http: HttpClient) {}

  // Method to get all phases
  getPhases (): Observable<Phase[]> {
    return this.http.get<Phase[]>(this.apiUrl)
  }

  // Method to get a single phase by its ID
  getPhaseById (id: number): Observable<Phase> {
    return this.http.get<Phase>(`${this.apiUrl}/${id}`)
  }

  // Method to add a new phase
  addPhase (phase: Phase): Observable<Phase> {
    return this.http.post<Phase>(this.apiUrl, phase)
  }

  // Method to update an existing phase by its ID
  updatePhase (id: number, phase: Phase): Observable<Phase> {
    return this.http.put<Phase>(`${this.apiUrl}/${id}`, phase)
  }

  // Method to delete a phase by its ID
  deletePhase (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
