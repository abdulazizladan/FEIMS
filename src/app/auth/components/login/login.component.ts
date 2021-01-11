import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private readonly authService: AuthService) {
    this.loginForm = this.formBuilder.group({email: '', password: ''});
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    const attempt = this.authService.login(value);
  }

}
