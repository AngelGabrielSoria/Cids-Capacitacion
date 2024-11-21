import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NotificacionService } from '../../../shared';
import { CrearDesarrolladorDto, DesarrolladorService } from '../../domain';
import { FormularioDesarrolladorComponent } from '../../ui';

@Component({
  selector: 'app-registrar-desarrollador',
  standalone: true,
  imports: [FormularioDesarrolladorComponent, AsyncPipe],
  templateUrl: './registrar-desarrollador.component.html',
  styleUrl: './registrar-desarrollador.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrarDesarrolladorComponent {
  private readonly desarrolladorService = inject(DesarrolladorService);
  private readonly notificacionService = inject(NotificacionService);
  private readonly router = inject(Router);

  roles$ = this.desarrolladorService.obtenerRoles();

  onEnviarFormulario(payload: CrearDesarrolladorDto): void {
    this.desarrolladorService.crearDesarrollador(payload).subscribe(() => {
      this.notificacionService.mostrarNotificacionExito('Desarrollador registrado correctamente.');
      this.router.navigate(['/desarrolladores']);
    });
  }
}
