import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  
  addUserForm = this.fb.group({
    email : ['', [
      Validators.required,
      Validators.email
    ]],
    firstName : ['',[
      Validators.required
    ]],
    lastName : ['', [
      Validators.required
    ]],
    password : ['', [
      Validators.required,
      Validators.min(6)
    ]]
  })

  register(){

  }

  constructor( private fb : FormBuilder){ 

  }

  ngOnInit(): void {
  }

}
