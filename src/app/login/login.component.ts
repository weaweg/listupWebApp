import { Component, OnInit } from '@angular/core'
import { AuthService } from '../_services/auth.service'
import { UserStorageService } from '../_services/user-storage.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  }
  isLoggedIn = false
  isLoginFailed = false
  errorMessage = ''

  constructor(private authService: AuthService, private userStorage: UserStorageService, private router: Router) { }

  ngOnInit(): void {
      this.isLoggedIn = this.userStorage.isLoggedIn
  }

  onSubmit(): void {
    const { email, password } = this.form
    this.authService.login(email, password).subscribe({
      next: data => {
        this.userStorage.saveUser(data)

        this.isLoginFailed = false
        this.isLoggedIn = true
        window.location.reload()
        this.router.navigate(["/"]).then(() => {
          window.location.reload()
        })
      },
      error: err => {
        this.errorMessage = err.error.message
        this.isLoginFailed = true
      }
    })
  }
}
