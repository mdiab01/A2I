import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {
  password: string;
  username: string;
  dob: string;
  loggedIn: boolean;
  constructor () {
    this.loggedIn = false;
  }

}
