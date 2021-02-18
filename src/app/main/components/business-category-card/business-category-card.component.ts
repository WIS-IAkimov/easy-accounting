import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-business-category-card',
  templateUrl: './business-category-card.component.html',
  styleUrls: ['./business-category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessCategoryCardComponent implements OnInit {

  @Input()
  public imageUrl: string;

  @Input()
  public title: string;

  @Input()
  public text: string;

  @Input()
  public index: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
