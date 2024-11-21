import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { CrearDesarrolladorDto, Rol } from '../../domain';

const FORM_KEYS = {
  nombre: 'nombre',
  correo: 'correo',
  rol: 'rol',
  fechaContratacion: 'fechaContratacion',
} as const;

type FormularioRegistro = {
  [FORM_KEYS.nombre]: FormControl<string>;
  [FORM_KEYS.correo]: FormControl<string>;
  [FORM_KEYS.rol]: FormControl<string>;
  [FORM_KEYS.fechaContratacion]: FormControl<string>;
};

@Component({
  selector: 'app-formulario-desarrollador',
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
  templateUrl: './formulario-desarrollador.component.html',
  styleUrl: './formulario-desarrollador.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioDesarrolladorComponent {
  @Input() readonly esRegistro = true;
  @Input() readonly soloLectura = false;
  @Input({ required: true }) roles!: Rol[];

  @Output() readonly enviarFormulario = new EventEmitter<CrearDesarrolladorDto>();

  readonly formKeys = FORM_KEYS;
  protected readonly fb = inject(NonNullableFormBuilder);

  form = this.fb.group<FormularioRegistro>({
    [FORM_KEYS.nombre]: this.fb.control('', [Validators.required]),
    [FORM_KEYS.correo]: this.fb.control('', [Validators.required, Validators.email]),
    [FORM_KEYS.rol]: this.fb.control('', [Validators.required]),
    [FORM_KEYS.fechaContratacion]: this.fb.control('', [Validators.required]),
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { nombre, correo, rol, fechaContratacion } = this.form.getRawValue();
    const payload: CrearDesarrolladorDto = {
      nombre,
      correo,
      rol: this.roles.find(({ id }) => id === +rol) as Rol,
      fechaContratacion: new Date(fechaContratacion),
    };

    this.enviarFormulario.emit(payload);
  }

  get nombre(): FormControl<string> {
    return this.form.get(FORM_KEYS.nombre) as FormControl<string>;
  }

  get correo(): FormControl<string> {
    return this.form.get(FORM_KEYS.correo) as FormControl<string>;
  }

  get rol(): FormControl<string> {
    return this.form.get(FORM_KEYS.rol) as FormControl<string>;
  }

  get fechaContratacion(): FormControl<string> {
    return this.form.get(FORM_KEYS.fechaContratacion) as FormControl<string>;
  }
}
