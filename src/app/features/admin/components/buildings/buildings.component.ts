import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { building } from '../../models/building.model';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})


export class BuildingsComponent implements OnInit {

  A : building[]= [
    {
      "name" : "Mech001",
      "type" : "Departmental building",
      "image" : "./assets/img/01.JPG",
      "description" : "Mechanical Engineering's departmental complex.",
      "repair_cost" : 5000000,
      "id" : 1
    },
    {
      "name" : "LAB 001",
      "type" : "Laboratory",
      "image" : "./assets/img/02.jpg",
      "description" : "Materials laboratory",
      "repair_cost" : 5000,
      "id" : 2
    },
    {
      "name" : "LAB01",
      "type" : "Laboratory",
      "image" : "./assets/img/01.jpg",
      "description" : "string",
      "repair_cost" : 5000,
      "id" : 3
    },
    {
      "name" : "LAB01",
      "type" : "Laboratory",
      "image" : "./assets/img/04.png",
      "description" : "string",
      "repair_cost" : 5000,
      "id" : 4
    },
    {
    "name" : "LAB01",
    "type" : "Laboratory",
    "image" : "./assets/img/04.png",
    "description" : "string",
    "repair_cost" : 5000,
    "id" : 4
    },
    {
      "name" : "LAB01",
      "type" : "Laboratory",
      "image" : "./assets/img/01.JPG",
      "description" : "string",
      "repair_cost" : 5000,
      "id" : 4
    }
  ];

  buildings : building[];

  constructor( private buildingService : BuildingService ){

  }

  ngOnInit(): void {

  }

}
