import { Component, HostListener, OnInit } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SvgIconComponent, CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '(window:resize)': ' getScreenSize($event)',
  },
})
export class HeaderComponent implements OnInit {
  showNavBar!: boolean;
  showDropdown!: boolean;
  screenHeight!: number;
  screenWidth!: number;

  // .replace(...) remove tudo que nao for número da string retornada pelo getPropertyValue
  minWidthDesktop = Number(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--min-width-desktop')
      .replace(/[^0-9]/g, '')
  );

  ngOnInit(): void {
    this.getScreenSize();
  }

  //@HostListener('window:resize', ['$event'])
  getScreenSize(event?: Event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.showNavBar = this.screenWidth > this.minWidthDesktop ? true : false;
    this.showDropdown = false;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
