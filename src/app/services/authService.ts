import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RegistrationDto} from "../dtos/registrationDto";
import {LoginDto} from "../dtos/loginDto";
import {TokenChecker} from "../usefulTools/tokenChecker";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginState = new BehaviorSubject<boolean>(false);
  private signUpState = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
  }

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

  public auth(loginDto: LoginDto): Observable<any> {
    return this.http.post<any>('http://localhost:8080/auth', loginDto);
  }

  public registration(registrationDto: RegistrationDto): Observable<any> {
    return this.http.post<any>('http://localhost:8080/registration', registrationDto);
  }

}
