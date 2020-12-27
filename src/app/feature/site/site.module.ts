import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Material components
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SiteRoutingModule } from './site-routing.module';
import { SitesComponent } from './components/sites/sites.component';
import { SiteDetailsComponent } from './components/site-details/site-details.component';




@NgModule({
  declarations: [SitesComponent, SiteDetailsComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports:[
    SitesComponent,
    SiteDetailsComponent
  ]
})
export class SiteModule { }
