import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TareaService } from '../../domain';
import { ModalService } from '../../../shared';
import { Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { TablaTareasComponent } from '../../ui';

@Component({
    selector: 'app-consultar-tareas.component',
    standalone: true,
    imports: [AsyncPipe, MatButton, TablaTareasComponent],
    templateUrl: './consultar-tareas.component.html',
    styleUrl: './consultar-tareas.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultarTareasComponent {
  protected readonly tareaService = inject(TareaService);
  protected readonly router = inject(Router);
  protected readonly modalService = inject(ModalService);

  tareas$ = this.tareaService.obtenerTareas();

  onRegistrar(): void {
    this.router.navigate(['/tareas/registrar']);
  }

  onVer(id: number): void {
    this.router.navigate(['/tareas/ver', id]);
  }

  onEditar(id: number): void {
    this.router.navigate(['/tareas/editar', id]);
  }

  onEliminar(id: number): void {
    this.modalService
      .abrirModalAdvertencia('¿Está seguro que desea eliminar esta Tarea?')
      .pipe(
        filter((res) => res),
        switchMap(() => this.tareaService.eliminarTarea(id)),
      )
      .subscribe();
  }
}
