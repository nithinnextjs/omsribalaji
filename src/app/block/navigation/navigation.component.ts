import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navVisible = false;

  ngOnInit(): void {
    // This runs once when the component initializes
    console.log('NavigationComponent initialized');
  }

  toggleNav(): void {
    console.log('hello nav');
    this.navVisible = !this.navVisible;
    console.log('Toggled navVisible:', this.navVisible);
  }

  testClick(){
     console.log('Toggled navVisible:', this.navVisible);
  }
}
