import { CanActivate, Router, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TokenChecker } from '../../usefulTools/tokenChecker';

@Injectable({
  providedIn: 'root'
})
export class MainPageGuard implements CanActivate {
  constructor(private tokenChecker: TokenChecker, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.tokenChecker.isLoggedIn().pipe(
      map(isLoggedIn => {
        if (!isLoggedIn) {
          return true;
        } else {
          this.router.navigate(['/main-page']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/']);
        return of(false);
      })
    );
  }
}
