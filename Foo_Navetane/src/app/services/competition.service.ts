// import { Injectable, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
// import { Observable } from 'rxjs'
// import { Competition } from '../models/CompetitionModel'
// import { apiUrl } from './apiUrl';

// @Injectable({
//   providedIn: 'root'
// })
// export class CompetitionService {
//   private http = inject(HttpClient);

//   getCompetitions (): Observable<Competition[]> {
//     return this.http.get<Competition[]>(apiUrl)
//   }

//   getCompetitionById (id: number): Observable<Competition> {
//     return this.http.get<Competition>(`${apiUrl}/${id}`)
//   }

//   addCompetition (competition: Competition): Observable<Competition> {
//     return this.http.post<Competition>(apiUrl, competition)
//   }

//   updateCompetition (
//     id: number,
//     competition: Competition
//   ): Observable<Competition> {
//     return this.http.put<Competition>(`${apiUrl}/${id}`, competition)
//   }

//   deleteCompetition (id: number): Observable<void> {
//     return this.http.delete<void>(`${apiUrl}/${id}`)
//   }
// }




import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private apiUrl = 'https://example.com/api' // Remplacez par l'URL réelle de votre API

  constructor (private http: HttpClient) {}

  // Méthode pour ajouter une compétition
  addCompetition (competitionData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/competitions`, competitionData)
  }

  // Méthode pour obtenir les zones
  getZones (): Observable<any> {
    return this.http.get(`${this.apiUrl}/zones`)
  }
}
