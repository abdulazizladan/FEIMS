import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SitesComponent } from './components/sites/sites.component';
import { SiteDetailsComponent } from './components/site-details/site-details.component';




@NgModule({
  declarations: [SitesComponent, SiteDetailsComponent],
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  exports:[
    SitesComponent,
    SiteDetailsComponent
  ]
})
export class SiteModule { }
