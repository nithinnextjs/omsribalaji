import { Component, OnInit } from '@angular/core';

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
}
