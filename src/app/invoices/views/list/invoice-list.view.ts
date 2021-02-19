import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './invoice-list.view.html',
  styleUrls: ['./invoice-list.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceListView implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
