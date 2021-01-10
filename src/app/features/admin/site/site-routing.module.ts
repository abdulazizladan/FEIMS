import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitesComponent } from './components/sites/sites.component'
import { SiteDetailsComponent } from './components/site-details/site-details.component'

const routes: Routes = [
  {
    path: '',
    component: SitesComponent
  },
  {
    path: 'site-details',
    component: SiteDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
