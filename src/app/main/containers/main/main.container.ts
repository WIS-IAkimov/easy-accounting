import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.container.html',
  styleUrls: ['./main.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainer implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
