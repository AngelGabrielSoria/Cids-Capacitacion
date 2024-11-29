import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { CrearProyectoDto } from '../../domain';
import { Desarrollador } from '../../../desarrolladores/domain';

const FORM_KEYS = {
  nombre: 'nombre',
  fechaInicio: 'fechaInicio',
  fechaFin: 'fechaFin',
  descripcion: 'descripcion',
  responsable: 'responsable',
} as const;

type FormularioRegistro = {
  [FORM_KEYS.nombre]: FormControl<string>;
  [FORM_KEYS.descripcion]: FormControl<string>;
  [FORM_KEYS.fechaInicio]: FormControl<string>;
  [FORM_KEYS.fechaFin]: FormControl<string>;
  [FORM_KEYS.responsable]: FormControl<string>;
};

@Component({
  selector: 'app-formulario-proyecto',
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
  templateUrl: './formulario-proyecto.component.html',
  styleUrls: ['./formulario-proyecto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioProyectoComponent {
  @Input() readonly esRegistro = true;
  @Input() readonly soloLectura = false;
  @Input({ required: true }) desarrolladores!: Desarrollador[];

  @Output() readonly enviarFormulario = new EventEmitter<CrearProyectoDto>();

  readonly formKeys = FORM_KEYS;
  protected readonly fb = inject(NonNullableFormBuilder);

  form = this.fb.group<FormularioRegistro>({
    [FORM_KEYS.nombre]: this.fb.control('', [Validators.required]),
    [FORM_KEYS.descripcion]: this.fb.control('', [Validators.required]),
    [FORM_KEYS.fechaInicio]: this.fb.control('', [Validators.required]),
    [FORM_KEYS.fechaFin]: this.fb.control(''),
    [FORM_KEYS.responsable]: this.fb.control('', [Validators.required])
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { nombre, descripcion, fechaInicio, fechaFin, responsable } = this.form.getRawValue();
    const responsableId = parseInt(responsable, 10);
    const desarrolladorResponsable = this.desarrolladores.find(({ id }) => id === responsableId);

    const payload: CrearProyectoDto = {
      nombre,
      descripcion,
      fechaInicio: new Date(fechaInicio),
      fechaFin: new Date(fechaFin),
      responsable: desarrolladorResponsable as Desarrollador,
    };

    this.enviarFormulario.emit(payload);
  }

  get nombre(): FormControl<string> {
    return this.form.get(FORM_KEYS.nombre) as FormControl<string>;
  }

  get descripcion(): FormControl<string> {
    return this.form.get(FORM_KEYS.descripcion) as FormControl<string>;
  }

  get responsable(): FormControl<string> {
    return this.form.get(FORM_KEYS.responsable) as FormControl<string>;
  }

  get fechaInicio(): FormControl<string> {
    return this.form.get(FORM_KEYS.fechaInicio) as FormControl<string>;
  }

  get fechaFin(): FormControl<string> {
    return this.form.get(FORM_KEYS.fechaFin) as FormControl<string>;
  }
}
