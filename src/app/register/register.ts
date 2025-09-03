import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
})
export class Register {
  private formBuilder = inject(FormBuilder);
  public submitted = false;
  /**
   * Valida campos del formulario
   * @param campo
   */
  public passwordError = false;

  /**
   * Formulario de registro reactivo
   */
  public registerForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    address: ['', Validators.required],
    dni: ['', [Validators.required, Validators.min(999999)]],
    postalCode: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    ],
    passwordConfirm: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    ],
  });
  constructor() {}

  /**
   * Maneja el envío del formulario
   * @returns void
   */
  onSubmit() {
    this.submitted = true;
    this.passwordError = false;
    if (this.registerForm.invalid) return;
    if (
      this.registerForm.value.password !==
      this.registerForm.value.passwordConfirm
    ) {
      this.passwordError = true;
      return;
    }
    const postValues = {
      name: this.registerForm.value.name,
      surname: this.registerForm.value.surname,
      address: this.registerForm.value.address,
      dni: this.registerForm.value.dni,
      postalCode: this.registerForm.value.postalCode,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };
    console.log(postValues);
  }

  /**
   * Valida campos del formulario
   * @param campo
   */
  public validoCampo = (campo: string) => {
    return this.registerForm.controls[campo].errors;
  };
}
