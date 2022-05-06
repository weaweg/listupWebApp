import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

const AUTH_API = 'http://localhost:4200/api/users'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/login', {email, password})
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + '/logout', null)
  }
}
