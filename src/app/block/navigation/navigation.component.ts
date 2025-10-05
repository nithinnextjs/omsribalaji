import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleNav(): void {
    this.navVisible = !this.navVisible;
    this.cdr.detectChanges();
  }

onNavLinkClick() {
  if (window.innerWidth <= 991) {
    this.navVisible = false;
  }
}

}
