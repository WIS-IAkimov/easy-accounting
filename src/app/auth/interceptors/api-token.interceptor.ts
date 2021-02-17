import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Session } from '../services/session.service';

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {

  public constructor(
    private readonly _session: Session,
  ) {}

  public intercept(
    request: HttpRequest<unknown>,
    handler: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return handler
      .handle(this._applyToken(request));
  }

  private _applyToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const { token } = this._session;

    if (!token) {
      return request;
    }

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

}
