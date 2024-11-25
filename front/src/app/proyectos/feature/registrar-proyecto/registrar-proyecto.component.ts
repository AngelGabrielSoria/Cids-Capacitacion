import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NotificacionService } from '../../../shared';
import { CrearProyectoDto, ProyectoService } from '../../domain';
import { FormularioProyectoComponent } from '../../ui';

@Component({
  selector: 'app-registrar-proyecto',
  standalone: true,
  imports: [FormularioProyectoComponent, AsyncPipe],
  templateUrl: './registrar-proyecto.component.html',
  styleUrl: './registrar-proyecto.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrarproyectoComponent {
  private readonly proyectoService = inject(ProyectoService);
  private readonly notificacionService = inject(NotificacionService);
  private readonly router = inject(Router);

  // proyecto$ = this.proyectoService.obtenerTareas();

  onEnviarFormulario(payload: CrearProyectoDto): void {
    this.proyectoService.crearProyecto(payload).subscribe(() => {
      this.notificacionService.mostrarNotificacionExito('proyecto registrado correctamente.');
      this.router.navigate(['/proyectoes']);
    });
  }
}
