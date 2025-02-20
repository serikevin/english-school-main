import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from './professor';

@Injectable({ providedIn: 'root' })
export class ProfessorService {
  private apiUrl = 'http://localhost:3000/api/professores'; // Ajuste a URL da API

  constructor(private http: HttpClient) {}

  getProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl);
  }

  getProfessor(id: string): Observable<Professor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Professor>(url);
  }
}
