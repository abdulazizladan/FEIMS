import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from './auth/components/login/login.component';
//import { RegisterComponent } from './auth/components/register/register.component';
//import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path : 'a',
    loadChildren : ()=>import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '',
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
