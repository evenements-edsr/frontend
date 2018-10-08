import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edsr-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isBurgerClicked = false;

  constructor() { }

  ngOnInit() {
  }

  onClickBurger() {
    this.isBurgerClicked = !this.isBurgerClicked;
  }
}
