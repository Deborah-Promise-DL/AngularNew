import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-companies',
  imports: [NgFor],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {

  companyArray:any=[]

  constructor(private http:HttpClient) {
    this.getCompanies();
    console.log("companyArray", this.companyArray );
  }

  getCompanies(){
    this.http.get("https://json-placeholder.mock.beeceptor.com/companies").subscribe((data:any)=>{
      console.log("data", data);
      this.companyArray = data;
    })
  }


}
