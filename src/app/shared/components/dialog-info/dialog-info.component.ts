import { Component, Inject, OnInit, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ICardData } from '../../../core/interfaces/ICardData.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-info',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './dialog-info.component.html',
  styleUrl: './dialog-info.component.scss',
})
export class DialogInfoComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogInfoComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: ICardData
  ) {}

  public getData = signal<ICardData | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}
