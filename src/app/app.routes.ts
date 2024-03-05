import {Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {MainPageGuard} from "./guards/main-page/main-page.guard";

export const routes: Routes = [
  {path: '', component: HomePageComponent, canActivate: [MainPageGuard]},
  {path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard]}
];
