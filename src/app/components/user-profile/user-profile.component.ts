import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';



interface IProfile {
  name: string,
  number: number,
  age: number,
  dept: string
  intials : string
}

// OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked

@Component({
  selector: 'edureka-user-profile',
  templateUrl: "./user-profile.component.html",
  // template: `<div>
  //             <span class="user-icon">AB</span>
  //           </div>`,
  styleUrls: ['./user-profile.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {

  // @Input() profile: IProfile | null = null;
  @Input("profile") userProfile : IProfile | null = null;

  @Output() logout = new EventEmitter<string>();

  constructor() { }

  timer = null;  

  ngOnChanges(){
      // console.log("ngOnChanges")
  }

  ngOnInit(): void {
    // API Request
    // Setup data
    // console.log("ngOnInit")
    //this.timer = setInterval(function(){ console.log("hello!!!") }, 1000)
  }

  // ngOnDestroy()
  //   {
  //     clearInterval(this.timer)
  //     console.log("ngOnDestroy")
  //   }

  // ngDoCheck()
  //   {
  //     console.log("ngDoCheck")
  //   }

  // ngAfterContentInit()
  //   {
  //     console.log("ngAfterContentInit")
  //   }

  // ngAfterContentChecked()
  //   {
  //     console.log("ngAfterContentChecked")
  //   }

  // ngAfterViewInit()
  //   {
  //     console.log("ngAfterViewInit")
  //   }

  // ngAfterViewChecked()
  //   {
  //     console.log("ngAfterViewChecked")
  //   }


  logoutUser()
    {
        // this.logout.emit();
        //this.logout.emit("some random text");
    }

}
