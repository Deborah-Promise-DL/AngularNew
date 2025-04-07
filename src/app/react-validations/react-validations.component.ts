import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-react-validations',
  imports: [ReactiveFormsModule],
  templateUrl: './react-validations.component.html',
  styleUrl: './react-validations.component.css'
})
export class ReactValidationsComponent {
userForm: FormGroup = new FormGroup({
  fname:new FormControl(""),
  lname:new FormControl(""),
  uname:new FormControl(""),
  city:new FormControl(""),
  state:new FormControl(""),
  zipCode:new FormControl(""),
  isAgree:new FormControl(false)
})

onSave(){
  console.log(this.userForm.value)
}

userArray:any= []

constructor(private users:UsersService){
console.log(this.userForm.value, "constructor")
this.getUsers()
}

getUsers(){
  this.users.getUsers().subscribe((data) => {
    this.userArray = data
    console.log(this.userArray, "data")
  })
}
}
