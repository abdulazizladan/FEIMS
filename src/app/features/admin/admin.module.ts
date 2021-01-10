import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UsersComponent } from './components/users/users.component';
import { SitesComponent } from './components/sites/sites.component';


@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, DashboardComponent, NotificationsComponent, UsersComponent, SitesComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    AdminRoutingModule
  ],
  exports: [
  ]
})
export class AdminModule { }
