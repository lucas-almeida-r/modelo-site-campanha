import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { ICardData } from '../../../core/interfaces/ICardData.interface';
import { MatDialog } from '@angular/material/dialog';
import { coerceBooleanProperty, BooleanInput } from '@angular/cdk/coercion';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) data!: ICardData;

  @Input()
  get clickable() {
    return this._clickable;
  }
  set clickable(value: BooleanInput) {
    this._clickable = coerceBooleanProperty(value);
  }
  private _clickable = false;

  @Input()
  get img() {
    return this._img;
  }
  set img(value: BooleanInput) {
    this._img = coerceBooleanProperty(value);
  }
  private _img = false;

  @Input()
  get title() {
    return this._title;
  }
  set title(value: BooleanInput) {
    this._title = coerceBooleanProperty(value);
  }
  private _title = false;

  @Input()
  get description() {
    return this._description;
  }
  set description(value: BooleanInput) {
    this._description = coerceBooleanProperty(value);
  }
  private _description = false;

  #dialog = inject(MatDialog);
  public openDialog(data: ICardData) {
    this.#dialog.open(DialogInfoComponent, {
      data,
      panelClass: 'dialog-container-info',
    });
  }
}
