import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SettingsComponent } from './settings/settings.component';
import { UserslistComponent } from './userslist/userslist.component';


export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "registration",
        component: RegistrationComponent
    },
    {
        path: "navbar",
        component: NavbarComponent
    },
    {
        path: "sidebar",
        component: SidebarComponent
    },
    {
        path: "contactus",
        component: ContactusComponent
    },
    {
        path: "settings",
        component: SettingsComponent
    },
    {
        path: "userslist",
        component: UserslistComponent
    }
      
];
