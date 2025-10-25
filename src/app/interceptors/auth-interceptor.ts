import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Leés el token desde las cookies
    const token = this.cookieService.get('token'); // nombre según como lo guarde el back

    // Si existe, clonás la request y le agregás el header Authorization
    if (token) {
      const cloned = req.clone({
        // setHeaders: {
        //   Authorization: `Bearer ${token}`,
        // },
        withCredentials: true, // si tu backend usa cookies/sesiones
      });
      return next.handle(cloned);
    }
    // Si no hay token, simplemente sigue la request original
    return next.handle(req);
  }
}
