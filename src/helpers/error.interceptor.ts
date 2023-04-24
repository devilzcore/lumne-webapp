import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthenticationService } from 'src/services/auth.service';

@Injectable()
export class ErrorInterceptor implements ErrorInterceptor {
constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 4001) {
        this.authenticationService.logout()
        location.reload() // true
      }

      const error = err.error.message || err.statusText
      return throwError(error)
    }))
 }
}
