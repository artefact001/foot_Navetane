import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiUrl } from './apiUrl';

// // Exemple d'utilisation dans un service
// this.http.get(API_URLS.users.getAll).subscribe(response => {
//     console.log(response);
// });



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private http = inject(HttpClient);

  // Configuration des en-têtes, incluant le token d'autorisation récupéré depuis le localStorage
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('Token')}` // Ajout du token dans les requêtes
  });

  constructor() { }

  // Gérer les erreurs d'API
  private handleError(error: any): Observable<never> {
    console.error('Une erreur est survenue :', error);
    throw error; // Lever l'erreur pour être gérée par l'appelant
  }
}
