import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})

export class FormcontrolComponent implements OnInit {

  usrNameChanges:string = "";
  usrNameStatus:string = "";
  newUser:User = {name:"", age:0, city:"",country:""}
  newUser1:User = {name:"", age:0, city:"qweqwe",country:""}
  objRegisterModel: User= {} as User;
  
  userForm = new FormGroup({
	name: new FormControl('Mahesh', Validators.maxLength(10)),
	age: new FormControl(20, Validators.required),
	city: new FormControl(),
	country: new FormControl()
  });

  get userName(): any {
    return this.userForm.get('name');
  }

  onFormSubmit(): void {

  //User = this.userForm.value;
	console.log('Name:' + this.userForm.get('name')?.value);
	console.log('Age:' + this.userForm.get('age')?.value);
	console.log('City:' + this.userForm.get('city')?.value);
	console.log('Country:' + this.userForm.get('country')?.value);
  }
 
  setDefaultValue() 
  { 
    this.userForm.setValue({name: 'Mahesh', age: 20, city: '', country: ''});
  }

  constructor() { }

  ngOnInit(): void { 
      
  }
}

export interface User {
  name: string;
	age: number;
  city:string;
  country:string;
}
