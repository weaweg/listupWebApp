import {User} from "./user.model";
import {List} from "./list.model";

export class Group {
  group_id?: number
  name?: string
  owner?: User
  users?: User[]
  lists?: List[]
}
