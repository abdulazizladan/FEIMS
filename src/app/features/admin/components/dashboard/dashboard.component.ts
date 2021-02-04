import { Component, OnInit } from '@angular/core'
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  site : string;
  faculty : string;
  department : string;

  selection : any;

  constructor( private siteService : SiteService ){

  }

  ngOnInit(): void{
    this.siteService.getSites().subscribe(
      res=>{
        this.selection = res
        console.log(res)
      },
      err=>{

      }
    )
  }

}
