import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../_models/user.model";
import { Group } from "../_models/group.model";
import { List } from "../_models/list.model";
import { Task } from "../_models/task.model";

const API_URL = 'http://localhost:4200/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getSelfData(): Observable<any> {
    return this.http.get<User>(API_URL + '/users/self');
  }

  getUserGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(API_URL + '/users/groups');
  }

  getOwnedGroups(): Observable<any> {
    return this.http.get<Group[]>(API_URL + '/users/owned');
  }

  getUserTasks(): Observable<any> {
    return this.http.get<Task[]>(API_URL + '/users/tasks');
  }


  getGroupLists(groupId: number): Observable<any> {
    let params = new HttpParams()
    params.append("groupId", groupId)
    return this.http.get<Group>(API_URL + '/groups', {params});
  }

  getListTasks(listId: number): Observable<any> {
    let params = new HttpParams()
    params.append("listId", listId)
    return this.http.get<List>(API_URL + '/lists', {params})
  }

}
