import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostlistComponent } from './postlist/postlist.component';


const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "about", component: AboutComponent },
  { path: "todo", component: TodoComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "posts-list", component: PostlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
