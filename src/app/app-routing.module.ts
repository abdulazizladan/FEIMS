import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path : '',
    loadChildren : ()=>import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'admin',
    loadChildren : ()=>import('./features/admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path : "**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
