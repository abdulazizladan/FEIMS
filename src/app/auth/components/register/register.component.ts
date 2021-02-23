import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerGroup: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService ){
    this.registerGroup = formBuilder.group({
      fName: ['',
      [
        Validators.required
      ]],
      lName: ['',
      [
        Validators.required
      ]],
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


  register(){
    this.authService.register(this.registerGroup.value).subscribe(
      res=>{
        console.log("Registering...")
      },err=>{
        console.log("Unable to register...")
      }
    )
  }

  onSubmit(value: any) {

  }

}
