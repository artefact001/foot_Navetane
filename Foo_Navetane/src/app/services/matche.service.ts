import { Injectable , inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { matche } from '../models/matcheModel'
import { apiUrl } from './apiUrl';


@Injectable({
  providedIn: 'root'
})
// export class matcheService {
//   private apiUrl = 'http://localhost:3000/matches'

  export class matcheService {
  private http = inject(HttpClient);

  // constructor (private http: HttpClient) {}

  getmatches (): Observable<matche[]> {
    return this.http.get<matche[]>(`${apiUrl}/matches`)
  }

  getmatcheById (id: number): Observable<matche> {
    return this.http.get<matche>(`${apiUrl}/matches/${id}`)
  }

  addmatche (matche: matche): Observable<matche> {
    return this.http.post<matche>(`${apiUrl}/matches`, matche)
  }

  updatematche (id: number, matche: matche): Observable<matche> {
    return this.http.put<matche>(`${apiUrl}/matches/${id}`, matche)
  }

  deletematche (id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/matches/${id}`)
  }
}
