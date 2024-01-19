import {Component} from '@angular/core';
import {AuthService} from "../../Services/authService";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(public authService: AuthService) {}

  username: string = "";

  testButton() {
    console.log(this.username)
  }
  closeAuth() {
    this.authService.hide();
  }

  isOpen() {
    return this.authService.isShown()
  }

  emailChecker(email: string) {
    this.authService.emailChecker(email);
  }
}
