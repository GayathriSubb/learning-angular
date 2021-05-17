import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'edureka-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form = {
    username : "",
    password : ""
  }

  constructor(private account : AccountService) { }

  ngOnInit(): void {
  }

  login(form)
    {
      this.account.login(form.value);
    }

}
