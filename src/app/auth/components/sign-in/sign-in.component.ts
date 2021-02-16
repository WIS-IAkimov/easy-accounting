import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';


@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  host: {
    class: 'd-flex justify-content-center align-items-center min-vh-100',
  },
})
export class SignInComponent implements OnDestroy {

  public readonly loginForm: FormGroup;

  private readonly _destroy$: Subject<void> = new Subject();

  constructor(
    private readonly _fb: FormBuilder,
  ) {
    this.loginForm = this._createForm();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public login(): void {
    const {email, password} = this.loginForm.value;

    // this._session
    //   .create(email, password)
    //   .pipe(takeUntil(this._destroy$))
    //   .subscribe(() => {
    //     const redirectUrl = this._activatedRoute.snapshot.queryParams.redirectUrl;
    //     this._router.navigateByUrl(redirectUrl || '/');
    //   });
  }

  private _createForm(): FormGroup {
    return this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
