import { Routes } from '@angular/router';

import { DesarrolladorService } from '../../domain';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('../consultar-desarrolladores/consultar-desarrolladores.component').then(
				(m) => m.ConsultarDesarrolladoresComponent,
			),
		providers: [DesarrolladorService],
	},
	{
		path: 'registrar',
		loadComponent: () =>
			import('../registrar-desarrollador/registrar-desarrollador.component').then(
				(m) => m.RegistrarDesarrolladorComponent,
			),
		providers: [DesarrolladorService],
	},
	{
		path: 'ver/:id',
		loadComponent: () =>
			import('../ver-desarrollador/ver-desarrollador.component').then((m) => m.VerDesarrolladorComponent),
		providers: [DesarrolladorService],
	},
	{
		path: 'editar/:id',
		loadComponent: () =>
			import('../editar-desarrollador/editar-desarrollador.component').then(
				(m) => m.EditarDesarrolladorComponent,
			),
		providers: [DesarrolladorService],
	},
];
