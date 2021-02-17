import { Injectable } from '@angular/core';
import { Router, UrlTree, CanActivate } from '@angular/router';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Session } from '../services/session.service';

@Injectable()
export class UnauthorizedGuard implements CanActivate {

  public constructor(
    private readonly _router: Router,
    private readonly _session: Session,
  ) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this._session
      .check()
      .pipe(
        map((isAuth) => !isAuth || this._redirectAuthorizedTo()),
      );
  }

  private _redirectAuthorizedTo(): UrlTree {
    return this._router.createUrlTree(['/']);
  }

}
