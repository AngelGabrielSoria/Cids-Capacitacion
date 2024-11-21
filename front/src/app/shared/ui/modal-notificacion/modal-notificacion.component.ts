import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-modal-notificacion',
  standalone: true,
  imports: [MatDialogModule, MatIcon, MatButton],
  template: `
    <h2 mat-dialog-title class="text-center">{{ obtenerTitulo() }}</h2>

    <div class="flex justify-center">
      <mat-icon class="text-yellow-600">{{ obtenerIcono() }}</mat-icon>
    </div>

    <mat-dialog-content>
      <p class="text-center">{{ data.mensaje }}</p>
    </mat-dialog-content>

    <mat-dialog-actions>
      @if(data.tipo === 'advertencia') {
      <button mat-button [mat-dialog-close]="false">Cancelar</button>
      }
      <button mat-flat-button [mat-dialog-close]="true">Aceptar</button>
    </mat-dialog-actions>
  `,
  styles: `
  mat-icon {
    width: 60px;
    height: 60px;
    font-size: 60px;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalNotificacionComponent {
  readonly data = inject<{ mensaje: string; tipo: 'advertencia' | 'exito' | 'error' }>(MAT_DIALOG_DATA);

  obtenerTitulo(): string {
    switch (this.data.tipo) {
      case 'advertencia':
        return '¡Advertencia!';
      case 'exito':
        return '¡Éxito!';
      case 'error':
        return '¡Error!';
    }
  }

  obtenerIcono(): string {
    switch (this.data.tipo) {
      case 'advertencia':
        return 'warning';
      case 'exito':
        return 'check_circle';
      case 'error':
        return 'error';
    }
  }
}
