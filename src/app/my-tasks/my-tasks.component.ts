import { Component, OnInit } from '@angular/core'
import { Task } from "../_models/task.model"
import { ApiService } from "../_services/api.service"

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {
  tasks?: Array<Task>

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUserTasks().subscribe({
      next: data => {
        this.tasks = data
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
