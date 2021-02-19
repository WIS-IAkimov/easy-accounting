import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceListView } from './views/list/invoice-list.view';
import { InvoiceListContainer } from './containers/list/invoice-list.container';
import { InvoiceCreateView } from './views/create/invoice-create.view';
import { InvoiceCreateContainer } from './containers/create/invoice-create.container';
import { InvoiceFormComponent } from './components/form/invoice-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [InvoiceListView, InvoiceListContainer, InvoiceCreateView, InvoiceCreateContainer, InvoiceFormComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class InvoicesModule { }
