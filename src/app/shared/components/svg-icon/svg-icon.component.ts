import { NgSwitch } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

type IconName = 'instagram' | 'facebook' | 'youtube';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [NgSwitch],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
})
export class SvgIconComponent implements OnInit {
  @Input({ required: true }) name!: IconName;
  @Input() size: string = '24px';
  @Input() color: string = '--black';

  fillColor = '';
  ngOnInit(): void {
    this.fillColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue(this.color);
  }
}
