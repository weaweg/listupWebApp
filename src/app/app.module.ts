import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GroupsComponent } from './groups/groups.component';
import { ListsComponent } from './lists/lists.component';
import { TasksComponent } from './tasks/tasks.component';
import { OwnedGroupsComponent } from './owned-groups/owned-groups.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GroupsComponent,
    ListsComponent,
    TasksComponent,
    OwnedGroupsComponent,
    MyTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
