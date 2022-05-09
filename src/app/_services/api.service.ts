import { Injectable } from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from "../_models/user.model"
import { Group } from "../_models/group.model"
import { List } from "../_models/list.model"
import { Task } from "../_models/task.model"

const API_URL = 'http://localhost:4200/api'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getSelfData(): Observable<User> {
    return this.http.get<User>(API_URL + '/users/self')
  }

  getUserGroups(): Observable<Array<Group>> {
    return this.http.get<Array<Group>>(API_URL + '/users/groups')
  }

  getOwnedGroups(): Observable<Array<Group>> {
    return this.http.get<Array<Group>>(API_URL + '/users/owned')
  }

  getUserTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(API_URL + '/users/tasks')
  }


  getGroupLists(groupId: number): Observable<Array<List>> {
    return this.http.get<Array<List>>(API_URL + "/groups/" + groupId +"/lists")
  }

  getListTasks(listId: number): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(API_URL + "/lists/" + listId +"/tasks")
  }

}
