import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

  constructor(
  ) {}

  public intercept(
    request: HttpRequest<unknown>,
    handler: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return handler.handle(this._applyApiUrl(request));
  }

  private _applyApiUrl(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({
      url:  `/api/${request.url}`,
    });
  }

}
