import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

  size: number = 8;

  constructor(private userService: UserService) {
  }

  onChange(){
    this.userService.setSize(this.size);
  }
  ngOnInit() {
  }

}
