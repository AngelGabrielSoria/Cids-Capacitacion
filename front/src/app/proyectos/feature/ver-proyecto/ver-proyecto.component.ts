import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectoService} from '../../domain';
import { ModalService } from '../../../shared';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ver-proyecto',
  standalone: true,
  imports: [],
  templateUrl: './ver-proyecto.component.ts',
  styleUrl: './ver-proyecto.component.ts',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerProyectoComponent {
  protected readonly proyectoService = inject(ProyectoService);
  protected readonly router = inject(Router);
  protected readonly modalService = inject(ModalService);
  proyecto = null;

  constructor() {
  }



}
