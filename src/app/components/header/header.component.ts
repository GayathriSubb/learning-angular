import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'edureka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userprofile = {
    name: "abc",
    number: 5423135445,
    age: 46,
    dept: "IT",
    intials: "PR"
  }

  toggleUserProfile = true;

  changeValue() {
      this.userprofile.intials = "XYZ";
  }

  changeRef() {
      this.userprofile = {...this.userprofile, intials : "QWE"}
  }
  getUserProfile() {
    return this.userprofile;
  }

  toggleProfile()
      {
          this.toggleUserProfile = !this.toggleUserProfile
      }

  changeName() {
    this.userprofile.name = "xyz";
  }

  constructor() { }

  ngOnInit(): void {
  }

  clearProfileData(event) {
    console.log(event);
    // this.userprofile = null;
    this.userprofile.intials = event;
  }

}
