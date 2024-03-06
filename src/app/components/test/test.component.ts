import {Component} from '@angular/core';
import {TestCHComponent} from "./test-ch/test-ch.component";
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    TestCHComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private testService: TestService) {

  }

  getCount() {
    return this.testService.getGovno()
  }
}
