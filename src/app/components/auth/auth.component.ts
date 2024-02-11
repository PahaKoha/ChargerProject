import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/authService";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";
import ValidateForm from "../../usefulTools/validateForm";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgIf,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  constructor(public authService: AuthService, public fb: FormBuilder) {
  }

  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  ngOnInit() {
    this.initLoginForm();
    this.initSignUpForm();
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private initSignUpForm() {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  openLogin() {
    this.authService.showLogin()
  }

  openSignUp() {
    this.authService.showSignUp()
  }

  closeLogin() {
    this.authService.hideLogin();
  }

  loginIsOpen() {
    return this.authService.loginIsShown()
  }

  closeSignUp() {
    this.authService.hideSignUp()
  }

  signUpIsOpen() {
    return this.authService.signUpIsShown()
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    } else {
      // throw new Error("Некорректные данные.")
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Форма входа заполнена некорректно.")
    }
  }

  onSingUpSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
      this.authService.registration(this.signUpForm.value).subscribe({
        next: (response) => {
          console.log('Регистрация прошла успешно', response);
        },
        error: (error) => {
          console.error('Ошибка регистрации', error);
        }
      })
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm);
      alert("Форма регистрации заполнена некорректно.")
    }
  }

  isFieldInvalid(field: string, form: FormGroup): boolean {
    const control = form.get(field);
    return (control?.dirty && control?.hasError('required')) ?? false;
  }
  hasErrorAndDirty(field: string, form: FormGroup): boolean {
    const control = form.get(field);
    return control?.dirty && control?.hasError('required') || false;
  }
}
