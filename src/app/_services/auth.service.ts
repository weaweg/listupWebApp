import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {User} from "../_models/user.model";
import {UserStorageService} from "./user-storage.service";

const AUTH_API = 'http://localhost:4200/api/users'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private userStorage: UserStorageService) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(AUTH_API + '/login', {email, password})
  }

  register(name: string, email: string, password: string): Observable<any>{
    return this.http.put(AUTH_API + '/register', {name, email, password});
  }

  logout(): Observable<any> {
    this.userStorage.signOut()
    return this.http.post(AUTH_API + '/logout', null)
  }

  get isLoggedIn() {
    return this.userStorage.isLoggedIn
  }
}
