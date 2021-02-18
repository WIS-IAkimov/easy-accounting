import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbacksComponent implements OnInit {

  public feedbacks: {
    name: string,
    position: string,
    address: string,
    comment: string,
    imageUrl: string,
  }[]

  public constructor() {
  }

  public ngOnInit(): void {
    this._initData();
  }

  private _initData(): void {
    this.feedbacks = [
      {
        name: 'Akram Mirza',
        position: 'Ceo Softech communications',
        address: 'Lahore Pakistan',
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry`,
        imageUrl: 'assets/images/avatar.jpg',
      },
      {
        name: 'Akram Mirza',
        position: 'Ceo Softech communications',
        address: 'Lahore Pakistan',
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry`,
        imageUrl: 'assets/images/avatar.jpg',
      },
      {
        name: 'Akram Mirza',
        position: 'Ceo Softech communications',
        address: 'Lahore Pakistan',
        comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry`,
        imageUrl: 'assets/images/avatar.jpg',
      },
    ];
  }

}
