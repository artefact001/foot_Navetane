import { Injectable , inject} from '@angular/core'
import { apiUrl } from './apiUrl';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

// export class TirageService {
//   private apiUrl = 'http://localhost:8000/api/tirages' // URL de l'API Laravel
  
       export class TirageService {
  private http = inject(HttpClient);
  


  // constructor (private http: HttpClient) {}

  // Obtenir tous les tirages
  getAllTirages (): Observable<any> {
    return this.http.get(`${apiUrl}`)
  }

  // Obtenir un tirage par son ID
  getTirageById (id: number): Observable<any> {
    return this.http.get(`${apiUrl}/${id}`)
  }

  // Ajouter un nouveau tirage
  addTirage (tirage: any): Observable<any> {
    return this.http.post(apiUrl, tirage)
  }

  // Mettre à jour un tirage existant
  updateTirage (id: number, tirage: any): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, tirage)
  }

  // Supprimer un tirage
  deleteTirage (id: number): Observable<any> {
    return this.http.delete(`${apiUrl}/${id}`)
  }
}
