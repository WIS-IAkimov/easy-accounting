import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { Session } from '../../services/session.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnDestroy {

  @Output()
  public readonly signIn = new EventEmitter<void>();

  public readonly loginForm: FormGroup;

  private readonly _destroy$: Subject<void> = new Subject();

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _session: Session,
  ) {
    this.loginForm = this._createForm();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const {email, password} = this.loginForm.value;

    this._session
      .login(email, password)
      .pipe(
        tap(() => this.signIn.emit()),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

  private _createForm(): FormGroup {
    return this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
