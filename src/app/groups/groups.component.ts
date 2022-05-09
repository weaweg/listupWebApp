import { Component, OnInit } from '@angular/core'
import {ApiService} from "../_services/api.service"
import {Group} from "../_models/group.model"


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups?: Array<Group>

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUserGroups().subscribe( {
      next: data => {
        this.groups = data
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
