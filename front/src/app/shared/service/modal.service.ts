import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { ModalNotificacionComponent } from '../ui';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  protected readonly dialog = inject(MatDialog);

  abrirModalAdvertencia(mensaje: string): Observable<boolean> {
    return this.dialog
      .open(ModalNotificacionComponent, {
        data: { mensaje, tipo: 'advertencia' },
        autoFocus: false,
        disableClose: true,
        maxWidth: '500px',
      })
      .afterClosed();
  }

  abrirModalExito(mensaje: string): Observable<boolean> {
    return this.dialog
      .open(ModalNotificacionComponent, {
        data: { mensaje, tipo: 'exito' },
        autoFocus: false,
        disableClose: true,
        maxWidth: '500px',
      })
      .afterClosed();
  }

  abrirModalError(mensaje: string): Observable<boolean> {
    return this.dialog
      .open(ModalNotificacionComponent, {
        data: { mensaje, tipo: 'error' },
        autoFocus: false,
        disableClose: true,
        maxWidth: '500px',
      })
      .afterClosed();
  }
}
