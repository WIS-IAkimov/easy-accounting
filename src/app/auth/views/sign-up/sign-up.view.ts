import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './sign-up.view.html',
  styleUrls: ['./sign-up.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpView {

  public constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) { }

  public onSignIn(): void {
    this._router.navigate(['login'], {
      relativeTo: this._activatedRoute.parent,
    });
  }

}
