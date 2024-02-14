import { Component } from '@angular/core';
import {AuthService} from "../../services/authService";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Your Charging';

  constructor(public authService: AuthService) {
  }

  openLogin() {
    this.authService.showLogin();
  }

  openSignUp() {
    this.authService.showSignUp()
  }

  signUpIsOpen() {
    return this.authService.signUpIsShown()
  }

  loginIsOpen() {
    return this.authService.loginIsShown()
  }
}
