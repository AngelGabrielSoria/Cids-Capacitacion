import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ActualizarDesarrolladorDto, CrearDesarrolladorDto } from '../../dto';
import { Desarrollador, Rol } from '../../model';

@Injectable()
export class DesarrolladorService {
  protected readonly DESARROLLADORES_URL = 'http://localhost:3000/desarrolladores';
  protected readonly ROLES_URL = 'http://localhost:3000/roles';
  protected readonly http = inject(HttpClient);

  // Patron Observer
  obtenerDesarrolladores(): Observable<Desarrollador[]> {
    return this.http.get<Desarrollador[]>(this.DESARROLLADORES_URL);
  }

  obtenerDesarrollador(id: number): Observable<Desarrollador> {
    return this.http.get<Desarrollador>(`${this.DESARROLLADORES_URL}/${id}`);
  }

  crearDesarrollador(payload: CrearDesarrolladorDto): Observable<Desarrollador> {
    return this.http.post<Desarrollador>(this.DESARROLLADORES_URL, payload);
  }

  actualizarDesarrollador(id: number, payload: ActualizarDesarrolladorDto): Observable<Desarrollador> {
    return this.http.put<Desarrollador>(`${this.DESARROLLADORES_URL}/${id}`, payload);
  }

  eliminarDesarrollador(id: number): Observable<Desarrollador> {
    return this.http.delete<Desarrollador>(`${this.DESARROLLADORES_URL}/${id}`);
  }

  obtenerRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.ROLES_URL);
  }
}
