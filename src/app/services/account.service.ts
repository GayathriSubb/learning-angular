import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login({ username, password }) {
    this.http.post("http://localhost:3000/login", { username, password }).subscribe((response) => {
      console.log(response);
    })
  }

  register({ email, username, password }) {
    this.http.post("http://localhost:3000/register", { username, password, email }).subscribe((response) => {
      console.log(response);
    })
  }

}
