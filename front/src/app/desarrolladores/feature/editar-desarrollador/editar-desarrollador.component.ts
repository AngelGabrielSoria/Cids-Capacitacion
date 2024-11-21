import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-desarrollador',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './editar-desarrollador.component.html',
  styleUrl: './editar-desarrollador.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditarDesarrolladorComponent {

}
