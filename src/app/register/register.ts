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
    dni: ['', [Validators.required, Validators.min(9999999)]],
    postalCode: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(5)]],
  });
  constructor() {}

  /**
   * Maneja el envío del formulario
   * @returns void
   */
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;
    if (
      this.registerForm.value.password !==
      this.registerForm.value.passwordConfirm
    ) {
      this.passwordError = true;
      return;
    }
    console.log(this.registerForm.value);
  }

  /**
   * Valida campos del formulario
   * @param campo
   */
  public validoCampo = (campo: string) => {
    return this.registerForm.controls[campo].errors;
  };
}
