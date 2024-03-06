import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../../services/mainPageService";
import {HttpClientModule} from "@angular/common/http";
import {MainHeaderComponent} from "./main-header/main-header.component";
import {MainLeftSidebarComponent} from "./main-left-sidebar/main-left-sidebar.component";
import {MainStatisticsComponent} from "./main-statistics/main-statistics.component";
import {MainChargingComponent} from "./main-charging/main-charging.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HttpClientModule, MainHeaderComponent, MainLeftSidebarComponent, MainStatisticsComponent, MainChargingComponent],
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
