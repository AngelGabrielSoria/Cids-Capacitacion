import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto} from '../../model';
import { CrearProyectoDto, ActualizarProyectoDto } from '../../dto';

@Injectable()
export class ProyectoService {
  protected readonly PROYECTOS_URL = 'http://localhost:3000/proyectos';
  protected readonly http = inject(HttpClient);

  obtenerProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.PROYECTOS_URL);
  }

  obtenerProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.PROYECTOS_URL}/${id}`);
  }

  crearProyecto(payload: CrearProyectoDto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.PROYECTOS_URL, payload);
  }

  actualizarProyecto(id: number, payload: ActualizarProyectoDto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.PROYECTOS_URL}/${id}`, payload);
  }

  eliminarProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(`${this.PROYECTOS_URL}/${id}`);
  }

  obtenerTareas(id: number): Observable<any> {
    return this.http.get<any>(`${this.PROYECTOS_URL}/{id}/tareas`);
  }
}
