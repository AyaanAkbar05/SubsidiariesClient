import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ParentCompaniesComponent } from './parent-companies/parent-companies.component';
import { ParentCompaniesSubsidiariesComponent } from './parent-companies/parent-companies-subsidiaries.component';
import { LoginComponent } from './auth/login.component';
import { authGuard } from './auth/auth.guard';
import { RegisterUsersComponent } from './register-users/register-users.component';

export const routes: Routes = [
    {path:'', component:HelloComponent, pathMatch: 'full'},
    {path:'ParentCompanies', component:ParentCompaniesComponent, canActivate: [authGuard]},
    {path: 'parentCompaniesSubsidiaries/:id', component:ParentCompaniesSubsidiariesComponent, canActivate: [authGuard]},
    {path: 'login', component:LoginComponent},
    {path: 'registerusers', component:RegisterUsersComponent},
];