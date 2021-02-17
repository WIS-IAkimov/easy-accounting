import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.view.html',
  styleUrls: ['./auth.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-flex justify-content-center align-items-center vh-100',
  },
})
export class AuthView implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
