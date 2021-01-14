import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.registerGroup = formBuilder.group({
      email: ['',
      [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['',
      [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    
  }

}
