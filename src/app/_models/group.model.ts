import {User} from "./user.model"
import {List} from "./list.model"
import {Injectable} from "@angular/core"

@Injectable({
  providedIn: 'root'
})
export class Group {
  group_id?: number
  name?: string
  owner?: User
  users?: Array<User>
  lists?: Array<List>
}


