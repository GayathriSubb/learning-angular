import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms"
import { AccountService } from 'src/app/services/account.service';
import { CompareValidator } from '../validators/compare';

@Component({
  selector: 'edureka-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    registerForm : FormGroup = new FormGroup({
        username : new FormControl("", [Validators.required, Validators.minLength(8)]),
        email : new FormControl("", [Validators.required, Validators.email]),
        password : new FormControl("", [Validators.required, Validators.minLength(8)]),
        confirmPassword : new FormControl("", [Validators.required, Validators.minLength(8)])
    }, [ CompareValidator("password", "confirmPassword") ])


  constructor(private account : AccountService) { }

  ngOnInit(): void {
  }

  register()
    {
        console.log(this.registerForm);
        // this.account.register(this.registerForm.value)
    }

}
