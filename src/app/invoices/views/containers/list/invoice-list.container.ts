import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.container.html',
  styleUrls: ['./invoice-list.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceListContainer implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
