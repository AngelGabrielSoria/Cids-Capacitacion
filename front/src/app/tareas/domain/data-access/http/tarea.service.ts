import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ActualizarTareaDto, CrearTareaDto } from '../../dto';
import { Tarea, Estado } from '../../model';

@Injectable()
export class TareaService {
    protected readonly TAREA_URL = 'http://localhost:3000/tareas';
    protected readonly ESTADO_URL = 'http://localhost:3000/estados';
    protected readonly http = inject(HttpClient);


    obtenerTareas(): Observable<Tarea[]> {
        return this.http.get<Tarea[]>(this.TAREA_URL);
    }

    obtenerTarea(id: number): Observable<Tarea> {
        return this.http.get<Tarea>(`${this.TAREA_URL}/${id}`);
    }

    crearTarea(payload: CrearTareaDto): Observable<Tarea> {
        return this.http.post<Tarea>(this.TAREA_URL, payload);
    }

    actualizarTarea(id: number, payload: ActualizarTareaDto): Observable<Tarea> {
        return this.http.put<Tarea>(`${this.TAREA_URL}/${id}`, payload);
    }

    eliminarTarea(id: number): Observable<Tarea> {
        return this.http.delete<Tarea>(`${this.TAREA_URL}/${id}`);
    }

    obtenerEstado(): Observable<Estado[]> {
        return this.http.get<Estado[]>(this.ESTADO_URL);
    }

    obtenerDesarrolladores(): Observable<any> {
        return this.http.get('http://localhost:3000/desarrolladores');
    }
}
