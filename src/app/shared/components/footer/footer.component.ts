import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, SvgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
