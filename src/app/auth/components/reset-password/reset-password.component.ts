import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService
    ) {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: {email: string}) {
    const result = this.authService.resetPassword(value.email);
  }

}
