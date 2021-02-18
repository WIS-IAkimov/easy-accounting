import {
  Component, ChangeDetectionStrategy, Output, EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainFooterComponent {

  public email: string;

  @Output()
  public readonly subscribe = new EventEmitter<string>();

  public constructor() { }

  public emitSubscribe(): void {
    if (!this.email) {
      return;
    }

    this.subscribe.emit(this.email);
  }

}
