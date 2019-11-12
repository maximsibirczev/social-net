import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-net';
  users=[];


	constructor(private userService: UserService) {
	//	this.users = this.userService.users
	 }

	  ngOnInit(){  
	  	this.userService.getUsers().subscribe((users)=>{
	  		console.log(users)
	  		this.users=users;
	  	})
    //    this.httpService.getData().subscribe((data:User) => this.user=data);
    }
}
