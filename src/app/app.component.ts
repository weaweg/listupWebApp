import { Component } from '@angular/core';
import { UserStorageService} from "./_services/user-storage.service";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

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
  username?: string;

  constructor(private userStorage: UserStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userStorage.isLoggedIn;

    if (this.isLoggedIn) {
      const user = this.userStorage.getUser();
      this.username = user.name;
    }
  }

  logout(): void {
    this.userStorage.signOut();
    window.location.reload();
  }
}
