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
  styleUrls: ['./registrar-proyecto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrarproyectoComponent {
  private readonly proyectoService = inject(ProyectoService);
  private readonly notificacionService = inject(NotificacionService);
  private readonly router = inject(Router);

  desarrolladores$ = this.proyectoService.obtenerDesarrolladoresSinAsignar();

  onEnviarFormulario(payload: CrearProyectoDto): void {
    this.proyectoService.crearProyecto(payload).subscribe(() => {
      this.notificacionService.mostrarNotificacionExito('Proyecto registrado correctamente.');
      this.router.navigate(['/proyectos']);
    });
  }


}
