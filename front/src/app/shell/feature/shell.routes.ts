import { Routes } from '@angular/router';

import { LayoutComponent } from '../ui/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../../inicio/feature/inicio.component').then((m) => m.InicioComponent),
      },
      {
        path: 'desarrolladores',
        loadChildren: () =>
          import('../../desarrolladores/feature/shell-desarrolladores/shell-desarrolladores.routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'proyectos',
        loadChildren: () =>
          import('../../proyectos/feature/shell-proyectos/shell-proyectos.routes').then((m) => m.routes),
      },
      {
        path: 'tareas',
        loadChildren: () =>
          import('../../tareas/feature/shell-tareas/shell-tareas.routes').then((m) => m.routes),
      }
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
