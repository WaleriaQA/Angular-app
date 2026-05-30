import { Routes } from '@angular/router';
import { Layout } from './common-ui/layout/layout';
import { LoginPageComponent } from './pages/login-page/login-page';
import { ProfilePageComponent } from './pages/profile-page/profile-page';
import { SearchPageComponent } from './pages/search-page/search-page';
import { canActivateAuth } from './auth/access.guard';

export const routes: Routes = [
    {path: '', component: Layout, children: [
        {path: '', component: SearchPageComponent},
        {path: 'profile', component: ProfilePageComponent},
    ],
     canActivate: [canActivateAuth]
},
    
    
    {path: 'login', component: LoginPageComponent}
];

