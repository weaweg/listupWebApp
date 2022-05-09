import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import {AuthGuard} from "./_helpers/app.guard"
import {GroupsComponent} from "./groups/groups.component"
import {OwnedGroupsComponent} from "./owned-groups/owned-groups.component"
import {MyTasksComponent} from "./my-tasks/my-tasks.component"
import {ListsComponent} from "./lists/lists.component"
import {TasksComponent} from "./tasks/tasks.component"

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'groups', component: GroupsComponent, canActivate: [AuthGuard]},
  {path: 'owned_groups', component: OwnedGroupsComponent, canActivate: [AuthGuard]},
  {path: 'my_tasks', component: MyTasksComponent, canActivate: [AuthGuard]},
  {path: 'lists/:id', component: ListsComponent, canActivate: [AuthGuard]},
  {path: 'tasks/:id', component: TasksComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
