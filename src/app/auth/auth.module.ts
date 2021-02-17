import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInView } from './views/sign-in/sign-in.view';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpView } from './views/sign-up/sign-up.view';
import { SessionDataService } from './services/session-data.service';
import { Session } from './services/session.service';
import { AuthorizedGuard } from './guards/authorized.guard';
import { UnauthorizedGuard } from './guards/unauthorized.guard';
import { AuthView } from './views/auth/auth.view';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    SignUpView,
    SignInView,
    AuthView,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,

    AuthRoutingModule,
  ]
})
export class AuthModule {

  public static forRoot(): ModuleWithProviders<AuthModule> {

    return {
      ngModule: AuthModule,
      providers: [
        Session,
        SessionDataService,
        AuthorizedGuard,
        UnauthorizedGuard,
      ],
    };
  }

}
