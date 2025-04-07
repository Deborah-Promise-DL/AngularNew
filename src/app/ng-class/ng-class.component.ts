import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  divBackgroundColor: string = "bg bg-success";
  stylecolor: string = "lightblue";
  isChecked: boolean = false;


  clickSuccess() { 
    this.divBackgroundColor = "bg bg-success";

  }

  clickDanger() {
    this.divBackgroundColor = "bg bg-danger";

  }

}
