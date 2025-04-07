import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [FormsModule, NgIf],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userObj: any= {
   firstName: "",
   lastName: "",
   userName: "",
   city: "",
   state : "",
   zipCode : "",
   isAgreeTerms: false
  }

  companyArray:any=[]

  constructor(private http:HttpClient) {
    console.log(this.userObj, "constructor");
    this.getCompanies();
    console.log("companyArray", this.companyArray );
  }

  getCompanies(){
    this.http.get("https://json-placeholder.mock.beeceptor.com/companies").subscribe((data:any)=>{
      console.log("data", data);
      this.companyArray = data;
    })
  }

  onSubmit(){
    console.log(this.userObj, "new user details");
  }

}
