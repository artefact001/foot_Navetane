import { Injectable ,  inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { apiUrl } from './apiUrl';


@Injectable({
  providedIn: 'root'
})
// export class HistoriqueService {
//   private apiUrl = 'http://localhost:3000/historiques' // URL de l'API

  export class HistoriqueService {
  private http = inject(HttpClient);

  // constructor (private http: HttpClient) {}

  getHistoriques (): Observable<any> {
    return this.http.get(apiUrl)
  }
}
