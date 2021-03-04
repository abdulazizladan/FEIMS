import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth.service';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private auth : AuthService, private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler){
    let authService = this.injector.get(AuthService)
    let tokenizedRequest = request.clone({
      setHeaders : {
        Authorization: 'Bearer ${authService.getToken()}'
      }
    })
    return next.handle(tokenizedRequest);
  }
}
