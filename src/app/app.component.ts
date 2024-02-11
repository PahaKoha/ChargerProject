import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet, RouterModule} from '@angular/router';
import {AuthService} from "./services/authService";
import {AuthComponent} from "./components/auth/auth.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule, AuthComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Your Charging';

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




