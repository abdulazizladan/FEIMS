import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faculty : string;

  selection = {
    faculties : [
      {
        "name" : "engineering",
        "code" : "ENG",
        "departments" : [
          {
            "name" : "mechanical",
            "code" : "MECH"
          },
          {
            "name" : "chemical",
            "code" : "CHEM"
          }
        ]
      }
    ]
  }

  constructor(){

  }

  ngOnInit(): void{

  }

}
