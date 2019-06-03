import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../../shared/models/user";
import { NgForm } from "@angular/forms/src/directives/ng_form";

@Component({
  selector: 'iso-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  user:User={
    nombre:'',
    apellidos:'',
    password:'',
    direccion:'',
    telefono:0,
    mail:'',
    fechNac:''
  };
  constructor(private userService:UserService) { }

  ngOnInit() {
   
  }
  guardarUser(myForm: NgForm){
    console.log(myForm);
    if(myForm.valid){
    this.userService.addUser(this.user);
    myForm.resetForm();
    }
    else{
      console.log("formulario invalido");
    }
  }

}
