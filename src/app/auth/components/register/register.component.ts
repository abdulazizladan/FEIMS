import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.registerGroup = formBuilder.group({
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    
  }

}
