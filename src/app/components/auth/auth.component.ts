import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Services/authService";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  constructor(public authService: AuthService, public fb: FormBuilder) {
  }

  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  loginEmail: string = "";
  signUpEmail: string = "";

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.signUpForm = this.fb.group({
      nickname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  testClick() {
    console.log("work!")
  }

  openLogin() {
    this.authService.showLogin()
  }

  openSignUp() {
    this.authService.showSingUp()
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

  protected readonly require = require;

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    } else {
      // throw new Error("Некорректные данные.")
      this.validateAllLoginFormFields(this.loginForm);
      alert("Форма заполнена некорректно.")
    }
  }

  private validateAllLoginFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllLoginFormFields(control)
      }
    })
  }

  onSingUpSubmit() {
    if (this.loginForm.valid) {
      console.log(this.signUpForm.value)
    } else {
      // throw new Error("Некорректные данные.")
      this.validateAllSingUpFormFields(this.signUpForm);
      alert("Форма заполнена некорректно.")
    }
  }

  private validateAllSingUpFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllSingUpFormFields(control)
      }
    })
  }
}
