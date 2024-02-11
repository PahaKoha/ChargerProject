import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../entities/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginState = new BehaviorSubject<boolean>(false);
  private signUpState = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  toggleFormState(showLogin: boolean) {
    this.loginState.next(showLogin);
    this.signUpState.next(!showLogin);
  }

  showLogin() {
    this.toggleFormState(true);
  }

  hideLogin() {
    this.loginState.next(false);
  }

  showSignUp() {
    this.toggleFormState(false);
  }

  hideSignUp() {
    this.signUpState.next(false);
  }

  loginIsShown(): Observable<boolean> {
    return this.loginState.asObservable();
  }

  signUpIsShown(): Observable<boolean> {
    return this.signUpState.asObservable();
  }

  public registration(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8080/register', user);
  }
}
