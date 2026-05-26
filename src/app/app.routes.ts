import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page';
import { SearchPageComponent } from './pages/search-page/search-page';

export const routes: Routes = [
    {path: '', component: SearchPageComponent},
    {path: 'login', component: LoginPageComponent}
];

