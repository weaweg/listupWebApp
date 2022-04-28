import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MainScreenComponent} from "./main-screen/main-screen.component";

const routes: Routes = [
  {path: '', component: MainScreenComponent},
  {path: 'edit/:id', component: ProductEditComponent},
  {path: 'add', component: ProductEditComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
