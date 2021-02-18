import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Session } from '../../../auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {

  public isAuth$: Observable<boolean>;

  private readonly _destroy$ = new Subject<void>();

  public constructor(
    private readonly _session: Session,
  ) {
  }

  public ngOnInit(): void {
    this.isAuth$ = this._session.isAuthorized$;
  }

  public signOut(): void {
    this._session.logout()
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

}
