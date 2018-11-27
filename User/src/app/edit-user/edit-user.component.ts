import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {UserModule} from "../user/user.module";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first, map} from "rxjs/operators";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: UserModule;
  userid:number;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      userid: [this.user.userid],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      age:[this.user.age,Validators.required],
      gender:[this.user.gender,Validators.required]
    });
    // this.userService.getUserById(+userId)
    //   .subscribe( data => {
    //     this.editForm.setValue(data);
    //   });
  }

  onSubmit() {
    //console.log("user is ", this.editForm.value)
    this.userService.updateUser(this.editForm.value,this.editForm.controls.userid.value)
      .subscribe(
        (data) => {
          this.router.navigate(['list-user']);
        },
        error => {
          alert(error);
        });
  }

}
