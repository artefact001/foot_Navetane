import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs' // Ajoutez `of` ici
import { catchError } from 'rxjs/operators'
import { Role } from '../models/RoleModel' // Modèle de Role

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'http://localhost:8000/api/roles' // URL de base pour l'API des rôles

  constructor (private http: HttpClient) {}

  // Headers pour les requêtes HTTP (ex: ajout de l'authentification si nécessaire)
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Récupérer tous les rôles
  getRoles (): Observable<Role[]> {
    return this.http
      .get<Role[]>(this.apiUrl)
      .pipe(catchError(this.handleError<Role[]>('getRoles', [])))
  }

  // Récupérer un rôle par ID
  getRoleById (id: number): Observable<Role> {
    const url = `${this.apiUrl}/${id}`
    return this.http
      .get<Role>(url)
      .pipe(catchError(this.handleError<Role>(`getRole id=${id}`)))
  }

  // Ajouter un nouveau rôle
  addRole (role: Role): Observable<Role> {
    return this.http
      .post<Role>(this.apiUrl, role, this.httpOptions)
      .pipe(catchError(this.handleError<Role>('addRole')))
  }

  // Mettre à jour un rôle existant
  updateRole (id: number, role: Role): Observable<any> {
    const url = `${this.apiUrl}/${id}`
    return this.http
      .put(url, role, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateRole')))
  }

  // Supprimer un rôle
  deleteRole (id: number): Observable<Role> {
    const url = `${this.apiUrl}/${id}`
    return this.http
      .delete<Role>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Role>('deleteRole')))
  }

  // Gestion des erreurs
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error) // Afficher l'erreur dans la console
      return of(result as T) // Retourner un résultat par défaut pour que l'application continue
    }
  }
}
