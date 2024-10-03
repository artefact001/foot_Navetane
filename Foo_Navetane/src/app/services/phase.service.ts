import { Injectable ,  inject} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Phase } from '../models/PhaseModel'
import { apiUrl } from './apiUrl';
@Injectable({
  providedIn: 'root'
})
// export class PhaseService {
//   private apiUrl = 'http://localhost:3000/phases'
  
  
   export class PhaseService {
  private http = inject(HttpClient);

  // constructor (private http: HttpClient) {}

  getPhases (): Observable<Phase[]> {
    return this.http.get<Phase[]>(apiUrl)
  }

  getPhaseById (id: number): Observable<Phase> {
    return this.http.get<Phase>(`${apiUrl}/${id}`)
  }

  addPhase (phase: Phase): Observable<Phase> {
    return this.http.post<Phase>(apiUrl, phase)
  }

  updatePhase (id: number, phase: Phase): Observable<Phase> {
    return this.http.put<Phase>(`${apiUrl}/${id}`, phase)
  }

  deletePhase (id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`)
  }
}
