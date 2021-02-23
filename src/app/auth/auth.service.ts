import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginUrl: string = "https://api.narr.ng/api/v1/auth/login";
  private readonly registerUrl: string = "https://api.narr.ng/api/v1/auth/register";

  constructor( private _http: HttpClient){

   }

  login(credentials: {email: String, password: string}){
    return this._http.post<any>( this.loginUrl, credentials)
  }

  register(value: {email: string, password: string}){
    return this._http.post<any>( this.loginUrl, value)
  }

  resetPassword(value: string): boolean {
    return true;
  }

  isAuthenticated(): boolean{
    return true;
  }
}
