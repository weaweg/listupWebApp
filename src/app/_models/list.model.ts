import {Group} from "./group.model"
import {Task} from "./task.model"
import {Injectable} from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class List {
  list_id?: number
  name?: string
  group?: Group
  tasks?: Array<Task>
}
