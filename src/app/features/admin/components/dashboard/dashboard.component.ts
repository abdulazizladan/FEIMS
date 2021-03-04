import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData: any;
  fullName: string;
  role: string;
  email: string;
  subscription: Subscription;

  site : string;
  faculty : string;
  department : string;

  selection : any;

  constructor( private siteService : SiteService ){

  }

  ngOnInit(): void{
    this.userData = JSON.parse(localStorage.getItem("data"));
    this.fullName = this.userData.user.fullName;
    this.role = this.userData.user.userRole;
    this.email = this.userData.user.email;
    this.subscription = this.siteService.getSites().subscribe(
      res=>{
        this.selection = res
      },
      err=>{
        console.log("Unable to complete request")
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
