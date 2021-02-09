import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//ChartJS Module
import { ChartsModule } from 'ng2-charts';

//Material modules
import {MatDialogModule} from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UsersComponent } from './components/users/users.component';
import { SitesComponent } from './components/sites/sites.component';
import { AddUserDialogComponent } from './components/add-user-dialog/add-user-dialog.component';
import { AddSiteDialogComponent } from './components/add-site-dialog/add-site-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { BuildingSummaryComponent } from './components/building-summary/building-summary.component';
import { BuildingComponent } from './components/building/building.component';


@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, DashboardComponent, NotificationsComponent, UsersComponent, SitesComponent, AddUserDialogComponent, AddSiteDialogComponent, HomeComponent, ReportsComponent, SettingsComponent, BuildingsComponent, BuildingSummaryComponent, BuildingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    AdminRoutingModule
  ],
  exports: [
  ]
})
export class AdminModule { }
