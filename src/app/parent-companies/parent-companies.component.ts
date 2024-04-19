import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ParentCompanies } from './parent-companies';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parent-companies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './parent-companies.component.html',
  styleUrl: './parent-companies.component.css'
})
export class ParentCompaniesComponent {
public ParentCompanies: ParentCompanies[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getParentCompanies();
  }
  getParentCompanies() {
    this.http.get<ParentCompanies[]>(environment.baseurl+'api/ParentCompanies').subscribe(
      {

        next: result => this.ParentCompanies= result,
        error: error => console.error(error) 
      }
    );
  }
}
