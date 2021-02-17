import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-up.view.html',
  styleUrls: ['./sign-up.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpView {

  constructor(
    private readonly _router: Router,
  ) { }

  public onSignIn(): void {
    this._router.navigate(['/']);
  }

}
