import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  private apiUrl = 'http://localhost:8000/api/tirages' // URL de l'API Laravel

  constructor (private http: HttpClient) {}

  // Obtenir tous les tirages
  getAllTirages (): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }

  // Obtenir un tirage par son ID
  getTirageById (id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  // Ajouter un nouveau tirage
  addTirage (tirage: any): Observable<any> {
    return this.http.post(this.apiUrl, tirage)
  }

  // Mettre à jour un tirage existant
  updateTirage (id: number, tirage: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, tirage)
  }

  // Supprimer un tirage
  deleteTirage (id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
