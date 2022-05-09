import { Component, OnInit } from '@angular/core'
import {ApiService} from "../_services/api.service"
import {User} from "../_models/user.model"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService,
              public user:User) {
  }
  ngOnInit(): void {
    this.apiService.getSelfData().subscribe( {
      next: data => {
        this.user = data
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
