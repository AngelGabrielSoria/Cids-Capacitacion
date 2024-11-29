import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

import { filter, switchMap } from 'rxjs';

import { ModalService } from '../../../shared';
import { DesarrolladorService } from '../../domain';
import { TablaDesarrolladoresComponent } from '../../ui';

@Component({
  selector: 'app-consultar-desarrolladores',
  standalone: true,
  imports: [AsyncPipe, TablaDesarrolladoresComponent, MatButton],
  templateUrl: './consultar-desarrolladores.component.html',
  styleUrl: './consultar-desarrolladores.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultarDesarrolladoresComponent {
  protected readonly desarrolladorService = inject(DesarrolladorService);
  protected readonly router = inject(Router);
  protected readonly modalService = inject(ModalService);

  desarrolladores$ = this.desarrolladorService.obtenerDesarrolladores();

  constructor() {}

  onRegistrar(): void {
    this.router.navigate(['/desarrolladores/registrar']);
  }

  onVer(id: number): void {
    this.router.navigate(['/desarrolladores/ver', id]);
  }

  onEditar(id: number): void {
    this.router.navigate(['/desarrolladores/editar', id]);
  }

  onEliminar(id: number): void {
    this.modalService
      .abrirModalAdvertencia('¿Está seguro que desea eliminar este desarrollador?')
      .pipe(
        filter((res) => res),
        switchMap(() => this.desarrolladorService.eliminarDesarrollador(id))
      )
      .subscribe();
  }
}
