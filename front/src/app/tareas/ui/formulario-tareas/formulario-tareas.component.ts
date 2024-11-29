import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { CrearTareaDto } from '../../domain';
import {Desarrollador} from '../../../desarrolladores/domain';

const FORM_KEYS = {
  titulo: 'titulo',
  descripcion: 'descripcion',
  fechaInicio: 'fechaInicio',
  fechaLimite: 'fechaLimite',
  asignado: 'asignado',
} as const;

type FormularioRegistro = {
  [FORM_KEYS.titulo]: FormControl<string>;
  [FORM_KEYS.descripcion]: FormControl<string>;
  [FORM_KEYS.fechaInicio]: FormControl<string>;
  [FORM_KEYS.fechaLimite]: FormControl<string>;
  [FORM_KEYS.asignado]: FormControl<string>;
};
@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './formulario-tareas.component.html',
  styleUrl: './formulario-tareas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioTareaComponent {
  @Input() readonly esRegistro = true;
  @Input() readonly soloLectura = false;

  @Input({ required: true }) asignados!: Desarrollador[];

  @Output() readonly enviarFormulario = new EventEmitter<CrearTareaDto>();

  readonly formKeys = FORM_KEYS;
  protected readonly fb = inject(NonNullableFormBuilder);

  form = this.fb.group<FormularioRegistro>({
    [FORM_KEYS.titulo]: this.fb.control('', [Validators.required]),
    [FORM_KEYS.descripcion]: this.fb.control('', [Validators.required]),
    [FORM_KEYS.fechaInicio]: this.fb.control('', [Validators.required]),
    [FORM_KEYS.fechaLimite]: this.fb.control('', [Validators.required]),
    [FORM_KEYS.asignado]: this.fb.control('', [Validators.required]),
  });


  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { titulo, descripcion, fechaInicio, fechaLimite, asignado } = this.form.getRawValue();
    const payload: CrearTareaDto = {
      titulo,
      descripcion,
      fechaInicio: new Date(fechaInicio),
      fechaLimite: new Date(fechaLimite),
      asignado: this.asignados.find(({ id }) => id === +asignado) as Desarrollador,
    };

    this.enviarFormulario.emit(payload);
  }

  get titulo(): FormControl<string> {
    return this.form.get(FORM_KEYS.titulo) as FormControl<string>;
  }

  get descripcion(): FormControl<string> {
    return this.form.get(FORM_KEYS.descripcion) as FormControl<string>;
  }

  get fechaInicio(): FormControl<string> {
    return this.form.get(FORM_KEYS.fechaInicio) as FormControl<string>;
  }

  get fechaLimite(): FormControl<string> {
    return this.form.get(FORM_KEYS.fechaLimite) as FormControl<string>;
  }

  get asignado(): FormControl<string> {
    return this.form.get(FORM_KEYS.asignado) as FormControl<string>;
  }
}
