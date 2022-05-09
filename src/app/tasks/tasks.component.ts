import { Component, OnInit } from '@angular/core'
import {Task} from "../_models/task.model"
import {ApiService} from "../_services/api.service"
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks?: Array<Task>

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']
      this.apiService.getListTasks(id).subscribe({
        next: data => {
          this.tasks = data
        },
        error: err => {
          console.log(err)
        }
      })
    })
  }
}
