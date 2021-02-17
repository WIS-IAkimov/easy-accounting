import { Injectable } from '@angular/core';
import {
  Router,
  UrlTree,
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Session } from '../services/session.service';

@Injectable()
export class AuthorizedGuard implements CanActivate {

  public constructor(
    private readonly _router: Router,
    private readonly _session: Session,
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> {
    return this._session
      .check()
      .pipe(
        map((isAuth) => isAuth || this._redirectUnauthorizedTo(state)),
      );
  }

  private _redirectUnauthorizedTo(state: RouterStateSnapshot): UrlTree {
    return this._router.createUrlTree(['/auth/login'], {
      queryParams: {
        redirectUrl: state.url,
      },
    });
  }

}
