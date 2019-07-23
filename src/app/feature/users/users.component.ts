import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersarr: User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    if(!this.usersarr){
      this.usersarr=this.userService.getAll();
    }
  }

}
