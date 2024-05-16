import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ParentCompaniesComponent } from './parent-companies/parent-companies.component';
import { ParentCompaniesSubsidiariesComponent } from './parent-companies/parent-companies-subsidiaries.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
    {path:'', component:HelloComponent, pathMatch: 'full'},
    {path:'ParentCompanies', component:ParentCompaniesComponent},
    {path: 'parentCompaniesSubsidiaries/:id', component:ParentCompaniesSubsidiariesComponent},
    {path: 'login', component:LoginComponent}
];