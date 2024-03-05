import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {TestService} from "../../../services/test.service";

@Component({
  selector: 'app-test-ch',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './test-ch.component.html',
  styleUrl: './test-ch.component.css'
})
export class TestCHComponent {
  constructor(private testService : TestService) {}

  bool : boolean = false;

  changeV() {
    this.bool = !this.bool;
  }

  getV() {
    return this.bool;
  }

  plus() {
    this.testService.plusGovno();
  }
}
