import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navVisible = false;

  ngOnInit(): void {
    console.log('NavigationComponent initialized');
  }

  toggleNav(): void {
    this.navVisible = !this.navVisible;
  }

  closeNav(): void {
    this.navVisible = false;
  }

  /**
   * Closes nav on link click (only on mobile)
   */
  onNavLinkClick(): void {
    if (window.innerWidth <= 991) {
      this.closeNav();
    }
  }

  /**
   * Optional: auto close nav on window resize
   */
  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth > 991) {
      this.closeNav();
    }
  }
}
