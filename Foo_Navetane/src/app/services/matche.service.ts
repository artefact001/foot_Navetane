// src/app/services/match.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatcheService {
  private apiUrl = 'http://your-laravel-api-url/api';

  constructor(private http: HttpClient) {}

  getAllMatches(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/matches`);
  }

  getMatchById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/matches/${id}`);
  }

  createMatche(matchData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/matches`, matchData);
  }

  updateMatche(id: number, matchData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/matches/${id}`, matchData);
  }

  deleteMatche(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/matches/${id}`);
  }
}