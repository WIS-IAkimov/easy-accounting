import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { InvoiceFormComponent } from '../../components/form/invoice-form.component';
import { FormGroup } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.container.html',
  styleUrls: ['./invoice-create.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceCreateContainer implements OnInit {

  public form: FormGroup;

  private readonly _destroy$ = new Subject<void>();

  @ViewChild(InvoiceFormComponent, { static: true })
  private readonly _invoiceFormComponent: InvoiceFormComponent

  public constructor(
    private readonly _invoiceService: InvoiceService,
  ) { }

  public ngOnInit(): void {
    this.form = this._invoiceFormComponent.getForm();
  }

  public create(): void {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;

    this._invoiceService.create(data)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

}
