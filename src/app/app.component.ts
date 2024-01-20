import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet, RouterModule} from '@angular/router';
import {AuthService} from "./Services/authService";
import {AuthComponent} from "./components/auth/auth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '-_- Work_Out -_-';

  constructor(public authService: AuthService) {
  }

  openLogin() {
    this.authService.showLogin();
  }

  openSignUp() {
    this.authService.showSingUp()
  }

  signUpIsOpen() {
    return this.authService.signUpIsShown()
  }

  loginIsOpen() {
    return this.authService.loginIsShown()
  }
}




