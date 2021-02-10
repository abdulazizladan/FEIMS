import { Component, OnInit, Input, Output } from '@angular/core';
import { building } from '../../models/building.model';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  @Input()
  data : building;

  public name: string;

  constructor(){
    //this.name = this.data;
  }

  @Output()
  showSummary(id : number){
    console.log(id)
  }

  ngOnInit(): void {
  }

}
