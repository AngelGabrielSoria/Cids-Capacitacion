import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-pie-de-pagina',
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar class="flex justify-start border border-t-gray-300" style="background-color: #ADD8E6;">
      <span class="text-sm">Creado por Angel Soria</span>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieDePaginaComponent {}
