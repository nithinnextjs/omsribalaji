import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navVisible: boolean = false;

  toggleNav(): void {
    this.navVisible = !this.navVisible;
  }
}
