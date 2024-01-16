import {Component} from '@angular/core'
import {Data} from "@angular/router";

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [
  ],
  templateUrl: './date.component.htmL'
})
export class DateComponent {
  currentDate: string  = new Date().toLocaleDateString();
}

