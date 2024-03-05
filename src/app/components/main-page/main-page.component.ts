import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../../services/mainPageService";
import {HttpClientModule} from "@angular/common/http";
import {MainHeaderComponent} from "./main-header/main-header.component";
import {MainCenterWindowComponent} from "./main-center-window/main-center-window.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HttpClientModule, MainHeaderComponent, MainCenterWindowComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
  constructor(public mainPageService: MainPageService) {
  }

  username: string = "";

  ngOnInit() {
    this.mainPageService.getInfo().subscribe({
      next: (response) => {
        this.username = response.username;
      },
      error: (error) => {
        console.log('Ошибка входа', error);
      }
    });
  }
}
