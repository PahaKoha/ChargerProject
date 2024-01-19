import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet, RouterModule} from '@angular/router';
import {DateComponent} from "./components/date/date.component";
import {AuthService} from "./Services/authService";
import {AuthComponent} from "./components/auth/auth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DateComponent, RouterLink, RouterModule, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '-_- Work_Out -_-';
  constructor(public authService: AuthService) {}

  openAuth() {
    this.authService.show();
  }

  isOpen() {
    return this.authService.isShown()
  }
}




