import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { PieDePaginaComponent } from '../pie-de-pagina/pie-de-pagina.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidenavComponent, EncabezadoComponent, MatSidenavModule, RouterOutlet, PieDePaginaComponent],
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="over" autoFocus="false" [(opened)]="opened">
        <app-sidenav  (toggleSidenav)="onToggleSidenav()" />
      </mat-sidenav>

      <mat-sidenav-content>
        <div class="min-h-screen flex flex-col">
          <app-encabezado (toggleSidenav)="onToggleSidenav()" />

          <div class="flex-grow p-8">
            <router-outlet />
          </div>

          <app-pie-de-pagina />
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  opened = false;

  onToggleSidenav() {
    this.opened = !this.opened;
  }
}

