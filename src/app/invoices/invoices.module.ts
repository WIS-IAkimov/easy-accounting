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
import { InvoiceService } from './services/invoice.service';
import { InvoiceTableComponent } from './components/table/invoice-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ProductFormComponent } from './components/product-form/product-form.component';


@NgModule({
  declarations: [InvoiceListView, InvoiceListContainer, InvoiceCreateView, InvoiceCreateContainer, InvoiceFormComponent, InvoiceTableComponent, ProductFormComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [
    InvoiceService,
  ]
})
export class InvoicesModule { }
