import {Group} from "./group.model";
import {Task} from "./task.model"

export class List {
  list_id?: number
  name?: string
  group?: Group
  tasks?: Task[]
}
