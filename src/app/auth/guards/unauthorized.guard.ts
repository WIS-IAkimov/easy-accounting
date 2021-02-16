import { Injectable } from '@angular/core';
import { Router, UrlTree, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { map } from 'rxjs/operators';

import { Session } from '../services/session.service';
import { Observable } from 'rxjs';


@Injectable()
export class UnauthorizedGuard implements CanActivate {

  constructor(
    private readonly _router: Router,
    private readonly _session: Session,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this._session
      .check()
      .pipe(
        map((isAuth) => {
          return !isAuth || this._redirectAuthorizedTo();
        }),
      );
  }

  private _redirectAuthorizedTo(): UrlTree {
    return this._router.createUrlTree(['/']);
  }

}
