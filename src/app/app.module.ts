import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostlistComponent } from './postlist/postlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SideBarComponent,
    HeaderComponent,
    AboutComponent,
    TodoComponent,
    DashboardComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
