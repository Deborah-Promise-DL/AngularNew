import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  imports: [NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

  cityList : string[] = ["Hyderabad", "Bangalore", "Chennai"]
  
  employeeArray: any[] = [
    {
      empId: 1, name: "Deborah", city: "Hyderabad", mobile : "9999999999"
    },
    {
      empId: 2, name: "Promise", city: "Bangalore", mobile : "9999999999"
    },
    {
      empId: 3, name: "Pinky", city: "Delhi", mobile : "9999999999"

    },
    {
      empId: 4, name: "Fruity", city: "Pune", mobile : "9999999999"

    }
  ]
}
