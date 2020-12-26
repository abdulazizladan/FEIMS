import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Material components
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

import { SiteRoutingModule } from './site-routing.module';
import { SitesComponent } from './components/sites/sites.component';
import { SiteDetailsComponent } from './components/site-details/site-details.component';




@NgModule({
  declarations: [SitesComponent, SiteDetailsComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatTableModule
  ],
  exports:[
    SitesComponent,
    SiteDetailsComponent
  ]
})
export class SiteModule { }
