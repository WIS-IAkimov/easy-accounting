import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoiceListView } from './views/list/invoice-list.view';
import { InvoiceCreateView } from './views/create/invoice-create.view';

const routes: Routes = [
  {
    path: '',
    component: InvoiceListView,
  },
  {
    path: 'create',
    component: InvoiceCreateView,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {
}
