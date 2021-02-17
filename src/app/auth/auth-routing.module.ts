import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInView } from './views/sign-in/sign-in.view';
import { SignUpView } from './views/sign-up/sign-up.view';
import { AuthView } from './views/auth/auth.view';

const routes: Routes = [
  {
    path: '',
    component: AuthView,
    children: [
      {
        path: 'login',
        component: SignInView,
      },
      {
        path: 'signup',
        component: SignUpView,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
