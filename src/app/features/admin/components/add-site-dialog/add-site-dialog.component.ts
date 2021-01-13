import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-site-dialog',
  templateUrl: './add-site-dialog.component.html',
  styleUrls: ['./add-site-dialog.component.scss']
})
export class AddSiteDialogComponent implements OnInit {

  states : string[] = ["Abia", "Abuja", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno"];

  addSiteForm = this.fb.group({
    institutionName : ['', [
      Validators.required
    ]],
    acronym : ['', [
      Validators.required
    ]],
    state : ['', [
      Validators.required
    ]],
    address : ['', [
      Validators.required
    ]]
  })

  register(){

  }

  constructor( private fb : FormBuilder){ 

  }

  ngOnInit(): void {
  }

}
