import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-in.view.html',
  styleUrls: ['./sign-in.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInView {

  public constructor(
    private readonly _router: Router,
  ) { }

  public onSignIn(): void {
    this._router.navigate(['/']);
  }

}
