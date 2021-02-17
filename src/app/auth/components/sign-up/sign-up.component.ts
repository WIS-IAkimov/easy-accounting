import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { Session } from '../../services/session.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  host: {
    class: 'd-flex justify-content-center align-items-center min-vh-100',
  },
})
export class SignUpComponent implements OnDestroy {

  @Output()
  public readonly signIn = new EventEmitter<void>();

  public readonly form: FormGroup;

  private readonly _destroy$: Subject<void> = new Subject();

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _session: Session,
  ) {
    this.form = this._createForm();
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

    const {email, password} = this.form.value;

    this._session
      .signup(email, password)
      .pipe(
        tap(() => this.signIn.emit()),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

  private _createForm(): FormGroup {
    return this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', this._matchPasswordsFn()],
    });
  }

  private _matchPasswordsFn(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isMatch = this.passwordControl?.value === control.value;

      return isMatch ? null : {notMatch: true};
    }
  }

}
