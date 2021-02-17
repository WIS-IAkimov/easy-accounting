import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';

import { SessionDataService } from './session-data.service';


@Injectable()
export class Session {

  public token: string;

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _sessionDataService: SessionDataService,
  ) {
    this.token = this._sessionDataService.get();
  }

  public login(email: string, password: string): Observable<true> {
    return this._httpClient.post<string>('login', {email, password})
      .pipe(
        tap((token) => {
          this.token = token;
          this._sessionDataService.set(token);
        }),
        mapTo(true),
      )
  }

  public signup(email: string, password: string): Observable<true> {
    return this._httpClient.post<string>('signup', {email, password})
      .pipe(
        tap((token) => {
          this.token = token;
          this._sessionDataService.set(token);
        }),
        mapTo(true),
      )
  }

  public logout(): Observable<void> {
    this._sessionDataService.clear();
    this.token = null;

    return of(null);
  }

  public check(): Observable<boolean> {
    const isAuthorized = this._sessionDataService.check();

    return of(isAuthorized);
  }

}
