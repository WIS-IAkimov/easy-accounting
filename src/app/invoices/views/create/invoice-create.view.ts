import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './invoice-create.view.html',
  styleUrls: ['./invoice-create.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceCreateView implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
