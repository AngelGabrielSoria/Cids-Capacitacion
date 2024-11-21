import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  private readonly snackBar = inject(MatSnackBar);

  mostrarNotificacionExito(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      panelClass: 'notificacion-exito',
    });
  }

  mostrarNotificacionError(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      panelClass: 'notificacion-error',
    });
  }
}
