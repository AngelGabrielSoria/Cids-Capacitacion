import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProyectoService } from '../../domain';
import { ModalService } from '../../../shared';
import { Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { TablaProyectosComponent } from '../../ui';

@Component({
  selector: 'app-consultar-proyectos',
  templateUrl: './consultar-proyectos.component.html',
  standalone: true,
  imports: [AsyncPipe, MatButton, TablaProyectosComponent],
})
export class ConsultarProyectosComponent {
  protected readonly proyectoService = inject(ProyectoService);
  protected readonly router = inject(Router);
  protected readonly modalService = inject(ModalService);

  proyectos$ = this.proyectoService.obtenerProyectos();

  onRegistrar(): void {
    this.router.navigate(['/proyectos/registrar']);
  }

  onVer(id: number): void {
    this.router.navigate(['/proyectos/ver', id]);
  }

  onEditar(id: number): void {
    this.router.navigate(['/proyectos/editar', id]);
  }

  onEliminar(id: number): void {
    this.modalService
      .abrirModalAdvertencia('¿Está seguro que desea eliminar este Proyecto?')
      .pipe(
        filter((res) => res),
        switchMap(() => this.proyectoService.eliminarProyecto(id)),
      )
      .subscribe();
  }
}
