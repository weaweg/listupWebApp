import { Component, OnInit } from '@angular/core'
import {Group} from "../_models/group.model"
import {ApiService} from "../_services/api.service"

@Component({
  selector: 'app-owned-groups',
  templateUrl: './owned-groups.component.html',
  styleUrls: ['./owned-groups.component.css']
})
export class OwnedGroupsComponent implements OnInit {
  owned?: Array<Group>

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getOwnedGroups().subscribe( {
      next: data => {
        this.owned = data
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
