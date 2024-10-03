import { Injectable,  inject} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Equipe } from '../models/EquipeModel'
import { apiUrl } from './apiUrl';



@Injectable({
  providedIn: 'root'
})


  export class equipeService {
  private http = inject(HttpClient);

  getEquipes (): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(apiUrl)
  }

  getEquipeById (id: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${apiUrl}/${id}`)
  }

  addEquipe (equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(apiUrl, equipe)
  }

  updateEquipe (id: number, equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${apiUrl}/${id}`, equipe)
  }

  deleteEquipe (id: number): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`)
  }
}
