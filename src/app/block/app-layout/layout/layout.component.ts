import { Component, OnInit } from '@angular/core';
import { AboutUsComponent } from '../../about-us/about-us.component'; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   $('[data-toggle="counter-up"]').c({
  //     delay: 10,
  //     time: 2000
  // });
  }

}
