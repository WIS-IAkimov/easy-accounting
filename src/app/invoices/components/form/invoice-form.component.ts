import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceFormComponent {

  public form: FormGroup;
  public productsFrom: FormArray;

  public constructor(
    private readonly _formBuilder: FormBuilder
  ) { }

  public getForm(): FormGroup {
    this._initForm();

    return this.form;
  }

  private _initForm(): void {
    this.productsFrom = this._formBuilder.array([]);
    this.addProduct();
    this.form = this._formBuilder.group({
      companyName: [null, Validators.required],
      billingCompanyName: [null, Validators.required],
      billingAddress: [null, Validators.required],
      billingNote: null,
      subTotal: null,
      tax: null,
      paidAmount: null,
      total: null,
      balance: null,
      terms: null,
      notes: null,
      item: this.productsFrom,
    });
  }

  public addProduct(): void {
    const group = this._formBuilder.group({
      name: null,
      quantity: 1,
      rate: 0,
      amount: 0,
    });

    this.productsFrom.push(group);
  }

}
