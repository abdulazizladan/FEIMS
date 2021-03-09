import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { building } from '../../models/building.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddBuildingComponent } from '../add-building/add-building.component';

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
      "image" : "./assets/img/03.jpg",
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
    }
    ,{
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
    "image" : "./assets/img/01.jpg",
    "description" : "string",
    "repair_cost" : 5000,
    "id" : 5
    },
    {
      "name" : "LAB01",
      "type" : "Laboratory",
      "image" : "./assets/img/01.jpg",
      "description" : "string",
      "repair_cost" : 5000,
      "id" : 6
    }
  ];

  buildings : building[];

  constructor( private buildingService : BuildingService, public dialog: MatDialog ){

  }

  ngOnInit(): void {

  }

  openAddDialog(): void{
    const dialogRef = this.dialog.open(AddBuildingComponent, {
      minWidth: '400px',
      data: {}
    });
  }

}
