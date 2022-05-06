import {Group} from "./group.model";
import {Task} from "./task.model"

export class User {
  user_id?: number
  name?: string
  email?: string
  password?: string
  creation_date?: Date
  last_login?: Date
  tasks?: Task[]
  groups?: Group[]
  owned_groups?: Group[]
}
