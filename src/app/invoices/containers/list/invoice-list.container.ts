import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Observable } from 'rxjs';
import { IInvoice } from '../../mappers/invoice.mapper';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.container.html',
  styleUrls: ['./invoice-list.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceListContainer implements OnInit {

  public invoices$: Observable<IInvoice[]>

  public readonly columns = ['client', 'description', 'issueDate', 'amount'];

  public constructor(
    private readonly _invoiceService: InvoiceService,
  ) { }

  public ngOnInit(): void {
    this.invoices$ = this._invoiceService.list();
  }


}
