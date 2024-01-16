import {Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LogInSignUpComponent} from "./log-in-sign-up/log-in-sign-up.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'LogInSignUp', component: LogInSignUpComponent}
];
