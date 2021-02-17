import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { Session } from '../../services/session.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.container.html',
  styleUrls: ['./sign-in.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInContainer implements OnDestroy {

  @Output()
  public readonly signIn = new EventEmitter<void>();

  public readonly loginForm: FormGroup;

  public errorList: string[] = [];

  private readonly _destroy$: Subject<void> = new Subject();

  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _cdr: ChangeDetectorRef,
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

    const { email, password } = this.loginForm.value;

    this._session
      .login(email, password)
      .pipe(
        tap({
          next: () => this.signIn.emit(),
          error: this._handleError.bind(this),
        }),
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

  private _handleError(error: HttpErrorResponse): void {
    this.errorList = error.error.map((item) => item.message);
    this._cdr.markForCheck();
  }

}
