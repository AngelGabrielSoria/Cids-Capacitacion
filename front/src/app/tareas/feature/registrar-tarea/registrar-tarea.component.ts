import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NotificacionService } from '../../../shared';
import { CrearTareaDto, TareaService } from '../../domain';
import { FormularioTareaComponent } from '../../ui';

@Component({
    selector: 'app-registrar-tarea',
    standalone: true,
    imports: [FormularioTareaComponent, AsyncPipe],
    templateUrl: './registrar-tarea.component.html',
    styleUrl: './registrar-tarea.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrarTareaComponent {
    private readonly tareaService = inject(TareaService);
    private readonly notificacionService = inject(NotificacionService);
    private readonly router = inject(Router);

    asignados$ = this.tareaService.obtenerDesarrolladores();

    onEnviarFormulario(payload: CrearTareaDto): void {
        this.tareaService.crearTarea(payload).subscribe(() => {
            this.notificacionService.mostrarNotificacionExito('Tarea registrado correctamente.');
            this.router.navigate(['/tareas']);
        });
    }
}
