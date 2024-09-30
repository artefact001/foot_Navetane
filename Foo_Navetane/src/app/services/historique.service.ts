import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  private apiUrl = 'http://localhost:3000/historiques' // URL de l'API

  constructor (private http: HttpClient) {}

  getHistoriques (): Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
