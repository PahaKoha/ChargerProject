import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../services/authService";
import {AuthComponent} from "../auth/auth.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {StartComponent} from "./start/start.component";
import {ContainerDescriptionComponent} from "./container-description/container-description.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    AuthComponent,
    NgIf,
    AsyncPipe,
    StartComponent,
    ContainerDescriptionComponent,
    HeaderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}


