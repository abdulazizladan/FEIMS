import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { Observable } from 'rxjs';

//ChartJS Module
import { ChartsModule } from 'ng2-charts';

//Material modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';

//FlexLayoutModule
import { FlexLayoutModule } from '@angular/flex-layout';

//Admin routing
import { AdminRoutingModule } from './admin-routing.module';

//Components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { BuildingSummaryComponent } from './components/building-summary/building-summary.component';
import { BuildingComponent } from './components/building/building.component';
import { SummaryComponent } from './components/summary/summary.component';
import { FooterComponent } from './components/footer/footer.component';


//import { WebsocketService } from './services/websocket.service';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    DashboardComponent,
    HomeComponent,
    ReportsComponent,
    SettingsComponent,
    BuildingsComponent,
    BuildingSummaryComponent,
    BuildingComponent,
    SummaryComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatExpansionModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
    AdminRoutingModule
  ],
  exports: [
  ],
  providers: [

  ]
})
export class AdminModule { }
