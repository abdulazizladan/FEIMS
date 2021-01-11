import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentails: {email: String, password: string}): boolean {
    return true;
  }

  register(value: {email: String, password: string}): string[] {
    return null;
  }

  resetPassword(value: string): boolean {
    return true;
  }
}
