import { Component } from '@angular/core';
import {DateComponent} from "../date/date.component";
import {RouterLink} from "@angular/router";
import {AuthService} from "../../Services/authService";
import {AuthComponent} from "../auth/auth.component";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    DateComponent,
    RouterLink,
    AuthComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  testClick() {
    console.log('Кнопка нажата');
  }
  constructor(public authService: AuthService) {}

  openAuth() {
    this.authService.show();
  }

  isOpen() {
    return this.authService.isShown()
  }
}


