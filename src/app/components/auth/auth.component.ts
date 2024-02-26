import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/authService";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";
import ValidateForm from "../../usefulTools/validateForm";
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {routes} from "../../app.routes";
import {TokenChecker} from "../../usefulTools/tokenChecker";

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
  constructor(public authService: AuthService, public fb: FormBuilder, public router: Router, public tokenChecker: TokenChecker) {
  }

  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  ngOnInit() {
    this.initLoginForm();
    this.initSignUpForm();
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
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
      this.authService.auth(this.loginForm.value).subscribe({
        next: (response) => {
          this.tokenChecker.storeToken(response.token)
          this.router.navigate(['/main-page'])
        },
        error: (error) => {
          console.log('Ошибка входа', error)
        }
      })
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Форма входа заполнена некорректно.")
    }
  }

  onSingUpSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
      this.authService.registration(this.signUpForm.value).subscribe({
        next: (response) => {
          alert(`Регистрация пользователя ${response.username} прошла успешо.`)
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
