import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from '../user.service';
import { UserModule } from '../user/user.module';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: UserModule[];
  formTitle:string = "Add User" 

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }

  deleteUser(user: UserModule): void {
    console.log(user)
    this.userService.deleteUser(user.userid)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: UserModule): void {
    //this.formTitle = "Edit User";
    localStorage.removeItem("editUserId");
    this.userService.setUser(user);
    localStorage.setItem("editUserId", user.userid.toString());
    this.router.navigate(['edit-user/',user.userid]);
  };

  addUser(): void {
    this.router.navigate(['form']);
  };
}