import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Services/authService";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent   {
  constructor(public authService: AuthService) {
  }


  loginEmail: string = "";
  signUpEmail: string = "";
  loginColor: string = "";
  singUpColor: string = "";

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

  emailChecker(email: string) {
    this.authService.emailChecker(email);
  }


}
