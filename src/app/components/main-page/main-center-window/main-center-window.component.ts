import { Component } from '@angular/core';
import {LeftSideWindowsComponent} from "./left-side-windows/left-side-windows.component";
import {MiddleWindowsComponent} from "./middle-windows/middle-windows.component";

@Component({
  selector: 'app-main-center-window',
  standalone: true,
  imports: [
    LeftSideWindowsComponent,
    MiddleWindowsComponent
  ],
  templateUrl: './main-center-window.component.html',
  styleUrl: './main-center-window.component.css'
})
export class MainCenterWindowComponent {

}
