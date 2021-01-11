import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { AddSiteDialogComponent } from '../add-site-dialog/add-site-dialog.component';

import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class SitesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'state', 'repair_cost'];
  dataSource: MatTableDataSource<any>;

  constructor( public dialog : MatDialog, public siteService : SiteService ){ 
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

  addSite(){
    const dialogRef = this.dialog.open(AddSiteDialogComponent, {
      width : '500px'
    });
  }

  ngOnInit(): void {
    
  }

  applyFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
