import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UsersComponent } from  './components/users/users.component';
import { SitesComponent } from './components/sites/sites.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  {
    path : "",
    component : DashboardComponent,
    children : [
      { 
        path : "home",
        component : HomeComponent
      },
      {
        path : "",
        redirectTo : "home",
        pathMatch : "full"
      },      
      {
        path : "reports",
        component : ReportsComponent
      },
      {
        path : "settings",
        component : SettingsComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
