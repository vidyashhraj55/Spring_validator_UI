import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModule } from "./user/user.module";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/user';
  actuiveUser: UserModule;


  setUser(user: UserModule) {
    this.actuiveUser = user;
  }

  getUser() {
    return this.actuiveUser;
  }

  getUsers() {
    return this.http.get<UserModule[]>(`${this.baseUrl}/users`);
  }

  getUserById(id: number) {
    return this.http.get<UserModule>(this.baseUrl + '/users/' + id);
  }

  createUser(user: UserModule) {
    console.log(user);
    return this.http.post(`${this.baseUrl}/users/`, user);
  }

  updateUser(user: UserModule, id) {
    console.log(user)
    return this.http.put(`${this.baseUrl}/user/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/user/${id}`);
  }
}
