import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('qweqweqweqw')
    const apiReq = request.clone({ url: `http://127.0.0.1:8000${request.url}` });
    return next.handle(this.modifyHeaders(apiReq));
  }

  modifyHeaders(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        Accept: 'application/json'
      }
    })
  }
}
