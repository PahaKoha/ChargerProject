import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signUpState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showLogin() {
    this.loginState.next(true);
    this.signUpState.next(false);
  }

  hideLogin() {
    this.loginState.next(false);
  }

  loginIsShown() {
    return this.loginState.asObservable();
  }

  showSingUp() {
    this.signUpState.next(true);
    this.loginState.next(false);

  }

  hideSignUp() {
    this.signUpState.next(false);
  }

  signUpIsShown() {
    return this.signUpState.asObservable();
  }

  emailChecker(email: string) : boolean {
    let dogIndex = email.indexOf("@");
    let dotIndex = email.indexOf(".");
    return dogIndex !== -1 && dotIndex !== -1;
  }
}
