import {List} from "./list.model"
import {User} from "./user.model"
import {Injectable} from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class Task {
  task_id?: number
  list?: List
  user?: User
  description?: string
  status?: boolean
}
