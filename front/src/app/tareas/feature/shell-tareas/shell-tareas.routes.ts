import { Routes } from '@angular/router';
import { TareaService } from '../../domain';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('../consultar-tareas/consultar-tareas.component').then(
                (m) => m.ConsultarTareasComponent
            ),
        providers: [TareaService],
    },
    // {
    //   path: 'registrar',
    //   loadComponent: () =>
    //     import('../registrar-proyecto/registrar-proyecto.component').then(
    //       (m) => m.RegistrarproyectoComponent
    //     ),
    //   providers: [ProyectoService],
    // },
    // {
    //   path: 'ver/:id',
    //   loadComponent: () =>
    //     import('../ver-proyecto/ver-proyecto.component').then((m) => m.VerProyectoComponent),
    //   providers: [ProyectoService],
    // },
];
