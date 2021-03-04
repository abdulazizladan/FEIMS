import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ){

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(this.authService.isLoggedIn()){
      return true
    }else{
      this.router.navigateByUrl('/login')
      return false;
    }
  }

  /*canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(map((response: { authenticated: boolean}) => {
        if (response.authenticated) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }), catchError((error) => {
        this.router.navigate(['/login']);
        return of(false);
    }));

  }*/

}
