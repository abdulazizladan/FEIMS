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

  onSubmit(value: any) {
    const attempt = this.authService.login(value);
    this.router.navigate(['/admin'])
  }

}