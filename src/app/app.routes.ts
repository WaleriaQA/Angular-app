import { Routes } from '@angular/router';
import { Layout } from './common-ui/layout/layout';
import { LoginPageComponent } from './pages/login-page/login-page';
import { ProfilePageComponent } from './pages/profile-page/profile-page';
import { SearchPageComponent } from './pages/search-page/search-page';
import { canActivateAuth } from './auth/access.guard';
import { SettingsPageComponent } from './pages/settings-page/settings-page';

export const routes: Routes = [
    {path: '', component: Layout, children: [
        {path: '', redirectTo: 'profile/me', pathMatch: 'full'},
        {path: 'profile/:id', component: ProfilePageComponent},
        {path: 'settings', component: SettingsPageComponent},
        {path: 'search', component: SearchPageComponent},
    ],
     canActivate: [canActivateAuth]
},
    
    
    {path: 'login', component: LoginPageComponent}
];

