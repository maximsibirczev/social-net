import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user:object;

  properties:any= {
    marked:false
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.properties.marked = !this.properties.marked;
  }

}
