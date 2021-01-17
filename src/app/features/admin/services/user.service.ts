import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl : string;

  constructor(private _http : HttpClient){ 
    this.usersUrl = "./assets/users.json";
  }

  getUsers(){
    return this._http.get<any>(this.usersUrl);
  }

  suspendUser( id : number){

  }

  getSingleUser( id : number){

  }
  
  addUser( userDetails ){

  }
}
