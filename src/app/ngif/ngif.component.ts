import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif',
  imports: [NgIf,FormsModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {

  div1visible: boolean = true;

  text1: string = "";
  text2: string = "";

  showDiv1() {
    this.div1visible = true;
  }
  hideDiv1() {
    this.div1visible = false;
  }
}
