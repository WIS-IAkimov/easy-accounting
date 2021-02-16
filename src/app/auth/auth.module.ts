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
import { SessionDataService } from './services/session-data.service';
import { Session } from './services/session.service';


@NgModule({
  declarations: [
    SignInComponent,
    SignInView,
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
      ],
    };
  }

}
