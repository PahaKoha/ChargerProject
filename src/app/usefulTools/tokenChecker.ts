import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, switchMap} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class TokenChecker {
  constructor(private http: HttpClient) {
  }

  storeToken(tokenValue: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', tokenValue)
    }
  }

  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token')
    }
    return null;
  }

  isLoggedIn(): Observable<boolean> {
    const token = this.getToken();
    if (!token) {
      return of(false);
    } else {
      return this.verifyToken().pipe(
        switchMap(response => {
          return of(response.status);
        }),
        catchError(error => {
          localStorage.removeItem('token')
          return of(false);
        })
      );
    }
  }

  private verifyToken(): Observable<any> {
    return this.http.get('http://localhost:8080/verifyToken');
  }

}
