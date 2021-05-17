import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'edureka-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    registerForm : FormGroup = new FormGroup({
        username : new FormControl("", []),
        email : new FormControl("", []),
        password : new FormControl("", []),
        confirmPassword : new FormControl("", [])
    })


  constructor() { }

  ngOnInit(): void {
  }

  register()
    {
        console.log(this.registerForm)
    }

}
