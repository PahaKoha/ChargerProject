import { Component } from '@angular/core';
import {AuthService} from "../../../services/authService";
import {AsyncPipe, NgIf} from "@angular/common";
import {AuthComponent} from "../../auth/auth.component";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    AsyncPipe,
    AuthComponent,
    NgIf
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  constructor(public authService: AuthService) {
  }
  signUpIsOpen() {
    return this.authService.signUpIsShown()
  }

  loginIsOpen() {
    return this.authService.loginIsShown()
  }

  openAuth() {
    this.authService.showLogin();
  }

  isOpen() {
    return this.authService.loginIsShown()
  }
}
