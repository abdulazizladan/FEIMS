import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren : ()=>import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '',
    loadChildren : ()=>import('./features/admin/admin.module').then(mod=>mod.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path : "**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
