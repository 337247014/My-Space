import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from './home.service';
import { UserService } from '../common/services/index';
import { User } from '../models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: any;
  users: User[] = [];

  constructor(
    private router: Router,
    private homeService: HomeService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.title = 'My Space';

    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  gotoScroll(): void {
    // document.location = "home#tileCard";
  }

  gotoImages(): void {
    this.router.navigate(['/images']);
  }

  gotoCharts(): void {
    this.router.navigate(['/chart']);
  }

  gotoForm(): void {
    this.router.navigate(['/form']);
  }

}
