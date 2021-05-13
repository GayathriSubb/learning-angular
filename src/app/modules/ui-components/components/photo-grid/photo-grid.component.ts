import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'edureka-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {

  @Input() profiles = [];

  @Output() profileselected : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  selectuser(profile)
    {
        this.profileselected.emit(profile)
    }

}
