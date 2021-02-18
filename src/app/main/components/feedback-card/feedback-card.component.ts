import { Component, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackCardComponent {

  @Input()
  public name: string;


  @Input()
  public position: string;

  @Input()
  public address: string;

  @Input()
  public comment: string;

  @Input()
  public imageUrl: string;

  constructor() {
  }

}
