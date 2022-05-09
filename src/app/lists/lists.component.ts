import { Component, OnInit } from '@angular/core'
import {ApiService} from "../_services/api.service"
import {List} from "../_models/list.model"
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists?: Array<List>

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']
      this.apiService.getGroupLists(id).subscribe( {
        next: data => {
          this.lists = data
        },
        error: err => {
          console.log(err)
        }
      })
    })
  }
}
