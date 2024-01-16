import { Component } from '@angular/core';
import {DateComponent} from "../components/date/date.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        DateComponent,
        RouterLink
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  testClick() {
    console.log('Кнопка нажата');
  }
}


