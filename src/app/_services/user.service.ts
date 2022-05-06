import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:4200/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getSelfData(): Observable<any> {
    return this.http.get(API_URL + '/self');
  }

  register(name: string, email: string, password: string): Observable<any>{
    return this.http.put(API_URL + '/register', {name, email, password});
  }
}
