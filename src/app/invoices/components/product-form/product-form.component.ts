import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {

  @Input()
  public formArray: FormArray;

  @Output()
  public readonly addItem = new EventEmitter<void>();

  public constructor() { }

  ngOnInit(): void {
  }

  public add(): void {
    this.addItem.emit();
  }

}
