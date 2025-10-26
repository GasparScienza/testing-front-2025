import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const token = cookieService.get('token');

  if (token) {
    const cloned = req.clone({
      withCredentials: true,
    });
    return next(cloned);
  }

  return next(req);
};
