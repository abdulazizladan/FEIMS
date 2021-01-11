import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-site-dialog',
  templateUrl: './add-site-dialog.component.html',
  styleUrls: ['./add-site-dialog.component.scss']
})
export class AddSiteDialogComponent implements OnInit {

  states = ["Abia", "Abuja", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno"]

  constructor( private fb : FormBuilder){ 

  }

  ngOnInit(): void {
  }

}
