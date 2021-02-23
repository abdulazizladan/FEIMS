import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //login form data: { email:string, password:string }
  loginForm: FormGroup;
  failedAttempt: false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router) {
    this.loginForm = this.formBuilder.group({email: ['', [
      Validators.email,
      Validators.required
    ]], password: ['',
    [
      Validators.required
    ]]
    });
  }

  ngOnInit(): void {
  }

  //login @params: {email: string, password: string}
  login(){
    this.authService.login(this.loginForm.value).subscribe(
      res=>{
        console.log('logging in...')
      },err=>{
        console.log('unable to authenticate...')
      }
    )
  }
}
