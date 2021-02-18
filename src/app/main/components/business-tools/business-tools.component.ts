import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-business-tools',
  templateUrl: './business-tools.component.html',
  styleUrls: ['./business-tools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
