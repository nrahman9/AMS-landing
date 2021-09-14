import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css'],
})
export class NavbarHomeComponent implements OnInit {
  navbarfixed: boolean = false;
  @HostListener('window:scroll', [])
  onscroll() {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
