import { HttpHandler, HttpInterceptor, HttpRequest, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept( req: HttpRequest<any>, next: HttpHandler){
    //重製Request
    const modifiedRequest = req.clone({headers:req.headers.append('Auth','ABC')})
    return next.handle(modifiedRequest);
  }
  constructor() { }
}
