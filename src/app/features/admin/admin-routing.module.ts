import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UsersComponent } from  './components/users/users.component';
import { SitesComponent } from './components/sites/sites.component';

const routes: Routes = [
  {
    path : "",
    component : DashboardComponent,
    children : [
      {
        path : "",
        component : NotificationsComponent
      },      
      {
        path : "users",
        component : UsersComponent
      },
      {
        path : "sites",
        component : SitesComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
