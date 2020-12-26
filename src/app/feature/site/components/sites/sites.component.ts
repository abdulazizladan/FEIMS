import { Component, OnInit } from '@angular/core';
import { SitesService } from '../../services/sites.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  constructor( private siteService : SitesService){ 
    this.getSites();
  }

  getSites(){
    this.siteService.getSites().subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log("Could not fetch resource")
      }
    )
  }

  ngOnInit(): void {
  
  }

}
