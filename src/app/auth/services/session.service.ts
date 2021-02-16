import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { SessionDataService } from './session-data.service';


@Injectable()
export class Session {

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _sessionDataService: SessionDataService,
  ) {
  }

  public create(email: string, password: string): Observable<true> {
    return this._httpClient.post<string>('login', {email, password})
      .pipe(
        tap((token) => this._sessionDataService.set(token)),
        mapTo(true),
      )
  }

  public check(): Observable<boolean> {
    const isAuthorized = this._sessionDataService.check();

    return of(isAuthorized);
  }

  public destroy(): Observable<void> {
    this._sessionDataService.clear();

    return of(null);
  }

}
