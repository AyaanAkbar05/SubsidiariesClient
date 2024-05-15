import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ParentCompaniesSubsidiaries } from './parent-companies-subsidiaries';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-parent-companies-subsidiaries',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './parent-companies-subsidiaries.component.html',
  styleUrl: './parent-companies-subsidiaries.component.css'
})
export class ParentCompaniesSubsidiariesComponent {
  public parentCompaniesSubsidiaires: ParentCompaniesSubsidiaries[] = [];
  public displayedColumns : string[]= ["subsidiaryId", "name", "location", "revenue"];
  id:number;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.id= -1;
  }
  ngOnInit() {
    this.getSubsidiaires();
  }
  getSubsidiaires() {
    let idparam= this.activatedRoute.snapshot.paramMap.get("id");
    this.id= idparam? + idparam:-1;
    this.http.get<ParentCompaniesSubsidiaries[]>(`${environment.baseurl}api/ParentCompanies/ParentCompaniesSubsidiaries/${this.id}`).subscribe(
      {

        next: result => this.parentCompaniesSubsidiaires= result,
        error: error => console.error(error) 
      }
    );
  }
}