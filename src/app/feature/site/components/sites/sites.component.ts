import { Component, OnInit } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { SitesService } from '../../services/sites.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SitesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'state', 'repair_cost'];
  dataSource: MatTableDataSource<any>;
  expandedElement: PeriodicElement | null;

  constructor( private siteService : SitesService){ 
    this.getSites();
  }

  getSites(){
    this.siteService.getSites().subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
      },
      err => {
        console.log("Could not fetch resource")
      }
    )
  }

  ngOnInit(): void {
  
  }

  applyFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
