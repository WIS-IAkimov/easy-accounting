import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceListView } from './views/list/invoice-list.view';
import { InvoiceListContainer } from './containers/list/invoice-list.container';


@NgModule({
  declarations: [InvoiceListView, InvoiceListContainer],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
