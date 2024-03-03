import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet, RouterModule} from '@angular/router';
import {AuthService} from "./services/authService";
import {AuthComponent} from "./components/auth/auth.component";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./components/home-page/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule, AuthComponent, HttpClientModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}




