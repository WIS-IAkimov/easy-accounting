import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Session } from '../../../auth';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  public isAuth$: Observable<boolean>;

  private readonly _destroy$ = new Subject<void>();

  constructor(
    private readonly _session: Session,
  ) { }

  ngOnInit(): void {
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
