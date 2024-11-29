import { Routes } from '@angular/router';
import { ProyectoService} from '../../domain';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../consultar-proyectos/consultar-proyectos.component').then(
        (m) => m.ConsultarProyectosComponent
      ),
    providers: [ProyectoService],
  },
   {
     path: 'registrar',
  loadComponent: () =>
       import('../registrar-proyecto/registrar-proyecto.component').then(
         (m) => m.RegistrarproyectoComponent
       ),
     providers: [ProyectoService],
 },
  // {
  //   path: 'ver/:id',
  //   loadComponent: () =>
  //     import('../ver-proyecto/ver-proyecto.component').then((m) => m.VerProyectoComponent),
  //   providers: [ProyectoService],
  // },

];
