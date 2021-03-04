import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  //login form data: { email:string, password:string }
  loginForm: FormGroup;
  failedAttempt: boolean = false;
  loginFailMessage: string;
  subscription: Subscription;

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
    this.loginFailMessage = "";
    /*
    Redirect if login details exist in local storage
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/admin');
    }else{
      this.router.navigateByUrl('/login');
    }*/
  }

  //login @params: {email: string, password: string}
  login(){
    this.failedAttempt = false;
    this.subscription = this.authService.login(this.loginForm.value).subscribe(
      res=>{
        /* Store token */
        localStorage.setItem('token', res.payload.token)
        /* Store user data */
        localStorage.setItem('data', JSON.stringify(res.payload));
        /* Route to admin page */
        this.router.navigateByUrl('/admin');
      },err=>{
        this.failedAttempt = true;
        this.loginFailMessage = "Unable to login"
      }
    )
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe()
  }
}
