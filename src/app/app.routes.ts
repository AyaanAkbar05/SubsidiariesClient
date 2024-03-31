import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ParentCompaniesComponent } from './parent-companies/parent-companies.component';

export const routes: Routes = [
    {path:'', component:HelloComponent, pathMatch: 'full'},
    {path:'ParentCompanies', component:ParentCompaniesComponent}
];
