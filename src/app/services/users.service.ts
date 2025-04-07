import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {}

  baseUrl = "https://json-placeholder.mock.beeceptor.com"

    getUsers(): Observable<any> {
      return this.http.get(`${this.baseUrl}/users`);
    } 
   

 // getUsers(){
   // this.http.get('https://json-placeholder.mock.beeceptor.com/users').subscribe((res) => {
  //    console.log("data", res);
 //   }
 //  )

  }

