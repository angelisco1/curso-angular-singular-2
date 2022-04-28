import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { TokenService } from '../../cmp07-servicios/servicios/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.tokenService.getToken()

    if (token) {
      const newHeaders = request.headers.append('Authorization', '1234')
      const newRequest = request.clone({ headers: newHeaders })

      return next.handle(newRequest);
    }

    return next.handle(request)
      // .pipe(
      //   tap((resp: any) => {
      //     console.log('Respuesta: ', resp)
      //   })
      // )

  }
}
