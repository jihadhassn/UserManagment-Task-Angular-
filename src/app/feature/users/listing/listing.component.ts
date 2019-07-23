import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from '../users.service';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() users: User[];
  //search
  searchText: string;
  // sorting
  sortedUsers: User[];
  sortingValue: string = 'name';
  reverse: boolean = false;

  constructor(private userService: UserService, private orderPipe: OrderPipe) {
    for (let i = 1; i <= 100; i++) {
      this.users;
    }
    console.log(this.users)
    this.sortedUsers = this.orderPipe.transform(this.users, 'name');
    console.log(this.sortedUsers);
  }

  ngOnInit() {
    if (this.users) {
      this.users = this.userService.getAll();
      console.log(this.users)

    }
  }


  onOrder(value: string) {

    console.log(value)
    console.log(this.reverse)

    if (this.sortingValue === value) {
      this.reverse = !this.reverse;
    }
    console.log(this.reverse)

    this.sortingValue = value;
    console.log(this.sortingValue)

  }
  

  onDelete(id: Number) {
    this.userService.delete(id);
    alert('Your User Successfully Deleted ');
  }
}
