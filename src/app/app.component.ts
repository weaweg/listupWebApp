import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import {AuthService} from "./_services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faUserPlus = faUserPlus
  faUser = faUser
  faList = faList
  faUsers = faUsers
  faUserTie = faUserTie
  faCogs = faCogs

  isLoggedIn = false;
  name?: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}
