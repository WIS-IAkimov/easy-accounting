import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.container.html',
  styleUrls: ['./main.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainer {

  public constructor() { }

}
