import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output,
} from '@angular/core';
import {
  AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { Session } from '../../services/session.service';
import { ISignUpRequest } from '../../interfaces/sign-up.request.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.container.html',
  styleUrls: ['./sign-up.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpContainer implements OnDestroy {

  @Output()
  public readonly signUp = new EventEmitter<void>();

  public readonly form: FormGroup;

  public serverErrors: Record<string, string>;

  private readonly _destroy$: Subject<void> = new Subject();

  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _session: Session,
  ) {
    this.form = this._createForm();
  }

  public get emailControl(): AbstractControl {
    return this.form?.get('email');
  }

  public get confirmPasswordControl(): AbstractControl {
    return this.form?.get('confirmPassword');
  }

  private get passwordControl(): AbstractControl {
    return this.form?.get('password');
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public signup(): void {
    if (this.form.invalid) {
      return;
    }

    const data = this._getFormData();

    this._session
      .signup(data)
      .pipe(
        tap({
          next: () => this.signUp.emit(),
          error: this._handleError.bind(this),
        }),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

  private _createForm(): FormGroup {
    return this._fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', this._matchPasswordsFn()],
    });
  }

  private _getFormData(): ISignUpRequest {
    return {
      name: this.form.value.name,
      surname: this.form.value.surname,
      email: this.form.value.email,
      password: this.form.value.password,
    };
  }

  private _matchPasswordsFn(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isMatch = this.passwordControl?.value === control.value;

      return isMatch ? null : { notMatch: true };
    };
  }

  private _handleError(error: HttpErrorResponse): void {
    this.serverErrors = {};
    error.error.forEach((errorItem) => {
      const control = this.form.get(errorItem.field);

      if (!control) {
        return;
      }

      control.setErrors({ server: true });
      this.serverErrors[errorItem.field] = errorItem.message;
    });

    this._cdr.markForCheck();
  }

}
