import { Injectable  , inject} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Reclamation } from '../models/ReclamationModel'
import { apiUrl } from './apiUrl';
@Injectable({
  providedIn: 'root'
})
// export class ReclamationService {
//   private apiUrl = 'http://localhost:3000/reclamations'
  
     export class ReclamationService {
  private http = inject(HttpClient);

  // constructor (private http: HttpClient) {}

  getReclamations (): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(apiUrl)
  }

  getReclamationById (id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${apiUrl}/${id}`)
  }

  addReclamation (reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(apiUrl, reclamation)
  }

  updateReclamation (
    id: number,
    reclamation: Reclamation
  ): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${apiUrl}/${id}`, reclamation)
  }

  deleteReclamation (id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`)
  }
}
