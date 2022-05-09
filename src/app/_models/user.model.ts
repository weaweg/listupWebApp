import {Group} from "./group.model"
import {Task} from "./task.model"
import {Injectable} from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class User {
  user_id?: number
  name?: string
  email?: string
  password?: string
  creation_date?: Date
  last_login?: Date
  tasks?: Array<Task>
  groups?: Array<Group>
  owned_groups?: Array<Group>
}
