import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isEmailCorrect: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  show() {
    this.authState.next(true);
  }

  hide() {
    this.authState.next(false);
  }

  isShown() {
    return this.authState.asObservable();
  }

  emailChecker(email: string) {
    let dogIndex = email.indexOf("@");
    let dotIndex = email.indexOf(".");


    if (dogIndex !== -1 && dotIndex !== -1) {
      console.log("Структура email верна!");
    } else {
      console.log("Некорректные данные.");
    }
  }
}
