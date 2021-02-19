import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceFormComponent {

  public form: FormGroup;

  public constructor(
    private readonly _formBuilder: FormBuilder
  ) { }

  public getForm(): FormGroup {
    this._initForm();

    return this.form;
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({});
  }

}
