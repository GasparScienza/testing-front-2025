import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
})
export class Login {
  private formBuilder = inject(FormBuilder);
  public submitted = false;

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    console.log(this.loginForm.value);
  }

  /**
   * Valida campos del formulario
   * @param campo
   */
  public validoCampo = (campo: string) => {
    return this.loginForm.controls[campo].errors;
  };
}
