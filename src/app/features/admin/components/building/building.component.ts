import { Component, OnInit, Input } from '@angular/core';
import { building } from '../../models/building.model';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  @Input()
  name : building;

  constructor(){

  }

  ngOnInit(): void {
  }

}
