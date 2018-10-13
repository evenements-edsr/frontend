import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'edsr-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  isBurgerClicked = false;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onClickBurger() {
    this.isBurgerClicked = !this.isBurgerClicked;
  }

  tt(event) {
    console.log(event);
  }

  navigateFromNavbar(url) {
    this.router.navigateByUrl(url).then(
      () => this.isBurgerClicked = false
    )
  }
}
