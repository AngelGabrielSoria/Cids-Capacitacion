import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  template: `
    <div class="h-full flex flex-col justify-center items-center">
      <h1 class="text-xl text-center">Aplicación de gestión de proyectos</h1>
      <p class="text-lg text-center">Desarrollada con</p>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
        @for (logo of logos; track logo.name) {
        <div class="flex flex-col items-center ">
          <img [src]="logo.url" [alt]="'Logo ' + logo.name" class="w-28 h-28 md:w-24 md:h-24" />
          <p>{{ logo.name }}</p>
        </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {
  logos = [
    {
      name: 'Angular',
      url: '/assets/angular.svg',
    },
    {
      name: 'Angular Material',
      url: '/assets/angular-material.svg',
    },
    {
      name: 'Node.js',
      url: '/assets/nodejs.svg',
    },
    {
      name: 'Express.js',
      url: './assets/expressjs.svg',
    },
    {
      name: 'TypeORM',
      url: '/assets/typeorm.svg',
    },
    {
      name: 'PostgreSQL',
      url: '/assets/postgresql.svg',
    },
  ];
}
