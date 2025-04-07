import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  firstName: string = "Deborah Promise";
  lastName: string = "D L";
  age: number = 30;
  selectedCity: string = "";
  mobile: string = "8888888888"

  constructor() {
    console.log("this", this.firstName);
  }

  onClickFunction() {
    alert("Hello " + this.firstName);
  }

  onchangeFunction(){
    console.log("name change");
  }
}
