import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-mascota',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './mascota.html',
  styleUrl: './mascota.css',
})
export class Mascota {
  private formBuilder = inject(FormBuilder);

  public createMascota: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    specie: [null, [Validators.required]],
    peso: [0, [Validators.required]],
    date: ['', [Validators.required]],
    sex: ['', Validators.required],
  });

  public onSubmit = () => {
    console.log(this.createMascota.value);
  };

  public validoCampo = (campo: string) => {
    return this.createMascota.controls[campo].errors;
  };
}
