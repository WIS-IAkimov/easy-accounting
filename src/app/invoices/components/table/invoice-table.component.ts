import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IInvoice } from '../../mappers/invoice.mapper';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceTableComponent implements OnChanges {

  @Input()
  public columns: string[];

  @Input()
  public invoices: IInvoice[];

  public dataSource: MatTableDataSource<IInvoice>;

  public constructor() { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.invoices) {
      this.dataSource = new MatTableDataSource<IInvoice>(this.invoices);
    }
  }

}
